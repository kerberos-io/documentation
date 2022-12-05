---
title: "Cloud Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: true
images: []
menu:
  vault:
    parent: "vault"
weight: 303
toc: true
---

If not already the case, start by creating a Kubernetes cluster. This can be done though one of the hyperscalers (**AWS**, **GCP** or **Azure**), cloud providers (Digital Ocean, Scaleway, etc) or inside your private cloud; for the latter it is advised [to follow the edge installation](/vault/installation-edge).

{{< figure src="vault-cloud-deployment.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

## Prerequisites

Kerberos Vault is the storage component of the Kerberos Enterprise Suite. It is used to store your recordings at a central place, on the storage system you prefer. Next to that it can be used for extension and integration capabilities. Learn more about [Kerberos Vault here](/vault).

To use Kerberos Vault, you will need to have one or more Kerberos Agents installed. Independent of that one can also use the Kerberos Vault API `/swagger/index.html` to send recordings from a custom build VMS. Nothing stops you from developing a custom agent.

## Installation

Kerberos Vault requires some initial components to be installed. If you run Kerberos Vault in the same cluster as where you have a Kerberos Factory installed, there is not much to do.

{{< figure src="vault-cloud-storage.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

If you plan to run Kerberos Vault in a different cluster (which is perfectly possible), you will need to make sure you complete the initial setup of the [Kerberos Factory installation](/enterprise/installation). To be more specific you will need to have following components running:

- Helm
- MongoDB
- Traefik (or alternatively Nginx ingress)

Once this is done start by cloning the configurations from our [Github repo](https://github.com/kerberos-io/vault).

    git clone https://github.com/kerberos-io/vault

### Vault deployment

Before installing Kerberos Vault, open the `./vault/yaml/deployment.yaml` configuration file. At the bottom of the file you will find two endpoints, similar to the Traefik configuration file below. 

Update the domain names to your own domain, and add these to your DNS server or `/etc/hosts` file . Make sure to point to the DNS name to the same IP as the Traefik service `EXTERNAL-IP`.

    spec:
      rules:
    > - host: storage.vault.com
        http:
        paths:
        - path: /
            pathType: Prefix
            backend:
              service:
                name: kerberos-vault
                port:
                  number: 80
    > - host: api.vault.domain.com
        http:
        paths:
        - path: /
            pathType: Prefix
            backend:
              service:
                name: kerberos-vault
                port:
                  number: 8081

If you are using Ingress Nginx, do not forgot to comment `Traefik` and uncomment `Ingress Nginx`. Also note the extra argument `proxy-body-size`, which is required for overcoming the default 1MB body size limit; if you do not enable this, you might experience `413` errors in your Kerberos Agents.

    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
      name: kerberos-storage
      annotations:
        #kubernetes.io/ingress.class: traefik
        kubernetes.io/ingress.class: nginx
        nginx.ingress.kubernetes.io/proxy-body-size: 200m

Kerberos Vault requires a MongoDB instance to be running, it uses it to store media, configurations, etc. To specify those credentials a configmap is created and injected into the Kerberos Factory deployment.

Modify the MongoDB credentials in the configmap `./vault/yaml/mongodb.config.yaml`, and make sure they match the credentials of your MongoDB instance.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "yourmongodbpassword"

Create namespace

    kubectl create namespace kerberos-vault
    
Create the config map.

    kubectl apply -f ./vault/yaml/mongodb.config.yaml -n kerberos-vault

Once you have corrected the DNS names and MongoDB credentials, install Kerberos Vault inside your cluster.

    kubectl apply -f ./vault/yaml/deployment.yaml -n kerberos-vault

## Test out configuration

If everything worked out as expected, you should now have following services in your cluster:

- MongoDB
- Traefik
- Vault
- Factory (optional)

It should look like this.

    $ kubectl get pods
    NAME                              READY   STATUS    RESTARTS   AGE
    kerberos-vault-6f5c877d7c-hf77p 1/1     Running   0          2d11h
    mongodb-55566dc65c-xgmns          2/2     Running   0          4d13h
    traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h

## Access the system

Once everything is configured correctly your cluster and DNS or `/etc/hosts` file, you should be able to access the Kerberos Vault application. By navigating to the domain `vault.domain.com` in your browser you will see the Kerberos Vault login page showing up.

{{< figure src="login.gif" alt="Once successfully installed Kerberos Vault, it will show you the login page." caption="Once successfully installed Kerberos Vault, it will show you the login page." class="stretch">}}
