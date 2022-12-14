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

The **Kerberos.io** project, pronounced as `/kuh buh ruhs dot ai o/`, is a video analytics and video management platform, which was initiated back in 2014. Over the years it has evolved into a stable and feature-rich video platform, which is used for video management and analytics such as machine learning.

[![An Introduction to Kerberos.io](youtube-introduction-kerberosio.png)](http://www.youtube.com/watch?v=LjCaMMKJCGc "An Introduction to Kerberos.io")

Kerberos.io scales from small home deployments to large scale enterprise deployments. To set the expectations of what is possible and how, it's recommended to have a look [at the deployments page](/prologue/deployments/) to find the most suitable architecture for your use case.

## The name: Kerberos.io

Many people are confused, and don't understand why this project is called Kerberos.io. If you've been in the IT world for a while you will notice that Kerberos is already used for the authentication protocol [Kerberos](<https://en.wikipedia.org/wiki/Kerberos_(protocol)>).

After all those years, we still believe that the name Kerberos.io makes sense for this project as well. With a strong emphasize on the suffix **.IO**, which stands for any **(I) input** of camera, and any **(O) output** such as a webhook, bash script, mqtt, etc. Kerberos itself is keeping an eye, using the configured input, and triggers the required outputs.

## What is Kerberos.io

Kerberos.io is a video analytics and monitoring platform, that is focussing on both end-consumer and enterprises. It comes with modular solutions to support small deployments, a couple of camera streams and larger deployments, with multiple sites and thousands of camera streams.

{{< figure src="introduction-kerberos-io.svg" alt="A Kerberos Agent is monitoring a single camera stream." caption="A Kerberos Agent is monitoring a single camera stream." class="stretch">}}

With Kerberos.io you start small, with just one or more [Kerberos Agents](/agent/first-things-first/), and grow over time while introducing more and more components like [Kerberos Factory](/factory/first-things-first/), [Kerberos Vault](/vault/first-things-first/) and [Kerberos Hub](/hub/first-things-first/); which we refer to as the [Kerberos Enterprise Suite](/enterprise/first-things-first/). Each solution is shipped through the concept of containers and can be leveraged by using Docker, Docker compose, Kubernetes, OpenShift, Terraform, Ansible, and many more.

{{< figure src="./introduction-enterprise.svg" alt="A scalable video platform for an ever-growing video landscape." caption="A scalable video platform for an ever-growing video landscape." class="stretch">}}

## Why Kerberos.io

Kerberos.io initiated as a side project, due to inspiration and motivation in the space of video analytics, computer vision and machine learning. Its first focus was video surveillance only, as nowadays burglary or attacks are very common in this world.

Due to this, our first mission is to provide every human being on this planet with a solution, a video platform, to protect its families, friends, homes or anything else which you think is important.

Our second mission is to make this video platform affordable and Open Source (MIT), and develop it in such a way, that it's using the latest technologies, to create a seamless, never-seen and delicious user experience.

While we move forward our third mission is to scale, and make Kerberos.io reach far beyond a traditional video platform. With the rise of the [Kerberos Enterprise Suite](/enterprise/first-things-first), we allow our users to scale from a home deployment to a full-blown production ready deployment; covering thousands of cameras.

## Integration and extension

The majority of VMS systems out there are owned by multi-national manufacturers who are building closed systems which, as an hobbiest or professional, are unaccessible in any programmatical way; such as a REST API. This forced people to create workarounds (headless browser) to fetch the desired data from the NVRs or cameras.

The whole idea behind Kerberos.io is to challenge previous statement.

> We want open and integratable systems for anyone and anywhere. You generate the data, you own the data.

The response of Kerberos.io is, that any solution you'll find in our portfolio allows you to integrate and extend by default; no work-a-rounds, the data that is in our solutions belongs to you.

You decide where (cloud, self-hosted) and how (Docker, Kubernetes, OpenShift, Terraform, etc) to deploy our solutions, what storage you want (local SSE, S3, etc), how to integrate it with other third-party solutions (Kafka, SQS, etc).

If you want to build your own application, you can use the Swagger APIs we ship by default, and will allow you to build your own applications or integrations, without any limitations.

## Machine learning

Machine learning and Artificial Intelligence is a critical component of the Kerberos.io ecosystem. Within Kerberos Vault you can integrate your own machine learning models, and run them at scale. [Learn more about how we support](/vault/machine-learning/) machine learning use cases.
