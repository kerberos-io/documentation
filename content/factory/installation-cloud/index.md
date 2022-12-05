---
title: "Cloud Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: true
images: []
menu:
  factory:
    parent: "factory"
weight: 303
toc: true
---

If not already the case, start by creating a Kubernetes cluster. This can be done though one of the hyperscalers (AWS, GCP, Azure), cloud providers (Digital Ocean, Scaleway, etc) or inside your private cloud; for the latter it is advised [to follow the edge installation](/factory/installation-edge).

{{< figure src="factory-cloud.svg" alt="Process your video streams in the cloud." caption="Process your video streams in the cloud" class="stretch">}}

## Installation

Before setting up Kerberos Factory, the first thing that we need to do is enabling RBAC permissions (Role Based Access Control). This needs to be enabled to query specific endpoints from the Kubernetes API. By default, these endpoints are blocked, so we need to unlock them.

First clone the configurations from the GitHub repository [kerberos-io/factory]( https://github.com/kerberos-io/factory).

    git clone https://github.com/kerberos-io/factory

A best practice is to create a separate namespace for your Kerberos Factory and Kerberos Agent deployments.

    kubectl create namespace kerberos-factory

Next go into the directory and execute the first Kubernetes configuration file `clusterrole.yaml`.

    kubectl create -n kerberos-factory -f ./factory/yaml/clusterrole.yaml

This will make several APIs inside your Kubernetes cluster available. We need this to be able to create deployments from the factory web app through the Kubernetes Golang SDK.

### Helm

Next we will install a couple of dependencies which are required for Kerberos Factory. [**Helm**](https://helm.sh/) is a package manager for Kubernetes, it helps you to set up services more easily (this could be a MQTT broker, a database, etc).
Instead of writing yaml files for every service we need, we use so-called Charts (libraries), that you can reuse and configure the, with the appropriate settings.

Use one of the preferred OS package managers to install the Helm client:

    brew install helm

    choco install kubernetes-helm

    scoop install helm

    gofish install helm

### Traefik

[**Traefik**](https://containo.us/traefik/) is a reverse proxy and load balancer which allows you to expose your deployments more easily. Kerberos uses Traefik to expose its APIs more easily.

Add the Helm repository and install traefik.

    kubectl create namespace traefik
    helm repo add traefik https://helm.traefik.io/traefik
    helm install traefik traefik/traefik -n traefik 

After installation, you should have an IP attached to Traefik service, look for it by executing the `get service` command. You will see the ip address in the `EXTERNAL-IP` attribute.

    kubectl get svc

        NAME                        TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE
        kubernetes                  ClusterIP      10.0.0.1       <none>          443/TCP                      36h
    --> traefik                     LoadBalancer   10.0.27.93     40.114.168.96   443:31623/TCP,80:31804/TCP   35h
        traefik-dashboard           NodePort       10.0.252.6     <none>          80:31146/TCP                 35h

Go to your DNS provider and link the domain you've configured in the first step `traefik.domain.com` to the IP address of thT `EXTERNAL-IP` attribute. When browsing to `traefik.domain.com`, you should see the traefik dashboard showing up.

### Ingress-Nginx (alternative for Traefik)

If you don't like `Traefik` but you prefer `Ingress Nginx`, that works as well.

    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    kubectl create namespace ingress-nginx
    helm install ingress-nginx -n ingress-nginx ingress-nginx/ingress-nginx

### MongoDB

When using Kerberos Factory, it will generate configurations for every video stream deployed. These configuration files are persisted in a MongoDB database. As used before, we are using `helm` to install MongoDB in our Kubernetes cluster.

Have a look into the `./factory/yaml/mongodb/values.yaml` file, you will find plenty of configurations for the MongoDB helm chart. To change the username and password of the MongoDB instance, go ahead and [find the attribute where](https://github.com/kerberos-io/factory/blob/master/yaml/mongodb/values.yaml#L75) you can change the root password.

    helm repo add bitnami https://charts.bitnami.com/bitnami
    kubectl create namespace mongodb
    helm install mongodb -n mongodb bitnami/mongodb --values ./factory/yaml/mongodb/values.yaml

Once installed successfully, we should verify if the password has been set correctly. Print out the password using `echo $MONGODB_ROOT_PASSWORD` and confirm the password is what you've specified in the `values.yaml` file.

    export MONGODB_ROOT_PASSWORD=$(kubectl get secret -n mongodb mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)
    echo $MONGODB_ROOT_PASSWORD

### Kerberos Factory

The last step is to install the Kerberos Factory application. Kerberos Factory is responsible for installing and creating the kubernetes deployments inside your Kubernetes cluster.

#### Config Map

Kerberos Factory requires a MongoDB instance to be running, it uses it to store configuration files and other metrics. To specify those credentials a configmap is created and injected into the Kerberos Factory deployment.

Modify the MongoDB credentials in the configmap `./factory/yaml/mongodb.config.yaml`, and make sure they match the credentials of your MongoDB instance.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "yourmongodbpassword"

Create the config map.

    kubectl apply -f ./factory/yaml/mongodb.config.yaml -n kerberos-factory

#### Deployment

Before installing Kerberos Factory, open the `./factory/yaml/deployment.yaml` configuration file. At the of the bottom file you will find two endpoints, similar to the Ingres file below. Update the hostnames to your own preferred domain, and add these to your DNS server or `/etc/hosts` file (pointing to the same IP as the Traefik/Ingress-nginx EXTERNAL-IP).

        spec:
          rules:
    -->   - host: factory.domain.com
            http:
              paths:
              - path: /
                backend:
                  serviceName: factory
                  servicePort: 80
    -->   - host: api.factory.domain.com
            http:
              paths:
              - path: /
                backend:
                  serviceName: factory
                  servicePort: 8081

If you are using Ingress Nginx, do not forgot to comment `Traefik` and uncomment `Ingress Nginx`.

    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
      name: factory
      annotations:
        #kubernetes.io/ingress.class: traefik
        kubernetes.io/ingress.class: nginx

Once you have corrected the DNS names (or internal /etc/hosts file), install the Kerberos Factory web app inside your cluster.

    kubectl apply -n kerberos-factory -f ./factory/yaml/factory/deployment.yaml

## Test out configuration

If everything worked out as expected, you should now have following services in your cluster across different namespaces:

- MongoDB
- Traefik
- Factory

It should look like this.

    $ kubectl get pods -n kerberos-factory
    NAME                              READY   STATUS    RESTARTS   AGE
    factory-6f5c877d7c-hf77p          1/1     Running   0          2d11h

    $ kubectl get pods -n mongodb
    NAME                              READY   STATUS    RESTARTS   AGE
    mongodb-758d5c5ddd-qsfq9          1/1     Running   0          5m31s

    $ kubectl get pods -n traefik
    NAME                              READY   STATUS    RESTARTS   AGE
    traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h

## Access the system

Once everything is configured correctly your cluster and DNS, you should be able to set up the Factory application. By navigating to the domain `factory.domain.com` in your browser you will see the login page showing up.

{{< figure src="login.png" alt="Once successfully installed Kerberos Factory, it will show you the login page." caption="Once successfully installed Kerberos Factory, it will show you the login page." class="stretch">}}
