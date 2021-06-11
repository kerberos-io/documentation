---
title: "First things first"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  vault:
    parent: "vault"
weight: 300
toc: true
---

Kerberos Opensource and Kerberos Enterprise both store recordings on the local disk. To centralise your data at a single place, additional solutions are available.

#### Kerberos Hub

One or more Kerberos Enterprise agents, can store their data directly on [Kerberos Hub](/hub/first-things-first), and benefit from the visualisation layer Kerberos Hub offers. When doing this your recordings will be uploaded inside the Kerberos datacenter (which is a black box for you).

#### Kerberos Vault

In addition to that you have the option to Bring Your Own Storage (BYOS), using Kerberos Vault. Kerberos Vault allows you to configure the storage providers you want, and allows you to connect to [Kerberos Hub](/hub/first-things-first) in parrallel. These storage provider could live in the cloud such as AWS S3, GCP storage and Azure Blob store, or can be located on premise - at the edge - such as Minio.

Despite the flexible storage capabilities, Kerberos Vault is also an open platform, which can be used to build extensions (mobile apps, web apps, machine learning services, etc) and integrations. It allows you to leverage a scalable and stable system as a strong backbone for your video analytics solutions, machine learning algorithms, and more.

## Kerberos Hub

Within Kerberos Opensource and Kerberos Enterprise you can upload your recordings to our public [Kerberos Hub](/hub/first-things-first) environment. This means that your data will be hosted and processed (metadata) in our Kerberos Vault (datacenteR). For more information about how Kerberos Hub works [can be found here](/hub/first-things-first).

{{< figure src="arch-kerberos-hub.svg" alt="Store your recordings in Kerberos Hub" caption="Store your recordings in Kerberos Hub" class="stretch">}}

## Kerberos Vault

If you are using Kerberos Enterprise you have the possibility to bring your own cloud storage or on premise storage. By installing Kerberos Vault you can send your recordings to your own datacenter, private or public cloud. Following providers are supported:

- [Google Cloud Platform Storage](https://cloud.google.com/storage)
- [Microsoft Azure Storage](https://azure.microsoft.com/en-us/services/storage/)
- [Amazon Web Services S3](https://aws.amazon.com/s3/)
- [Minio](https://min.io/)

When installing Kerberos Vault in the cloud, following architecture can apply. Having your Kerberos Enterprise agents running at the edge, but uploading to Kerberos Vault in the cloud.

{{< figure src="arch-kerberos-vault-providers.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

On the other hand you could also have Kerberos Vault running at the edge, next to your Kubernetes Enterprise agents. This could be useful if you want to do processing or video analytics such as computer vision or machine learning at the edge.

{{< figure src="arch-edge-kerberos-vault.svg" alt="Store your recordings at the edge with Kerberos Vault" caption="Store your recordings at the edge with Kerberos Vault" class="stretch">}}

### Events

One of the key differentiators compared to other VMS solutions, is the abilitity to extend and integrate. Next to uploading and persisting data, Kerberos Vault can also trigger events. Each time a recording is send to Kerberos Vault an event can be triggered through one of the following providers.

- [Apache Kafka](https://kafka.apache.org/)
- [Amazon Web Services SQS](https://aws.amazon.com/sqs/)

Those events can be fetched or subscribed by custom applications. For example, one can create a notifications service, machine learning service or an entire cloud application. Allowing you to leverage the power and scalability of Kerberos Enterprise, and building and focussing on your specific applications, API's, mobile apps, or whatever you have in mind to build.

{{< figure src="arch-kerberos-vault-events.svg" alt="Build integrations and create your own workflows using the event capability of Kerberos Vault." caption="Build integrations and create your own workflows using the event capability of Kerberos Vault." class="stretch">}}

### On-demand upload

Next to the extension and integration capabilities of Kerberos Vault, it is also possible to synchronise with a central Kerberos Vault. On-Demand upload allows you to synchronise a subset of your recording with an additional Kerberos Vault in the cloud.

{{< figure src="arch-sync-kerberos-vault.svg" alt="Synchronise recordings between multiple Kerberos Vault" caption="Synchronise recordings between multiple Kerberos Vault" class="stretch">}}

A couple of usecases are the following ones:

- Continious recording: having continious recordings stored in your Kerberos Vault on premise, you don't want to replicate all your recordings to a Kerberos Vault provider in the cloud (to make them public available). Therefore you could implement custom logic, for example based on a machine learning algorithm, to only replicate recordings which matche a specific scenario.

- On-Demand request: Having Kerberos Hub, an end-user could initiate a request for upload. By default no recordings are forwarded from your Kerberos Vault on premise to your Kerberos Vault in the cloud. Only when an end user requests one or more recordings, the
  upload will start for the requested recordings.

### Open API

Both Kerberos Enterprise as Kerberos Vault ships with Swagger API's, which can be used to communicate with the previously mentioned systems. Simply type `/swagger/index.html` after the `api` url, and you will see the Swagger UI popping up. No need to explain the different API's, use the Swagger and see what is available. See something missing, let us know, and we add it ;).

{{< figure src="open-api.png" alt="All capabilities of Kerberos Vault are documented through swagger API's." caption="All capabilities of Kerberos Vault are documented through swagger API's" class="stretch">}}

## Licensing

Kerberos Vault is publicly available and **requires a license key** to operate correctly. Reach out to **cedric@kerberos.io** for the commercial matters.