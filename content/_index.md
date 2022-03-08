---
title: "Introduction"
description: "And so it began. The ecosystem of Kerberos.io"
lead: "And so it began.  The ecosystem of Kerberos.io"
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 100
toc: true
---

The **Kerberos.io** project, pronounced as `/kuh buh ruhs dot ai o/`, is a video analytics and video management platform, which was initiated back in 2014. Over the years it has evolved into a stable and feature-rich video platform, which is used for management and analytics such as machine learning.

[![An Introduction to Kerberos.io](youtube-introduction-kerberosio.png)](http://www.youtube.com/watch?v=LjCaMMKJCGc "An Introduction to Kerberos.io")

To set the expectations of what is possible and how, it's recommended to have a look [at the architectures page](/prologue/deployments/) to find the best, or most reasonable architecture for your use case.

## Kerberos.io

Many people are confused, and don't understand why this project is called Kerberos.io. If you've been in the IT world for a while you will notice that Kerberos is already used for the authentication protocol [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol)).

We believe that the name Kerberos.io makes sense for this project as well, with a strong emphasize on the suffix **.io**, which stands for input and output devices (e.g. any type of camera). Kerberos.io can be seen as a kind of security protocol for images and recordings.

## Why Kerberos.io

Kerberos.io initiated as a side project, due to inspiration and motivation in the space of video analytics, computer vision and machine learning. Its first focus was video surveillance only, as nowadays burglary or attacks are very common in this world. 

Due to this, our first mission is to provide every human being on this planet with a solution, a video platform, to protect its families, friends, homes or anything else which you think is important.  

Our second mission is to make this video platform affordable and Open Source (MIT), and develop it in such a way, that it's using the latest technologies, to create a seamless, never-seen and delicious user experience.

While we moved forward our third mission is to scale, and make Kerberos reach far beyond a traditional video platform. With the rise of [Kerberos Enterprise Suite](/enterprise/first-things-first), we now focus on large scale deployments (covering thousands of cameras), and video analytics through machine learning.

## What is Kerberos.io

Kerberos.io is a video analytics and monitoring platform, that is focussing on both end-consumer and enterprises. It comes with modular solutions to support small deployments, a couple of camera streams and larger deployments, with multiple sites and thousands of camera streams.

{{< figure src="kerberos-agent-edge.svg" alt="A Kerberos Agent is monitoring a single camera stream." caption="A Kerberos Agent is monitoring a single camera stream." class="stretch">}}

With Kerberos.io you start small with one or more [Kerberos Agents](/opensource/first-things-first/), and grow over time while introducing more and more components like [Kerberos Factory](/factory/first-things-first/), [Kerberos Vault](/vault/first-things-first/) and [Kerberos Hub](/hub/first-things-first/), which is also referred to as the [Kerberos Enterprise Suite](/enterprise/first-things-first/). Kerberos.io is shipped through the concept of container technology such as Docker and Kubernetes, and implements the ideas of bring your own cloud, bring your own storage and bring your own technology.

{{< figure src="./kerberos-global.svg" alt="A scalable video platform for an ever-growing video landscape." caption="A scalable video platform for an ever-growing video landscape." class="stretch">}}

The whole idea is that any solution you will find at Kerberos.io, is extensible and allows you to integrate by default. For example, you decide where to deploy the solutions (edge/cloud/hybrid), what storage you want (edge/cloud/hybrid), how to integrate it with other third-party solutions, etc. Every solution you'll find in the Kerberos.io space, ships Swagger APIs by default, and will allow you to build your own applications or integrations.

Machine learning and Artificial Intelligence is a critical component of the Kerberos.io ecosystem. Within Kerberos Vault you can integrate your own machine learning models, and run them at scale. [Learn more about how we support](/vault/machine-learning/) machine learning use cases.
