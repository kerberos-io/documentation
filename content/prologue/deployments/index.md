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

We will discuss some of the most common setups we have seen, however this doesn't mean that your setup will not work if it's not shown identically in this section.

## Home setup

If you are starting with a small deployment - for example for your home - than probably you want to keep it simple. Either you'll only host a couple of [Kerberos Agents](/agent/first-things-first) or an additional [Kerberos Vault](/vault/first-things-first/).

{{< figure src="deployment-home-setup.svg" alt="The home-setup deployment" caption="The home-setup deployment" class="stretch">}}

In a home setup you'll probably rely on `docker` instead of `kubernetes`, mainly because of simplicity. In this setup, [Kerberos Agents](/agent/first-things-first) are installed on a compute at the edge, next to a [Kerberos Vault](/vault/first-things-first/). For both components you can leverage `docker` or `docker compose` to setup and configure the system.

The advantage with [Kerberos Vault](/vault/first-things-first/) is that even if it's deployed at the edge, you can still target a cloud storage system like S3, GCP Storage, etc. Next to that the main advantage is speed, you typically setup an [Kerberos Agents](/agent/first-things-first) within 5 minutes, and a [Kerberos Vault](/vault/first-things-first/) installation within 30 minutes using `docker compose`.

## Cloud-first setup

One of the most common setups is the **cloud-first** setup, where you install the majority of the components in a managed cloud or your own private cloud.

{{< figure src="deployment-cloud-first.svg" alt="The cloud-first deployment" caption="The cloud-first deployment" class="stretch">}}

The huge benefit of this approach is that your [Kerberos Agents](/agent/first-things-first) are installed next to the camera infrastructure, and ideally in the same network. This will bring latency and data transfer to a minimum.

The [Kerberos Vault](/vault/first-things-first/) is installed in the cloud together with some scalable cloud storage. The [Kerberos Hub](/hub/first-things-first/) is installed in the same or other cloud as the [Kerberos Vault](/vault/first-things-first/).

The benefit of this deployment is that you only need to install [Kerberos Vault](/vault/first-things-first/) and [Kerberos Hub](/hub/first-things-first/) once. Most of the work is setting up the [Kerberos Agents](/agent/first-things-first).

Another benefit is that is latency and bandwidth consumption, as we have compute at the edge for running the [Kerberos Agents](/agent/first-things-first). Only data (recordings) that are relevant will be send over the network to [Kerberos Vault](/vault/first-things-first/).
