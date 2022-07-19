---
title: "Self-signed certificates"
description: "Using your own self-signed certifates."
lead: "Using your own self-signed certifates."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  enterprise:
    parent: "enterprise"
weight: 302
toc: true
---

When running an edge deployment for Kerberos Factory, Kerberos Vault, Kerberos Hub and/or your storage providers, you can enhance security by bringing your own self-signed certificates. Those certificates will be consumed to create a secure connection between the different applications, and for example encrypt your data while it's being send or retrieved from your storage provider (Minio, Ceph).

When using self-signed certificates, the different deployments needs to be aware of those certificates and more importantly trust them. To achieve this trust, traditionally you would benefit from services like Certmanager.io and LetsEncrypt which act as a trusted CA (Certification Authority). However when self-signing you will need to make your deployments aware as there is probably no public CA available.

## The issue

When using self-signed certificates you might experience the following errors.

    "level":"info","msg":"Upload Failed: Post 
    \"https://vault.xxx.xxx/storage\": x509: certificate signed by unknown 
    authority","time":"2022-01-06T14:17:07Z"}

To overcome this you will need to inject a custom `ca-certificates.crt` holding your self-signed certificate in the `/etc/ssl/certs` directory. By injecting this in your Kerberos Factory, Kerberos Vault, Kerberos Hub deployments you will be able to create a secured and trusted connection over SSL with all relevant services.

## Injecting a ca-certificates.crt

Start by collecting all certificates you want to have trusted, and append them to an existing `ca-certificates.crt` file. Once done, create a `configmap` in your cluster, holding that information.

    kubectl create configmap rootcerts -n kerberos-vault --from-file=./ca-certificates.crt

By creating the configmap, the file contents of your `ca-certificates.crt` will be loaded into a specific namespace in your cluster, and you will be able to attach it to a specific deployment.

## Kerberos Agent

To inject your certificates file into your Kerberos Agents, you'll need to make Kerberos Factory aware of the configmap `rootcerts` that holds the certificate file. Go to your relevant `deployment.yaml` file and specify the name of your configmap in `CERTIFICATES_CONFIGMAP` variable. 

    - name: CERTIFICATES_CONFIGMAP
      value: "rootcerts" 

This will include and override the existing `ca-certificates.crt` file and include your self-signed certificates in the Kerberos Agent deployments. Once done, your Kerberos Agents will benefit from a secure self-signed SSL connection.

## Kerberos Factory / Vault

As Kerberos Factory and Kerberos Vault are specified as a single deployment file, you can inject the configmap directly in the `deployment.yaml` file. Go and uncomment the `volumes` and `volumeMounts` sections. This will copy the configmap into your Kerberos Factory and/or Kerberos Vault deployments.

    # Injecting the ca-certificates inside the container.
    volumeMounts:
    - name: rootcerts
      mountPath: /etc/ssl/certs/ca-certificates.crt
      subPath: ca-certificates.crt

Also uncomment the relevant volume definition.

    volumes:
    - name: rootcerts
      configMap:
        name: rootcerts


