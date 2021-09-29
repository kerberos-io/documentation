---
title: "Providers"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  vault:
    parent: "vault"
weight: 305
toc: true
---

When deploying Kerberos Agents you have the possibility to Bring Your Own Storage; at the edge or in the cloud. By configuring Kerberos Vault you persist your recordings in your preferred storage providers. Following providers are supported:

- [Google Cloud Platform Storage](https://cloud.google.com/storage)
- [Amazon Web Services S3](https://aws.amazon.com/s3/)
- [Storj](https://storj.io/)
- [Minio](https://min.io/)
- [Ceph](https://ceph.io/)

Kerberos Vault allows you to attach one or more (and different) storage providers. Depending on the use case: Kerberos Vault in a cloud environment or at the edge, you will opt for a specific storage provider. For example in the case of a Kerberos Vault installation at the edge, it makes more sense to store your recordings also at the edge, so you avoid cloud storage costs, have better latency, reduce expensive bandwidth.

## Prerequisites

Before you can configure a provider, make sure [you have installed a Kerberos Vault](/vault/installation) inside a Kubernetes cluster.

## Configuration of a provider 

Once you have set up your Kerberos Vault instance, and have successfully login to the application, you should see the provider navigation item on the left.

{{< figure src="provider.gif" alt="One or more providers can be configured to centralise your storage." caption="One or more providers can be configured to centralise your storage." class="stretch">}}

When selecting the `+ Add Storage Provider` button, a modal will open that allows you to configure a specific storage provider. Go a head and select one from the list. 

{{< figure src="add-provider.gif" alt="Configure, add and validate a new storage provider." caption="Configure, add and validate a new storage provider." class="stretch">}}

Once completed the necessary credentials, specific to your storage provider, you can verify the connection by click the `Validate` button. If ok, it should return a `green` confirmation box, if something went wrong you should see the relevant error message in a `red` alert box.

Once configured you can add multiple and different providers. Have some fun. 

## Cloud storage providers

Kerberos Vault integrates with storage providers in the cloud such as AWS S3, GCP Storage and Storj. The advantage of previously mentioned storage providers, is that the take complete control of your every growing storage requirements. They scale with your needs at a low TCO.

### AWS S3

  > Tutorial to be written.

### GCP Storage

> Tutorial to be written.

### Storj

> Tutorial to be written.

## Edge storage providers

Kerberos Vault also integrates with storage providers that are more suitable for edge deployments. Examples are Minio and Ceph, these are storage providers that you can install wherever you want. Therefore, they are interesting when considering edge computing to reduce latency, cloud billing and bandwidth. Examples are machine learning use cases, to trigger events or limit the transfer to a cloud storage. 

### Minio

Minio is a recommended solution if you would like to persist your recordings at the edge. To set up Minio you have to configure a few Kubernetes resources. Inside the vault repository there is a Minio example, so let's clone that repository of not already done.

    git clone https://github.com/kerberos-io/vault

Now we have the configurations available, let's start with the creation of a `local-storage` volume using `./vault/yaml/minio/volume.yaml` file. While opening the file, focus on following attributes. Please note that you do not need to use `local-storage`, if you would have some external storage already available.

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

Adapt the storage capacity to the amount of storage you want to assign to Minio, change the local path to the directory where you want to persist your recordings. Make sure the hostname is the hostname of your node (where the directory is located). Once ready we should create the `local.path` directory on our host system, and create the volume.

    mkdir /home/minio
    kubectl apply -f ./vault/yaml/minio/volume.yaml

Now we are ready with creating a new volume, we should create a persistent volume claim (pvc). Open the `./vault/yaml/minio/pvc.yaml` file and make sure the storage capacity is aligned with the configurations of the `volume.yaml`.
 
      resources:
        # This is the request for storage. Should be available in the cluster.
        requests:
    -->   storage: 20Gi    

Once ready, create the PVC.

    kubectl apply -f ./vault/yaml/minio/pvc.yaml

Now we have prepared the prerequisites, the volumes, we can look into the creation of a Minio instance. Open the `./vault/yaml/minio/deployment.yaml` file and scroll down until you see the Ingress resource. Make sure the Ingress hostname is aligned with your expectations, this will be the url to navigate to the Minio dashboard.

      spec:
        rules:
    --> - host: minio.domain.com
          http:
            paths:
            - path: /
              backend:
                serviceName: minio
                servicePort: 9000

Consider [changing the access and secret](https://github.com/kerberos-io/vault/blob/master/yaml/minio/deployment.yaml#L40-L44) credentials.

    - name: MINIO_ACCESS_KEY
      value: "minio"
    - name: MINIO_SECRET_KEY
      value: "minio12345"

Once the configuration is verified, apply the `deployment.yaml`. You might consider deploying the Minio instance in a separate namespace `-n minio`.

    kubectl apply -f ./vault/yaml/minio/deployment.yaml

You should now see Minio being installed, and be able to access it through your favourite web browser. Use the credentials you have defined in the `deployment.yaml` file.

{{< figure src="minio.png" alt="When installing at the edge, the preferred installation method is MinIO." caption="When installing at the edge, a preferred installation method is Minio." class="stretch">}}

Now you are ready to assign Minio as a storage provider to Kerberos Vault. Open the `Providers` page of Kerberos Vault, and select the Minio provider.

{{< figure src="minio-setup.gif" alt="Configuring the minio provider in Kerberos Vault." caption="Configuring the minio provider in Kerberos Vault." class="stretch">}}

  - Provider name: this a preferred name for the provider.
  - Bucket name: the name of a bucket created in minio, make sure this matches.
  - Region: this is not relevant for an edge deployment and can be left blank.
  - Hostname: this is the internal DNS name if the Minio instance, for example: **minio:9000**.
  - Access Key: the `MINIO_ACCESS_KEY` you've defined in the `deployment.yaml` file
  - Secret Access Key: the `MINIO_SECRET_KEY` you've defined in the `deployment.yaml` file

### Ceph

  > Tutorial to be written.
