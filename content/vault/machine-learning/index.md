---
title: "Machine learning"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
    vault:
        parent: "vault"
weight: 308
toc: true
---

Machine learning or computer vision at scale is one of the key motivations of the entire Kerberos Enterprise Suite. All services going from Kerberos Agents, Kerberos Vault to Kerberos Hub are designed in such a way that you can scale them independently of each other. 

The design principle of Kerberos Enterprise Suite allows to decouple videos streams from any CPU or GPU workloads, through the creation of video chunks, queueing and event messaging. This is perfect for GPU workloads such as machine learning or other AI services.

{{< figure src="vault-ml-cv.svg" alt="Machine learning and Computer Vision with Kerberos Vault." caption="Machine learning and Computer Vision with Kerberos Vault" class="stretch">}}

## Video chunks

Kerberos Agents are responsible for recording video streams into small chunks, mp4s, of which you can configure the length of the recording; pre and post recording. The main motivation of doing this is that small chunks of videos are easier to process and distribute across different workloads. Therefore, video chunks are the building blocks and basis of the scale Kerberos brings. 

## Queueing and events

Video chunks prepared by one or more Kerberos Agents are sent to Kerberos Vault where they are persisted in one or more storage providers. The key thing is that they stored through a central application, Kerberos Vault, which has the ability to trigger integrations such as a Kafka broker.

## Consuming and interfere 

Once events are being generated, they are ready to be consumed by one or more consumers. Having this publish and subscribe mechanism, for example Kafka, you have one or more producers (Kerberos Vault replicas) and one or more consumers (ML clients). This allows one to scale the number of consumer and workloads as the number of events, and thus recordings, are increasing.

## NVIDIA operator

Having multiple consumers, I believe we can agree that scaling becomes trivial and thanks to Kubernetes more flexible. But what about GPUs, how do we scale that? 

This is where the NVIDIA operator pops up. NVIDIA released a Kubernetes operator called [the NVIDIA operator](https://developer.nvidia.com/blog/nvidia-gpu-operator-simplifying-gpu-management-in-kubernetes/), that takes control over GPU allocation and assignment to workloads.

The operator solves two main challenges:

1. Hardware: a system or infrastructure engineer can just insert another NVIDIA GPU in one of the PCIE slots, and the Kubernetes cluster / NVIDIA operator will make it part of the GPU pool.

2. Datascience: engineers can build and deploy machine learning models without the need of specifying a particular GPU. The NVIDIA operator will handle that allocation, and make sure one of the GPUs in the pool is assigned to the requested workload.

### Installation

The installation of [the NVIDIA operator can be found here](https://github.com/kerberos-io/nvidia-gpu-kubernetes), with a couple of examples of how to integrate with Kerberos Vault.
