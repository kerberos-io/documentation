---
title: "Installation"
description: "Installing Kerberos Hub wherever you want."
lead: "Installing Kerberos Hub wherever you want."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  hub:
    parent: "hub"
weight: 302
toc: true
---

Kerberos Hub is the single pane of glass for your Kerberos Agents. It comes with a best of breed open source technology stack, a modular design and out-of-the-box scalability. Kerberos Hub allows building and maintaining an ever-growing video streaming and analytics landscape.

No matter how many Kerberos Agents you have running in the field Kerberos Hub will manage it.

## Helm and Kubernetes

Kerberos Hub is composed of a couple of microservices which are all installed in a Kubernetes cluster. Because we are handling with many containers, we can benefit from package managers such as [Helm](https://helm.sh/) to deploy our resources more easily. In the near future we might use the [Kubernetes operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator) as well.

{{< figure src="hub-architecture.svg" alt="Kerberos Hub is composed out of different microservices." caption="Kerberos Hub is composed out of different microservices." class="stretch">}}

## Dependencies

Within the Kerberos Hub architecture we use a couple of third-party, open source, technologies such as:

- MongoDB,
- Kafka,
- Pion Turn / Coturn,
- and Vernemq

## Installation

To install Kerberos Hub, we will redirect you to the official Github repository, [kerberos-io/hub](https://github.com/kerberos-io/hub). This repository includes all the instructions needed to get Kerberos Hub up and running.

## Configuration

When successfully installed the Kerberos Hub Helm chart, it is time to configure the solution to your needs. Learn more about [the configuration here](/hub/configuration).
