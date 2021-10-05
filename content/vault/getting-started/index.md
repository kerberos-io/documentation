---
title: "Getting Started"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  vault:
    parent: "vault"
weight: 301
toc: true
---

Once you've installed Kerberos Vault, you should have access to the Kerberos Vault application. The application allows you to administrate Kerberos Vault, and more specifically create storage providers, integrations and accounts, through a single interface. Isn't that great.

Having a UI in place, it is important to note that Kerberos Vault also ships numerous APIs, that allow you to automate the configurations. The APIs are exposed as, Swagger documentation, and can be used for configuration of Kerberos Vault but also [integration](/vault/integration) and development of custom applications or business logic.

## Login page

Once you open a browser, and navigate to the Kerberos Vault web app (see installation for the URL), you will land on the login page.

{{< figure src="login.gif" alt="After successful installation you should be able to access the login page." caption="After successful installation you should be able to access the login page." class="stretch">}}

The default username and password of the Kerberos Vault app is:

- username: **root**
- password: **kerberos**

> The username and password can be changed in the `deployment.yaml` file.

## Providers

Providers are the persistence layers, where you will store your recording in the edge or in a cloud environment. By adding a specific provider, credentials have to be provided to allow Kerberos Vault to store recordings in that specific provider. Following provider are currently supported. You can choose from:

- [Google Cloud Platform Storage](https://cloud.google.com/storage)
- [Amazon Web Services S3](https://aws.amazon.com/s3/)
- [Storj](https://storj.io/)
- [Minio](https://min.io/)
- [Ceph](https://ceph.io/)

As explained before, for each provider, the appropriate security settings has to be filled in. For example for AWS you need to define the access and secret key, for GCP you need to define a service account. Find more information about storage providers [on the providers page](/vault/providers).

{{< figure src="provider.gif" alt="One or more providers can be configured to centralise your storage." caption="One or more providers can be configured to centralise your storage." class="stretch">}}

## Integrations

Events or messages are generated each time a recording was uploaded to Kerberos Vault, and are sent to one or more integrations. Those integrations are configured through the Kerberos Vault application. Each time a Kerberos Agent sends a recording to Kerberos Vault, it is persisted on a storage provider, and an event is triggered through one of the following integrations. 

- [Apache Kafka](https://kafka.apache.org/)
- [Amazon Web Services SQS](https://aws.amazon.com/sqs/)
- [Kerberos Hub](/hub/first-things-first/)
- Kerberos Vault (remote forwarding)

{{< figure src="integrations.gif" alt="Kerberos Vault can be configured to send events to message brokers to create real-time apps of ML models." caption="Kerberos Vault can be configured to send events to message brokers to create real-time apps of ML models." class="stretch">}}

The idea of an integration is that you can build your own applications and define custom business logic. Kerberos Agents and Kerberos Vault will make sure you have a scalable and high available backend, so you can focus on the business case and bring your own technologies (Python, Golang, etc). Examples of integrations are, but of course not limited too.

- Metadata storage in MongoDB,
- Notifications,
- Classification with Tensorflow,
- Counting algorithms,
- and much more.

Find more information about events and integrations on [the integrations page](/vault/integrations).

## Accounts

Having setup `Providers` and `Integrations`, you need a secure way to interact with them through the creation of an account. 

By creating an account you will receive credentials that give access to the Kerberos Vault's providers, integrations and APIs. Accounts credentials are being used by a Kerberos Agent to send recordings, and are used through API calls to download or forward recordings.

Next to credentials, there are a couple of other fields which are specified on account level.

- A provider,
- the provider directory
- a public key,
- a secret Key,
- a day limit (the number of days a recording is persisted),
- cloud analysis,
- edge analysis.

{{< figure src="account.gif" alt="One or more accounts can be created to secure your storage access." caption="One or more accounts can be created to secure your storage access." class="stretch">}}

Find more information about accounts on [the accounts page](/vault/accounts).

## Media

Once a recording is stored inside a specific `Provider` it will show up on the `Media` page. The `Media` page is an overview, list page, of all your recordings being uploaded to a `Provider`. It is used for quickly reviewing activity.

{{< figure src="media.gif" alt="All uploaded recordings are visualised through the media page." caption="All uploaded recordings are visualised through the media page." class="stretch">}}

## Recycle

Storing recordings in a `Provider` is one thing, making sure you manage the storage capacity of your `Provider` properly is also important. Storage might need to be recycled after a while because of several reasons:

- maybe the data is no longer relevant,
- due to security or compliance,
- reducing costs, etc.

To make this possible Kerberos Vault comes with a configurable recycle deployment, which you can run next to your Kerberos Vault deployment. [Learn more about recycling here](/vault/recycle).
