---
title: "How it works"
description: "How Kerberos.io works, and the different building blocks."
lead: "How Kerberos.io works, and the different building blocks."
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

A [Kerberos Agent](/opensource/first-things-first/), is a piece of software that is responsible for monitoring a single camera stream. It contains two pieces: a front-end and a back-end. The back-end processes the video stream, applies computer vision techniques, makes recordings and takes actions (for example sending notifications). The front-end allows you to review recordings, and configure specific settings for the back-end.

{{< figure src="agent-explanation.svg" alt="A Kerberos agent consists of both a backend en frontend." caption="A Kerberos agent consists of both a backend en frontend." class="stretch">}}

## Kerberos Vault

End-consumer or enterprises which only have a few camera streams to manage, probably will be fine with just one or more [Kerberos Agents](/opensource/first-things-first/). If remote access is required they could also benefit from the [Kerberos Hub Saas offering](/hub/first-things-first).

As soon you will process more [Kerberos Agents](/opensource/first-things-first/), it will become interesting to manage your own central storage through [Kerberos Vault](/vault/first-things-first/). If you want to bring your own integrations or machine learning models than [Kerberos Vault](/vault/first-things-first/) is also the way forward.

{{< figure src="vault-edge-cloud-storage.svg" alt="Bring your own storage using Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

## Kerberos Hub

One or more [Kerberos Agents](/opensource/first-things-first/) are perfect for a small scale deployment. The disadvantage, when running a couple of Kerberos Agents, is that an agent is designed to handle a single camera stream. This means if you would like to have an overview of all your [Kerberos Agents](/opensource/first-things-first/), you will need to open multiple interfaces or build something yourself. Another disadvantage is the network, typically a Kerberos Agent is on a local network, and not accessible from the internet. This requires port-forwarding, or a VPN tunnel to properly secure and access them.

To overcome these disadvantages a tool, [Kerberos Hub](/hub/first-things-first/), was developed that allows to connect a couple, or a thousand of video stream to a single pane of glass. The idea is that you can use either the [Kerberos Hub Saas offering](/hub/first-things-first/) or the [Kerberos Hub self-hosted](/hub/first-things-first/) version, depending on your needs. 

[Kerberos Hub](/hub/first-things-first/) comes with features to manage cameras in groups or sites, view livestreams, delegate access of a subset of cameras to specific accounts, filtering through machine learning, etc.
