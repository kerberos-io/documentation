---
title: "How it works"
description: "How Kerberos.io works and what are the building blocks."
lead: ""
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: ["camera.png"]
menu:
  docs:
    parent: "prologue"
weight: 102
toc: true
---

When you install Kerberos Open Source or Kerberos Enterprise we will refer to it as the Kerberos Agent. A Kerberos Agent, is a software solution that consist of two pieces: Front-End and Back-End. The Back-End processes the video stream of a single surveillance camera, makes recordings and takes actions (for example sending notifications). The Front-End allows you to review recordings, and configure the Back-End.



<img src="/images/prologue/agent-explanation.svg" style="width: 100%"/>

## Front-End
The Kerberos Agent ships with a web interface (Front-End) and a video processing engine (Back-End). The Front-End allows the user to modify specific settings, and if Kerberos Open Source, watch recordings in a easy-to-use interface; The Front-End for [Kerberos Enterprise](/enterprise/introduction) is only for configuration purposes only.

## Back-End
The Back-End piece of the Kerberos Agent is a service that processes the camera feed with computer vision algorithms to detect motion, and makes recordings and/or execute specific actions. Kerberos Enterprise supports any type of IP-camera (RTSP/ONVIF), and Kerberos Open Source also adds support for USB (V4L2) and the popular Raspberry Pi camera.

Depending on which Kerberos Agent, Kerberos Open Source or Kerberos Enterprise, you will have different installation methods. If you would like to learn more about the Kerberos Agent, have a look in the related sections: [Open Source](/opensource/introduction), [Enterprise](/enterprise/introduction).

## Open Source vs Enterprise

The Kerberos project started as an Open Source project, with a main focus on low-cost devices such as the Raspberry Pi. Later on the Open Source version was bundled inside the Docker technology so that it was easier to distribute. Anyone can use the Open Source version for personal usage.

Enterprises are more demanding, and have a lot of surveillance cameras, therefore they need a scalable surveillance system. The [Enterprise edition](/enterprise/introduction) of Kerberos allows you to operate a video surveillance cluster (Kubernetes) on-premise or in the cloud (AWS/GCP/Azure).

The Open Source and Enterprise edition are significantly different from a source code point of view. The [Enterprise edition](/enterprise/introduction) is a complete rewrite of the Open Source version, and got all the best practices we discovered over the years implemented. Both version are and will remain updated in the future.

## Kerberos Vault

Users or Enteprises which only have a few surveillance cameras to manage, probably will be fine with Kerberos Open Source. On top of that they might include [Kerberos Cloud](/cloud) for remote access and monitoring.

On the other hand if you plan to manage a larger network of surveillance cameras, you will have to look into [Kerberos Enterprise](/enterprise/introduction). Backed up with Kubernetes, Kerberos Enterprise, will give you the real super powers to your scale surveillance camera landscape. Kerberos Enterprise comes with a Front-End to manage and scale your deployments inside a Kubernetes Cluster.

[Kerberos Enterprise](/enterprise/introduction) leverages a service called, [Kerberos Storage](/storage/introduction), for central and hybrid storage. Kerberos Storage implements the concept of BYOC (Bring Your Own Cloud). By selecting a cloud provider (AWS, GCP, AZURE) or on-premise (Minio) you can bring your recordings where you them to be.

In addition to the concept of BYOC, Kerberos Storage enables you to connect to Kerberos Cloud (with your own storage), send events to message brokers (such as Kafka or SQS) and enables you to build custom apps or services (such as a custom machine learning service).

![Architecture Storage](../public/images/kerberos-storage.png)

## Kerberos Hub

When installing a Kerberos Agent inside your local network, it's possible to review your activity by using the agent its web interface. By all network principles, having a local setup, you will not be able to access the web interface from the cloud (outside your local network). On top of that, the Kerberos Agent doesn't come with a consolidated overview. This means that you will need to open multiple web interfaces, one for each connected surveillance camera. To simplify and resolve all of these challenges, [Kerberos Cloud](/cloud) was developed.

![cloud](../public/images/kerberos-architecture.png)