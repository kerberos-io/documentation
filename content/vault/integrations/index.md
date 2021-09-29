---
title: "Integrations"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
    vault:
        parent: "vault"
weight: 306
toc: true
---

One of the key differentiators, is the ability to extend and integrate. Next to uploading and persisting recordings on your preferred storage providers, Kerberos Vault can trigger events and be configured through APIs.

Each time a Kerberos Agent sends a recording to Kerberos Vault, it is persisted on a storage provider, and an event is triggered through one of the following integrations.

- [Apache Kafka](https://kafka.apache.org/)
- [Amazon Web Services SQS](https://aws.amazon.com/sqs/)
- [Kerberos Hub](/hub/first-things-first/)
- Kerberos Vault (remote forwarding)

Every time an event is delivered, it will be consumed by the configured integrations. For example in case of a Kafka
integration, one can build a Kafka consumer with custom application logic; a notification manager, a machine learning
service, etc.

## Prerequisites

Before you can configure a provider, make sure [you have installed a Kerberos Vault](/vault/installation) inside a Kubernetes cluster.

## Configuration of an integration

Once you have set up your Kerberos Vault instance, and have successfully login to the application, you should see the integration navigation item on the left.

{{< figure src="integrations.gif" alt="One or more providers can be configured to centralise your storage." caption="One or more providers can be configured to centralise your storage." class="stretch">}}

When selecting the `+ Add Integration` button, a modal will open that allows you to configure a specific integration. Go a head and select one from the list.

{{< figure src="add-integration.gif" alt="Configure, add and validate a new integration." caption="Configure, add and validate a new integration." class="stretch">}}

Once completed the necessary credentials, specific to your integration, you can verify the connection by click the `Validate` button. If ok, it should return a `green` confirmation box, if something went wrong you should see the relevant error message in a `red` alert box. When completed you can add multiple and different integrations.

## Cloud event integrations

Kerberos Vault integrates with queues and message brokers in the cloud such as AWS SQS. The advantage is that it takes the complete control of your every growing messaging/event requirements. 

### AWS SQS

> Tutorial to be written.

## Edge event integrations

Alternatives to cloud event integrations are self-hosted variants such as a Kafka broker.

### Kafka

> Tutorial to be written.

## Kerberos integrations

Next to third party integrations such as Kafka or AWS SQS, it is possible to integrate with a remote Kerberos Vault, also called chaining or forwarding or with Kerberos Hub.

### Kerberos Vault

> Tutorial to be written.

### Kerberos Hub

> Tutorial to be written.
