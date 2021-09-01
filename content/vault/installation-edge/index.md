---
title: "Edge Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  vault:
    parent: "vault"
weight: 304
toc: true
---

Welcome to the Kerberos Vault Edge installation. This is the way to go if you want to install Kerberos Vault on your Baremetal infrastructure or inside your Private Cloud.

{{< figure src="../first-things-first/arch-edge-kerberos-vault.svg" alt="Store your recordings at the edge with Kerberos Vault" caption="Store your recordings at the edge with Kerberos Vault" class="stretch">}}
Before we can actual start installing the different deployments in our cluster, we need to make sure we have one available.

## Prerequisites

Kerberos Vault is the storage component for Kerberos Enterprise. It is used to store your recordings at a central place, in the storage system you prefer. Next to that it can be used for extension and integration capabilities. Learn more about [Kerberos Vault here](/storage).

To use Kerberos Vault, you will need to have Kerberos Enterprise installed, and deployments running. Independent from that one can also use the Kerberos Vault API `/swagger/index.html` to send recordings from a custom build VMS.

## Installation

Similar to Kerberos Enterprise, Kerberos Vault, requires some initial components to be installed. If you will run Kerberos Vault in the same cluster as where you have Kerberos Enterprise running, there is not much to do.

However if you plan to run Kerberos Vault in a different cluster (which is perfectly possible), you will need to make sure you complete the initial setup of [Kerberos Enterprise Edge](/enterprise/installation-edge) installation. To be more specific you will need the following components running:

- Helm
- Calico
- MetalLB
- MongoDB
- Traefik

Once this is done start by cloning the configurations from our [Github repo](https://github.com/kerberos-io/vault).

    git clone https://github.com/kerberos-io/vault

### Storage

Similar to Kerberos Enterprise, Kerberos Vault is managed through a web app. It allows you to add storage providers (S3, minio, etc), add queues for messaging, accounts for security and much more. It also comes with API's, which you can use to interact and retrieve information from Kerberos Vault. All is documented in the form of Swagger APIs `/swagger/index.html`.

Before installing Kerberos Vault, open the `./vault/yaml/deployment.yaml` configuration file. At the bottom file you will find two endpoints, similar to the Traefik config file below. Update the domain names to your own domain, and add these to your DNS server or `/etc/hosts` file (and point to the same IP as the Traefik EXTERNAL-IP).

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

Next to that modify the MongoDB credentials, and make sure they match the credentials of your MongoDB instance.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "xxxxxxxxxx"

Once you have corrected the DNS names and MongoDB credentials, install Kerberos Vault inside your cluster.

    kubectl apply -f ./vault/yaml/deployment.yaml -n kerberos

## Test out configuration

If everything worked out as expected, you should now have following services in your cluster:

- MongoDB
- Traefik
- Vault
- Enterprise (optional)

It should look like this.

    $ kubectl get pods
    NAME                              READY   STATUS    RESTARTS   AGE
    kerberos-vault-6f5c877d7c-hf77p 1/1     Running   0          2d11h
    mongodb-55566dc65c-xgmns          2/2     Running   0          4d13h
    traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h

## Access the system

Once everything is configured correctly your cluster and DNS or `/etc/hosts` file, you should be able to access the Storage application. By navigating to the Storage domain `storage.domain.com` in your browser you will see the Storage login page showing up.

{{< figure src="login.png" alt="Once successfully installed Kerberos Vault, it will show you the login page." caption="Once successfully installed Kerberos Vault, it will show you the login page." class="stretch">}}
