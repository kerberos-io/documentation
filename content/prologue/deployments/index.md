---
title: "Deployments"
description: "Kerberos.io deployments and examples"
lead: "Kerberos.io deployments and examples"
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

There is no good or bad deployment. All the architectual decisions you make, should focus on the goals of your project and what you or your customer would like to achieve.

In this section we will explain the most common use cases and best practices, which might help you to define the architecture that fit your needs.

> If this is the first page you visit, have a look at the [introduction page](/) before moving on.

## Where to start?

Starting something new is not easy, there is always a steep learning curve. While setting up the different Kerberos.io components, you might ask yourself:

- How should I deploy these so called, [Kerberos Agents](/agent/first-things-first/)?
- Do I setup a [Kerberos Vault](/vault/first-things-first/) next to my [Kerberos Agents](/agent/first-things-first/) or in a managed cloud?
- Can I self-host [Kerberos Hub](/hub/first-things-first/) or do I need to install it in managed cloud?
- And probably many more questions..

We will discuss some of the most common setups we have seen, however this doesn't mean that your setup will not work if it's not shown as identical in the sections below.

{{< figure src="overview.svg" alt="The Kerberos.io solution stack" caption="The Kerberos.io solution stack" class="stretch">}}

## Basic setup

If you are starting with a basic deployment - for example for your home - then you probably prefer to have it rather simple. In this case you can host one or more [Kerberos Agents](/agent/first-things-first) on a compute of choice, in the network you desire.

{{< figure src="deployment-basic.svg" alt="The basic deployment" caption="The basic deployment" class="stretch">}}

In a home setup you'll probably rely on [`docker`](https://github.com/kerberos-io/agent/tree/master/deployments/docker#1-running-a-single-container) or [`a binary`](https://github.com/kerberos-io/agent/tree/master/deployments/snap) instead of [`kubernetes`](https://github.com/kerberos-io/agent/tree/master/deployments/kubernetes), mainly because of simplicity. However nothing is stopping you utilise Kubernetes for your local deployment.

## Extended setup

[Kerberos Agents](/agent/first-things-first) store recordings on the host system. You might want to have a more elegant and centralised storage setup. Run [Kerberos Vault](/vault/first-things-first/) next to your
[Kerberos Agents](/agent/first-things-first) and connect to an edge or cloud storage system such as S3, Minio, etc.

{{< figure src="deployment-extended.svg" alt="The home-setup deployment" caption="The home-setup deployment" class="stretch">}}

