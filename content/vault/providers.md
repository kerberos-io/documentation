---
title: "Providers"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "vault"
weight: 305
toc: true
---

Kerberos Storage allows you to attach one or more (and different) storage providers. These providers could be in the cloud like S3, Google Cloud Storage or Azure blob storage, or providers on premise such as Minio.

Depending on your use case: Kerberos Storage Cloud or Kerberos Storage Edge, you will opt for a specific storage provider. For example in the case Kerberos Storage Edge, it makes sense to store your recordings also at the edge. The accomplish this you could for example setup a Minio instance.

Below you can find a detailed step-by-step guide to setup different storage providers.

## Prerequisites

This installation guide assumes you have setup Kerberos Storage properly.

## Installation Minio

Minio is the recommended solution if you want to persist your data at the edge. To setup minio you just have to install a few components. Let's start with getting the configuration files (if not already done) for setting up Minio.

    git clone https://github.com/kerberos-io/storage

Now we have the configrations available, let's use start with creating a `local-storage` volume using `./storage/yaml/minio/volume.yaml` file. When opening the file we should focus on following attributes.


      spec:
        capacity:
    -->   storage: 20Gi
        accessModes:
        - ReadWriteOnce
        persistentVolumeReclaimPolicy: Recycle
        storageClassName: hdd
        local:
    -->   path: /home/minio
        nodeAffinity:
          required:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/hostname
                operator: In
                values:
    -->         - hostname

Adapt the storage capacity to the amount of storage you want to assign to Minio, change the local path to the directory where you want to persist your data, and to finish make sure the hostname is the hostname of your node (where the directory is located). Once ready we can create the `local.path` directory and create the volume.

    mkdir /home/minio
    kubectl apply -f ./storage/yaml/minio/volume.yaml

Next create Persistent Volume Claim (PVC), open the `./storage/yaml/minio/volume.yaml` file and make sure the storage is aligned with the configurations of you `volume.yaml`.

      resources:
        # This is the request for storage. Should be available in the cluster.
        requests:
    -->   storage: 20Gi    

Once ready, create the PVC.

    kubectl apply -f ./storage/yaml/minio/pvc.yaml

Ok, let us finish this and deploy the Kerberos Storage deployment. Before applying, we have to make sure the Ingress hostname is aligned. Open the `./storage/yaml/minio/deployment.yaml` file and scroll down until you see the Ingress.

      spec:
        rules:
    --> - host: minio.domain.com
          http:
            paths:
            - path: /
              backend:
                serviceName: minio
                servicePort: 9000

Adapt the hostname to your needs, and apply the `deployment.yaml` file when appropriate.

    kubectl apply -f ./storage/yaml/minio/deployment.yaml

You should now see Minio being installed, and able to access it from your favourite web browser. You can use with the credentials you have defined in the `deployment.yaml file.`

![minio kubernetes](../../public/images/minio/webapp.png)