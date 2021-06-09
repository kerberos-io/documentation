---
title: "Cloud Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "enterprise"
weight: 303
toc: true
---

Start by installing a Kubernetes cluster. This can be done on one of the hyperscalers (**AWS**, **GCP** or **Azure**),
cloud providers (Digital Ocean, Scaleway, etc) or on-premise in your own private network.

<br/>
<div class='embed-container'><iframe src="https://player.vimeo.com/video/404813147" width="640" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
<br/><br/>

## Installation

Before setting up Kerberos Enterprise, some configuration needs to happen. First thing that we need to do is setting up the RBAC permissions (Role Based Access Control). We need to enable this to be able to query specific endpoints from the Kubernetes API. By default these endpoints are locked, so we need to unlock them.

<br/>
<div class='embed-container'><iframe src="https://player.vimeo.com/video/404767375" width="640" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
<br/><br/>

First clone the configrations from our Github repo.

    git clone https://github.com/kerberos-io/enterprise

A best practice is to create a separate namespace for your enterprise deployment.

    kubectl create namespace kerberos

Next go into the directory and execute the first Kubernetes configuration file `clusterrole.yaml`.

    kubectl create -n kerberos -f ./enterprise/yaml/factory/clusterrole.yaml

This will make several actions inside your cluster available. We need this to be able to create deployments from the factory web app.

### Helm

Next we will install a couple of dependencies which are required for Kerberos Enterprise. [**Helm**](https://helm.sh/) is a package manager for Kubernetes, it helps you setting up services more easily (this could be a MQTT broker, a database, etc).
Instead of writing yaml files for every service we need, we use so called **Charts** (libraries), that you can reuse and configure the,
with the appropriate settings.

Use one of the preferred OS package managers to install the Helm client:

    brew install helm

    choco install kubernetes-helm

    scoop install helm

    gofish install helm

### Traefik

[**Traefik**](https://containo.us/traefik/) is a reverse proxy and load balancer which allows you to expose your deployments more easily. Kerberos uses Traefik to expose it's APIs more easily.

By executing following helm command, we will install traefik and link it to a specific DNS name. Open the traefik values file, `./enterprise/yaml/traefik/values.yaml`, and update the DNS name to your own domain.

        dashboard:
          enabled: true
    -->   domain: traefik.domain.com
          serviceType: NodePort
        rbac:
            enabled: true

Add Helm repository and install traefik.

    helm repo add stable https://charts.helm.sh/stable
    helm install traefik -n kerberos -f ./enterprise/yaml/traefik/values.yaml stable/traefik

After installation you should have an IP attached to traefik service, look for it by executing the `get service` command. You will see the ip address in the `EXTERNAL-IP` attribute.

    kubectl get svc

        NAME                        TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE
        kubernetes                  ClusterIP      10.0.0.1       <none>          443/TCP                      36h
    --> traefik                     LoadBalancer   10.0.27.93     40.114.168.96   443:31623/TCP,80:31804/TCP   35h
        traefik-dashboard           NodePort       10.0.252.6     <none>          80:31146/TCP                 35h

Go to your DNS provider and link the domain you've configured in the first step `traefik.domain.com` to the IP address of the `EXTERNAL-IP` attribute. When browsing to `traefik.domain.com`, you should see the traefik dashboard showing up.

### Ingress-Nginx (alternative for Traefik)

If you don't like `Traefik` but you prefer `Ingress Nginx`, that works as well.

    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    helm install ingress-nginx -n kerberos ingress-nginx/ingress-nginx

### MongoDB

When using Kerberos Enterprise, it will generate configurations for every surveillance camera deployed. These configuration files are stored centrally in a MongoDB database. Therefore we use `helm `to install a MongoDB instance inside your cluster.

Have a look into the `yaml/mongodb/values.yaml` file, you will find plenty of configurations for your MongoDB instance. You will also find the attribute where you can change the root password of mongodb.

    helm repo add bitnami https://charts.bitnami.com/bitnami
    helm install mongodb -n kerberos bitnami/mongodb --values ./enterprise/yaml/mongodb/values.yaml

Once installed succesfully the MongoDB instance, we should copy the password of the MongoDB instance. Once revealed copy the password, as we will need in the next steps.

    export MONGODB_ROOT_PASSWORD=$(kubectl get secret -n kerberos mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)
    echo $MONGODB_ROOT_PASSWORD

### Kerberos Enterprise Web App - The Factory

The last step is to install the Kerberos Enterprise application. Kerberos Enterprise is managed through an application which we call the `Factory`. It is responsible for initiating the deployments inside your cluster. These deployments is what we also call (similar to the Open Source version) the machinery.

The Factory is shipped as a web app (React) which provides you with a tool to update your deployments (agents) easily, monitor them, etc. The Factory is the central portal for managing Kerberos Enterprise inside your cluster. However at any point you can fine-tune or take-over using the `kubectl` command.

Before installing the Factory web app, open the `./enterprise/yaml/factory/deployment.yaml` configuration file. At the of the bottom file you will find two endpoints, similar to the Ingres file bewlwo. Update the hostnames to your own perferred domain, and add these to your DNS server or `/etc/hosts` file (pointing to the same IP as the Traefik/Ingress nginx EXTERNAL-IP).

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

Modify the MongoDB credentials, and make sure they match the credentials of your MongoDB instance.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "xxxxxxxxxx"

Once you have corrected the DNS names (or internal /etc/hosts file), install the Factory web app inside your cluster.

    kubectl apply -n kerberos -f ./enterprise/yaml/factory/deployment.yaml

## Test out configuration

If everything worked out as expected, you should now have following services in your cluster:

- MongoDB
- Traefik
- Factory

It should look like this.

    $ kubectl get pods -n kerberos
    NAME                              READY   STATUS    RESTARTS   AGE
    factory-6f5c877d7c-hf77p          1/1     Running   0          2d11h
    mongodb-758d5c5ddd-qsfq9          1/1     Running   0          5m31s
    traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h

## Access the system

Once everything is configured correctly your cluster and DNS, you should be able to setup the Factory application. By navigating to the Factory domain `factory.domain.com` in your browser you will see the Factory login page showing up.

![Factory](../../public/images/factory/kerberos-factory-loginpage.png)