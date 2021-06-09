---
title: "First things first3"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "vault"
weight: 300
toc: true
---

Kerberos Open Source and Kerberos Enterprise both store recordings on the local disk. To centralise your data at a single place, additional solutions are available.

## The options 

### Kerberos Cloud

One or more Kerberos Enterprise agents, can store their data directly on [Kerberos Cloud](/cloud), and benefit from the visualisation layer Kerberos Cloud offers. When doing this your recordings will be uploaded inside the Kerberos datacenter (which is a black box for you).

### Kerberos Storage

In addition to that you have the option to Bring Your Own Storage (BYOS), using Kerberos Storage. Kerberos Storage allows you to configure the storage providers you want, and allows you to connect to [Kerberos Cloud](/cloud) in parrallel. These storage provider could live in the cloud such as AWS S3, GCP storage and Azure Blob store, or can be located on premise - at the edge - such as Minio.

Despite the flexible storage capabilities, Kerberos Storage is also an open platform, which can be used to build extensions (mobile apps, web apps, machine learning services, etc) and integrations. It allows you to leverage a scalable and stable system as a strong backbone for your video analytics solutions, machine learning algorithms, and more.

## Kerberos Cloud

Within Kerberos Open Source an Kerberos Enterprise you can upload your recordings to our [Kerberos Cloud](/cloud) environment. This means that your data will be hosted and processed (metadata) in our Kerberos datacenter. For more information about how Kerberos Cloud works [can be found here](/cloud).

![cloud](../../public/images/kerberos-architecture.png)

## Kerberos Storage

If you are using Kerberos Enterprise you have the possibility to bring your own cloud storage or on premise storage. By installing Kerberos Storage you can send your recordings to your own datacenter, private or public cloud. Following providers are supported:

- [Google Cloud Platform Storage](https://cloud.google.com/storage)
- [Microsoft Azure Storage](https://azure.microsoft.com/en-us/services/storage/)
- [Amazon Web Services S3](https://aws.amazon.com/s3/)
- [Minio](https://min.io/)

When installing Kerberos Storage in the cloud, following architecture can apply. Having your Kerberos Enterprise agents running at the edge, but uploading to Kerberos Storage in the cloud.

![architecture kubernetes](../../public/images/kerberos-storage-architecture-kubernetes-cloud.png)

On the other hand you could also have Kerberos Storage running at the edge, next to your Kubernetes Enterprise agents. This could be useful if you want to do processing or video analytics suchs as computer bision or machine learning at the edge.

![architecture kubernetes](../../public/images/kerberos-storage-architecture-kubernetes-edge.png)

### Events

One of the key differentiators compared to other VMS solutions, is the abilitity to extend and integrate. Next to uploading and persisting data, Kerberos Storage can also trigger events. Each time a recording is send to Kerberos Storage an event can be triggered through one of the following providers.

- [Apache Kafka](https://kafka.apache.org/)
- [Amazon Web Services SQS](https://aws.amazon.com/sqs/)

Those events can be fetched or subscribed by custom applications. For example, one can create a notifications service, machine learning service or an entire cloud application. Allowing you to leverage the power and scalability of Kerberos Enterprise, and building and focussing on your specific applications, API's, mobile apps, or whatever you have in mind to build.

![architecture storage](../../public/images/kerberos-storage.png)

### On-Demand upload

Next to the extension and integration capabilities of Kerberos Storage, we are currently working on a feature called On-Demand upload. On-Demand upload allows you to upload a subset of your recordings to a Kerberos Storage in the cloud.

![kerberos-on-demand](../../public/images/kerberos-storage-architecture-kubernetes-ondemand-storage.png)

A couple of usecases are the following ones:

- Continious recording: having continious recordings stored in your Kerberos Storage on premise, you don't want to replicate all your recordings to a Kerberos Storage provider in the cloud (to make them public available). Therefore you could implement custom logic, for example based on a machine learning algorithm, to only replicate recordings which matche a specific scenario.

- On-Demand request: Having Kerberos Cloud, an end-user could initiate a request for upload. By default no recordings are forwarded from your Kerberos Storage on premise to your Kerberos Storage in the cloud. Only when an end user requests one or more recordings, the
  upload will start for the requested recordings.

### Open API

Both Kerberos Enterprise as Kerberos Storage ships with Swagger API's, which can be used to communicate with the previously mentioned systems. Simply type `/swagger/index.html` after the `api` url, and you will see the Swagger UI popping up. No need to explain the different API's, use the Swagger and see what is available. See something missing, let us know, and we add it ;).

![swgger storage](../../public/images/kerberos-storage-swagger.png)

## Licensing

Kerberos Storage is publicly available and **requires a license key** to operate correctly. Reach out to **cedric@verstraeten.io** for the commercial matters.