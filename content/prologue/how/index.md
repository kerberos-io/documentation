---
title: "How it works"
description: "From one to a myriad of cameras"
lead: "From one to a myriad of cameras"
date: 2020-10-06T08:48:57+00:00
lastmod: 2022-12-14T22:37:57+00:00
draft: false
images: ["camera.png"]
menu:
  docs:
    parent: "prologue"
weight: 102
toc: true
---

As described at the [introduction page](/) and [mission statement](/prologue/mission/), Kerberos.io has a strong vision and roadmap to help anyone on this planet to setup a video management platform to fit its needs. In this section we'll describe the different building blocks and illustrate how they complement and enrich each other, to build up an [ideal deployment model](/prologue/deployments/).

## The Kerberos Agent

At the foundation of any Kerberos.io deployment you'll find one or more [Kerberos Agents](/agent/first-things-first/). These Kerberos Agents are installed [through various possibilities](https://github.com/kerberos-io/agent#how-to-run-and-deploy-a-kerberos-agent) and are deployed to a compute - VM, baremetal, Kubernetes cluster or other - of choice and connected to camera streams you control.

{{< figure src="agent-explanation.svg" alt="A Kerberos agent consists of both a backend en frontend." caption="A Kerberos agent consists of both a backend en frontend." class="stretch">}}

The Kerberos Agent is responsible for a single camera. It is a piece of software which has two responsibilities: it acts as an user interface (frontend) and an API (backend). The API processes the video stream, applies computer vision techniques, makes recordings and takes desired actions; e.g. a webhook. On the otherhand, the user interface allows a user to review recordings and configure specific settings for the API.

The Kerberos Agent itself is bundled in a single container, which includes all the dependencies and libraries required to have it running. For each camera, a Kerberos Agent container will be created.

{{< figure src="introduction-kerberos-io.svg" alt="A Kerberos Agent is monitoring a single camera stream." caption="A Kerberos Agent is monitoring a single camera stream." class="stretch">}}

The appealing thing with this approach is that you'll experience complete isolation. If one Kerberos Agent goes down, it will not affect any other Kerberos Agent (or camera). It also makes it elegant to scale.

## Scaling out Kerberos Agents

Starting with a few Kerberos Agents, is straight forward. Scaling your Kerberos Agents is not a complex task as well, you can benefit [from the different deployments models](https://github.com/kerberos-io/agent#how-to-run-and-deploy-a-kerberos-agent) we have documented.

{{< figure src="scaling-out.svg" alt="Scaling out your Kerberos Agents is not a complex task." caption="Scaling out your Kerberos Agents is not a complex task." class="stretch">}}

Depending on your scenario [you choose one deployment over the other](https://github.com/kerberos-io/agent#how-to-run-and-deploy-a-kerberos-agent), however there is no golden rule, you should move forward with what you prefer and have experience with. A few examples:

- If you are not into `kubernetes`, and you have only a dozen of cameras, it might be more suitable to utilise `docker compose`.

- On the other hand if you have hundreds of cameras, and plan to install more over the next months and years, you will benefit from the elasticity `kubernetes` provides to you out of the box.

- If you rather have non-technical users managing a video landscape, than [Kerberos Factory](/factory/first-things-first/) might be a good choice.

Whatever you choose, you can always migrate from one option to the other, it's just the engine on which the Kerberos Agent containers are running is updated.

## Storing data where you want

Kerberos Agents are responsible for storing recordings and triggering events. By default all recordings are stored within the Kerberos Agent container, this means that if the containers stops, all your data will be lost. Luckily [there are a couple of techniques to persist](https://github.com/kerberos-io/agent#configure-and-persist-with-volume-mounts) the data outside the container, without losing any information.

In most cases, especially with a growing video landscape, it's more convenient to have a central storage system in place that scales, like Ceph, Minio, or cloud storage like S3 and other blob storage. This is exactly, where Kerberos Vault comes into the picture.

{{< figure src="agents-to-vault.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

[Kerberos Vault](/vault/first-things-first/) acts like a interface between your Kerberos Agents and your storage system. It is responsible for receiving recordings from your Kerberos Agents, and storing them in the right storage system you've configured. By decoupling your Kerberos Agents with [Kerberos Vault](/vault/first-things-first/), you can switch your underlaying storage system on the fly.

Next to persisting your data in your storage system, [Kerberos Vault](/vault/first-things-first/) also acts as an event producers. Each time a recording is successfully stored in your storage system, it will send a message to the configure [Integration](/vault/integrations/), such as Kafka, SQS, etc.

## Centralise your video landscape

One or more [Kerberos Agents](/agent/first-things-first/) are perfect for a small scale deployment. The disadvantage, when running a couple of Kerberos Agents, is that an agent is designed to handle a single camera stream. This means if you would like to have an overview of all your [Kerberos Agents](/agent/first-things-first/), you will need to open multiple interfaces or build something yourself. Another disadvantage is the network, typically a Kerberos Agent is on a local network, and not accessible from the internet. This requires port-forwarding, or a VPN tunnel to properly secure and access them.

{{< figure src="hub-with-vault.svg" alt="Kerberos Vault connected to Kerberos Hub." caption="Kerberos Vault connected to Kerberos Hub." class="stretch">}}

To overcome these disadvantages a tool, [Kerberos Hub](/hub/first-things-first/), was developed that allows to connect a couple, or a thousand of video stream to a single pane of glass. The idea is that you can use either the [Kerberos Hub Saas offering](/hub/first-things-first/) or the [Kerberos Hub self-hosted](/hub/first-things-first/) version, depending on your needs.

[Kerberos Hub](/hub/first-things-first/) comes with features to manage cameras in groups or sites, view livestreams, delegate access of a subset of cameras to specific accounts, filtering through machine learning, etc.
