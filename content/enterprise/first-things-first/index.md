---
title: "First things first"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  enterprise:
    parent: "enterprise"
weight: 300
toc: true
---

Over the years Kerberos evolved into a mature and stable solution. Lots of people and companies started to adopt the system, and requested enhancements. Despite the fact that Kerberos Open Source is stable and feature rich, every
solution has its limitations, especially if you aim to scale it.

That being said, Kerberos Open Source is perfect when monitoring a limited set of surveillance cameras, but it doesn't scale well if you plan to monitor dozens or hundreds of surveillance cameras. Although Kerberos Open Source ships
as a Docker image, it has no high availability or fail over functionality.

Independently we've seen many vendors developing their own custom VMS solutions, usually tightly coupled to there proprietary surveillance hardware, which are delivered to enterprise customers as closed software solutions with limited API's and/or messaging capabilities.

Due to these reasons we have developed Kerberos Enterprise, Kerberos Storage and Kerberos Cloud, which is an open scalable solution stack, suitable for your ever growing video surveillance landscape, but having extensibility and integration built-in from the ground up.

The major key differentiators compared to to other solutions are:

- Scalability with Kubernetes,
- Open API's with well documented Swagger API's,
- Host anywhere, in the cloud or on premise,
- Integration and extension, allowing to build custom apps, ML services and more.

<br/>
<div class='embed-container'><iframe src="https://player.vimeo.com/video/405037695" width="640" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
<br/><br/>

## Kubernetes

To provide our customer with the high availability and fail over requirements they have, Kerberos Enterprise was built on top of Kubernetes (k8s). This container orchestrator allows us to scale a video surveillance landscape horizontally, and deliver a never-seen high available video surveillance system.

{{< figure src="../../prologue/deployments/onpremise-more-then-5.svg" alt="When you start having bigger deployments it's recommended to go with a Kubernetes approach." caption="When you start having bigger deployments it's recommended to go with a Kubernetes approach." class="stretch">}}

Kerberos Enterprise is installed inside a Kubernetes cluster. It will create pods/deployments for every surveillance camera you want to monitor. Kubernetes will scale and distrubute these pods across your nodes (VM's/Baremetal machines).

Nodes inside your cluster can fail or crash, Kubernetes will make sure the Kerberos pods running on the failed nodes will be deployed to healthy node. This, to make sure the monitoring of your video surveillance cameras continues seamlessly.

By having the power to add nodes to your cluster, you can anticipate to the ever growing need of your surveillance cameras. With the Kubernetes tools you can monitor your cluster and get into the details.

## Cloud or on premise

You install Kerberos Enterprise inside a Kubernetes cluster, but there are no limitations where this cluster will be actually running. This means that whatever security policy you have within your company, you can run it where you want: on-premise, public cloud, private cloud, etc.

{{< figure src="../../prologue/deployments/cloud-more-then-5.svg" alt="As previous mentioned you could process them in a Kubernetes cluster in the cloud." caption="As previous mentioned you could process them in a Kubernetes cluster in the cloud." class="stretch">}}

## Licensing

Kerberos Enterprise is publicly available and **does not** require a license key to operate correctly. Everyone can install the Kerberos Enterprise component free of charge.