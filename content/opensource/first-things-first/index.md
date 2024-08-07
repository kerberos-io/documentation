---
title: "First things first"
description: "The Kerberos Open Source agent a low budget but delightful VMS."
lead: "The Kerberos Open Source agent a low budget but delightful VMS."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  opensource:
    parent: "opensource"
weight: 201
toc: true
---

***Kerberos Open Source is deprecated, please [use Kerberos Agent](/agent/first-things-first) instead.***

Kerberos started as an Open Source project back in 2014. Our main goal was, and still is, to provide everyone in this world with a free, professional and complete video surveillance system, which they can install in a couple of minutes.
Kerberos was initially developed for the Raspberry Pi, due to this many of the tools we have been using are lightweight and fast (such as C++). Over the years we have found other ways to make Kerberos available, such as KiOS (our custom Linux), Docker and Kubernetes.

In this section we want to make clear what the Open Source version of Kerberos is about, and when you should be using it. What it can do, and what it can't do.

## License

The Kerberos Open Source project is licensed with [BY-NC-SA 4.0](/opensource/license), this means that everyone can use Kerberos and modify if to their needs, in a non commercial activity.

## When using the Open Source version

Kerberos Open Source is perfect for personal usage. It's great if you only have a couple of surveillance cameras to be managed. A Kerberos agent (e.g. on a Raspberry Pi or inside a Docker container) runs for each camera. Their are many different installation possibilities, please have a look at the [architecture](/architectures) or [installation page](/opensource/installation).

Every Kerberos agent has it's own web interface (front-end) to review media recording, and processing engine (back-end) of a specific surveillance camera. The Open Source version doesn't come with a central overview of all recordings generated by your Kerberos agents. For this feature we highly recommend [Kerberos cloud](/cloud).

If you want to manage more than 10 Kerberos agents, it's recommended to use [Kerberos Enterprise](/enterprise). This will help you to scale, support high availability and load balancing. Check out the [architectures section](/architectures) for a better understanding of when to use what.

## How to install

A Kerberos Open Source agent can be installed in different ways. Every installation method have their own advantages and disadvantages. Depending on the usecase you could choose one method over the other. Read more on the [installation section](/opensource/installation), to learn about the different installation methods.

1. KiOS: You have a Raspberry Pi, and you only want to run the Kerberos agent on it.
2. Raspbian: You have a Raspberry Pi, but you want other services running next to your Kerberos agent.
3. Docker: You have a lot of IP cameras, and/or don't want to mess with dependencies.
4. Generic: You want to develop/extend Kerberos Open Source with your own features, or you want to run the Kerberos agent  on a not supported OS/architecure.
