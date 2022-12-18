---
title: "Glossary"
description: "A better understanding of the Kerberos Ecosystem."
lead: "A better understanding of the Kerberos Ecosystem."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 103
toc: true
---

While working in the Kerberos Ecosystem, specific words and sentences become to start feel natural. Unfortunately that's not the case for everyone, that's why we added and updated this glossary page, to anyone can come back to this if he would require more detailed explanation.

### Chaining (forwarding)

Chaining or forwarding refers to [connecting two Kerberos Vaults](/vault/forwarding/). A source Kerberos Vault is connected to a remote Kerberos Vault, and setup in a specific mode: continuous or on-demand forwarding.

### Kerberos Agent

A [Kerberos Agent](/agent/first-things-first/) is a collection of binaries, shipped in the form of container. It executes specific tasks related to the camera processing, monitoring, configuration and reviewing.

### Kerberos Factory

Kerberos Agents are scaled [through various deployments](https://github.com/kerberos-io/agent#how-to-run-and-deploy-a-kerberos-agent): `docker`, `kubernetes`, `terraform`, etc. The main goal of [Kerberos Factory](/factory/first-things-first/) is to serve as a non-technical user interface that allows business users to deploy and manage [Kerberos Agents](/agent/first-things-first/) without entering into the complexity of Kubernetes resources.

### Kerberos Vault

[Kerberos Vault](/vault/first-things-first/) is an interface between [Kerberos Agents](/agent/first-things-first/) and a storage system like Minio, S3, Google Storage, Storj and others. It helps decoupling [Kerberos Agents](/agent/first-things-first/) from a storage system, and allows you to change a storage system on the fly without reconfiguring your [Kerberos Agents](/agent/first-things-first/). Next to that it allows to build integrations and extensions through messaging (Kafka, SQS, etc) and a Swagger API.

### Kerberos Hub

The [Kerberos Hub](/hub/first-things-first/) is a single pane of glass that connects your users to groups and/or sites of cameras. It allows you to build a video landscape governance and delegate specific regions or locations to a set of users. It comes with features such as on demand low resolution and high resolution streaming, camera monitoring, alerts and many more.