Similar to the basic installation, Kerberos Vault can be installed through [`docker`](https://github.com/kerberos-io/vault/tree/master/docker) and [`kubernetes`](https://github.com/kerberos-io/vault/tree/master/kubernetes). In this setup, [Kerberos Agents](/agent/first-things-first) are installed on a compute at the edge, next to a [Kerberos Vault](/vault/first-things-first/).

The advantage with [Kerberos Vault](/vault/first-things-first/) is that even if it's deployed at the edge, you can still target a cloud storage system like S3, GCP Storage, etc. Next to that the main advantage is speed, you typically setup an [Kerberos Agents](/agent/first-things-first) within 5 minutes, and a [Kerberos Vault](/vault/first-things-first/) installation within 30 minutes using `docker compose`.

When leveraging [Kubernetes](https://github.com/kerberos-io/vault/tree/master/kubernetes) it might take you a bit more time, as you'll need to create the relevant Kubernetes resources in the cluster.

## Hybrid setup

One of the most common setups is a hybrid setup, where you install the majority of the components in a managed cloud or your own private cloud.

{{< figure src="deployment-hybrid.svg" alt="The hybrid deployment" caption="The hybrid deployment" class="stretch">}}

The huge benefit of this approach is that your [Kerberos Agents](/agent/first-things-first) are installed next to the camera infrastructure, and ideally in the same network. This will bring latency and data transfer to a minimum.

The [Kerberos Vault](/vault/first-things-first/) is installed in the cloud together with some scalable cloud storage. The [Kerberos Hub](/hub/first-things-first/) is installed in the same or other cloud as the [Kerberos Vault](/vault/first-things-first/).

The benefit of this deployment is that you only need to install [Kerberos Vault](/vault/first-things-first/) and [Kerberos Hub](/hub/first-things-first/) once. Most of the work is setting up the [Kerberos Agents](/agent/first-things-first) at your customers and/or sites.

Another benefit is low latency and bandwidth consumption, as we have compute running at the edge for the [Kerberos Agents](/agent/first-things-first). Only data (recordings) that are relevant will be send over the network to [Kerberos Vault](/vault/first-things-first/). A possible disadvantage of this setup is that you will require some hardware at the site, although the maintenance is low it does come with a cost; have a look at [Cloud setup](/prologue/deployments/#cloud-setup) instead.

## Cloud setup

With this setup we are moving from a Hybrid setup to a complete Cloud approach. As described before, it might be a challenge to host hardware at the edge, as you or your customers don't want to invest in additional hardware. Therefore it might be an option to move your [Kerberos Agents](/agent/first-things-first) to the cloud, and leverage a secure connection between the cameras at the edge, and the [Kerberos Agents](/agent/first-things-first) in the cloud.

{{< figure src="deployment-cloud.svg" alt="The cloud deployment" caption="The cloud deployment" class="stretch">}}

The main advantage is here, is that you'll avoid any extra hardware costs on site. On the otherhand you'll need a secure connection, which might already be available, to setup a remote connection between the camera streams at the edge and the [Kerberos Agents](/agent/first-things-first) in the cloud.

A noticable disadvantage is that a continuous stream of data is send over the network for each camera stream. Which might become more expensive than buying the additional hardware at the edge. Build up a usecase, of what setup makes sense for which customer.

> In the end you might go with a mixed hybrid and cloud setup depending on the use case and customer requirements.

## SAAS setup

As described above you might mix a Hybrid and Cloud setup, in the end you decide where to host your [Kerberos Agents](/agent/first-things-first). Within the SAAS setup, you'll utilise our [Kerberos Hub SAAS](/hub/first-things-first/) edition, and connect your [Kerberos Agents](/agent/first-things-first) and [Kerberos Vault](/vault/first-things-first/).

{{< figure src="deployment-saas.svg" alt="The SAAS deployment" caption="The SAAS deployment" class="stretch">}}

The main advantage of this setup is that you have full control over your [Kerberos Agents](/agent/first-things-first) and [Kerberos Vault](/vault/first-things-first/), but consult the Kerberos.io team for visualizing your video landscape through [our Kerberos Hub SAAS](/hub/first-things-first/) edition.

This means that you, and only you, own the data and at the same time doesn't have to maintain, install and configure [Kerberos Hub](/hub/first-things-first/).

## Chained setup

If you need more and better redundancy then the Chained setup might be of interest. In this setup we move data (recordings) from one [Kerberos Vault](/vault/first-things-first/) to another [Kerberos Vault](/vault/first-things-first/).

{{< figure src="deployment-chaining.svg" alt="Kerberos Vault chaining" caption="Kerberos Vault chaining" class="stretch">}}

The advantage of [chaining (or forwarding)](/vault/forwarding/) is that you create a cache between two environments. Shown on the architecture above data is first stored at an edge [Kerberos Vault](/vault/first-things-first/), and synchronised with a cloud [Kerberos Vault](/vault/first-things-first/). When the connection goes down between the two [Kerberos Vaults](/vault/first-things-first/), the data will still be stored in the edge [Kerberos Vault](/vault/first-things-first/), and synced to the cloud [Kerberos Vault](/vault/first-things-first/) once the connection is back up.

Another advantage is that [chaining (or forwarding)](/vault/forwarding/) can be configured in different modes, whereas the previously mentioned advantage is illustrating `continuous` forwarding, it's also possible to have `ondemand` forwarding. In the latter, the user or administrators can decide programmatically or through our [Kerberos Hub](/hub/first-things-first/) which recordings needs to be synchronised to the cloud [Kerberos Vault](/vault/first-things-first/). This allows us to only send the information we prefer to our cloud [Kerberos Vault](/vault/first-things-first/).
