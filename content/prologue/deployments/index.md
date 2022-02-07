---
title: "Deployments"
description: "Discover the different deployments and use cases, learn more about the architecture."
lead: "Discover the different deployments and use cases, learn more about the architecture."
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

In this section we will explain some use cases and best practices, which might help you to define the architecture that fits your needs.

> Please read the [introduction page](/prologue/introduction/) first, before moving forward.

When starting with Kerberos you might ask yourself, how should I deploy these so called, Kerberos Agents? Well, there are different options. You can install a Kerberos Agent on a Raspberry Pi, VM, Server or even in a Kubernetes cluster. So what should you do, and when? Let's have a closer look at the different options.

The first thing you need to consider is the environment, in which you want to deploy your Kerberos Agents. Is it inside your house, your company or at a public place? Another important factor is the number of camera streams you would like to monitor, and if you have any high availability requirements.

## Kerberos Agents

The most common scenario is to install your Kerberos Agents at the edge. This has a couple of benefits such as latency, bandwidth and a less complex security model. When installing one or more Kerberos Agents at the edge, you have different options.

### Less than 5 cameras streams

If you have a limited number of cameras streams you would like to monitor, and don't have any high availability or scaling requirements, then multiple Kerberos Agents are a good choice. For example, you can install the Kerberos Agent on a Raspberry Pi, by using [KiOS](/opensource/installation#kios), [Raspbian OS](/opensource/installation-advanced#raspbian) or compile it from source.

On below architecture, a couple of Kerberos Agents are installed at the edge (inside the local network). A Kerberos Agent is installed for each camera stream, and each Kerberos Agent runs on a separate host (Raspberry Pi, VM, etc). The front-end of the Kerberos Agents can be reached from the internal network, but cannot be accessed from the internet.

{{< figure src="kerberos-agent-edge.svg" alt="A Kerberos Agent is monitoring a single camera stream." caption="A Kerberos Agent is monitoring a single camera stream." class="stretch">}}

Another option to install the Kerberos Agent is to use Docker. Instead of having separate hosts for each Kerberos Agent, you will have a single host (Docker host) with multiple Docker containers. A Docker container is deployed for each camera stream, which contains the software to run the Kerberos Agent.

Running your Kerberos Agents inside Docker containers, allows you to process multiple surveillance cameras using only one host.

{{< figure src="kerberos-agent-docker.svg" alt="Having just a few of cameras to be monitored then Kerberos Agent on Docker might be the right choice." caption="Having just a few of cameras to be monitored then Kerberos Opensource with Docker  might be the right choice." class="stretch">}}

### More than 5 camera streams

Having more camera streams and Kerberos Agents will become a bit tedious to manage, and you might start looking for other solutions in terms of scaling and also storage.

When having more than 5 [Kerberos Agents](/opensource/first-things-first/), the Kerberos Enterprise Suite starts to become interesting. While building on Kubernetes, your Kerberos Agents will be scheduled and deployed more easily through [Kerberos Factory](/factory/first-things-first/). Your recordings will be stored centrally using [Kerberos Vault](/vault/first-things-first/), and you will be able to review every thing from within a single pane of glass with [Kerberos Hub](/hub/first-things-first/).

{{< figure src="kerberos-enterprise-suite.svg" alt="When you start having bigger deployments it's recommended to go with a Kubernetes approach." caption="When you start having bigger deployments it's recommended to go with a Kubernetes approach." class="stretch">}}
