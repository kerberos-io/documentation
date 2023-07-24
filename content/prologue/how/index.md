---
title: "How it works"
description: "From zero to a myriad of cameras"
lead: "From zero to a myriad of cameras"
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

## An overview

As shown below there are 3 critical steps in setting up a video management solution: camera processing, persisting of recordings and analysing. Instead of building a single solution, which many other vendors have build, which covers those 3 functions, we have divided and concur each role and responsibility in a stand-alone solution: [Kerberos Agents](/agent/first-things-first/), [Kerberos Factory](/factory/first-things-first/), [Kerberos Vault](/vault/first-things-first/) and [Kerberos Hub](/hub/first-things-first/).

{{< figure src="overview.svg" alt="The Kerberos.io solution stack" caption="The Kerberos.io solution stack" class="stretch">}}

Due to this approach the Kerberos.io solution stack can be scaled and deployed independently. This means you can deploy specific parts on-premise and other parts on a cloud provider, or the other way arround. Next to that it also allows you to only install what you need: start small and grow over time when your business requires it.

## The Kerberos Agent

At the foundation of any Kerberos.io deployment you'll find one or more [Kerberos Agents](/agent/first-things-first/). These Kerberos Agents are installed [through various possibilities](https://github.com/kerberos-io/agent#how-to-run-and-deploy-a-kerberos-agent) and are deployed to a compute - VM, baremetal, Kubernetes cluster or other - of choice and connected to camera streams you control.

{{< figure src="agent-explanation.svg" alt="A Kerberos agent consists of both a backend en frontend." caption="A Kerberos agent consists of both a backend en frontend." class="stretch">}}

The Kerberos Agent is responsible for a single camera. It is a piece of software which has two responsibilities: it acts as an user interface (frontend) and an API server (backend). The API processes the video stream, applies computer vision techniques, makes recordings and takes desired actions; e.g. a webhook. On the otherhand, the user interface allows a user to review recordings and configure specific settings for the API.

The Kerberos Agent itself is bundled in a single container, which includes all the dependencies and libraries required to have it running. For each camera, a Kerberos Agent container will be created.

{{< figure src="introduction-kerberos-io.svg" alt="A Kerberos Agent is monitoring a single camera stream." caption="A Kerberos Agent is monitoring a single camera stream." class="stretch">}}

The appealing thing with this approach is that you'll experience complete isolation. If one Kerberos Agent goes down, it will not affect any other Kerberos Agent (or camera). It also makes it elegant to scale.

## Scaling out Kerberos Agents

Starting with a few Kerberos Agents is straight forward, and scaling your Kerberos Agents is not a complex task at all. You can benefit [from the different deployments models](https://github.com/kerberos-io/agent#how-to-run-and-deploy-a-kerberos-agent) we have documented, to start exploring and scaling your Kerberos.io configuration.

{{< figure src="scaling-out.svg" alt="Scaling out your Kerberos Agents is not a complex task." caption="Scaling out your Kerberos Agents is not a complex task." class="stretch">}}

Depending on your scenario [you choose one deployment over the other](https://github.com/kerberos-io/agent#how-to-run-and-deploy-a-kerberos-agent). There is no golden rule for the best deployment, you should move forward with your preference and experience. A few examples:

- If you are not into `kubernetes`, and you have only a dozen of cameras, it might be more suitable to utilise `docker compose`.

- On the other hand if you have hundreds of cameras, and plan to install more over the next months and years, you will benefit from the elasticity `kubernetes` provides to you out of the box.

- If you rather have non-technical users managing a video landscape, than [Kerberos Factory](/factory/first-things-first/) might be a good choice.

Whatever you choose, you can always migrate from one option to the other, it's just the engine on which the Kerberos Agent containers are running is updated.

## Storing data where you want

Kerberos Agents are responsible for storing recordings and triggering events. By default all recordings are stored within the Kerberos Agent container, this means that if the containers stops, all your data will be lost. Luckily [there are a couple of techniques to persist](https://github.com/kerberos-io/agent#configure-and-persist-with-volume-mounts) the data outside the container, without losing any information.

In most cases, especially with a growing video landscape, it's more convenient to have a central storage system in place that scales, like Ceph, Minio, or cloud storage like S3 and other blob storage. This is exactly, where Kerberos Vault comes into the picture.

{{< figure src="agents-to-vault.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

[Kerberos Vault](/vault/first-things-first/) acts like a interface between your Kerberos Agents and your storage system. It is responsible for receiving recordings from your Kerberos Agents, and storing them in the storage system you've configured. By decoupling your Kerberos Agents with [Kerberos Vault](/vault/first-things-first/), you can switch the underlaying storage system on the fly, without requiring to reconfiguring all your Kerberos Agents.

Next to persisting your data in your storage system, [Kerberos Vault](/vault/first-things-first/) also acts as an event producers. Each time a recording is successfully stored in your storage system, it will send a message to the configure [Integration](/vault/integrations/), such as Kafka, RabbitMQ, SQS, etc.

## Centralise and governance

Scaling your [Kerberos Agents](/agent/first-things-first/) and having a scalable and flexible storage system with [Kerberos Vault](/vault/first-things-first/) is a strong foundation. However data just being stored in your storage system doesn't bring any value.

Utilising that data to give your stakeholders insights through analytics, providing them with a decent data governance and combining it with live data is where the magic starts.

{{< figure src="introduction-hub.svg" alt="Kerberos Vault connected to Kerberos Hub." caption="Kerberos Vault connected to Kerberos Hub." class="stretch">}}

[Kerberos Hub](/hub/first-things-first/) is our answer. It's a highly scalable platform to connect stakeholders to sites and groups of cameras. It comes with all the features you would imagine: live streaming, object detection, fine-grained user access, alerts and more.

[Kerberos Hub](/hub/first-things-first/) is build on top of Kubernetes and can be deployed, just like all the other components, where you want. It's composed of a serie of microservices that can independently scale towards any demand, and utilises Open Source components such as Kafka, RabbitMQ, SQS, and others for high throughput messaging.

## Takeaways

Kerberos.io comes with different components which you only install when required, there is no need to setup a sophisticated system from the beginning. Each component works on its own and is open and extensible through APIs. Our vision is to start small, with just a few [Kerberos Agents](/agent/first-things-first/), scaling up and introduce more components such as [Kerberos Vault](/vault/first-things-first/) and [Kerberos Hub](/hub/first-things-first/) when required for your use case.

If you need some help on possible deployments, have [a look at the deployment page](/prologue/deployments/) where we illustrate some examples.
