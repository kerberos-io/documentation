---
title: "Announcement"
description: "A Kerberos Agent with more features, better performance, and great UX."
lead: "A Kerberos Agent with more features, better performance, and great UX."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
    agent:
        parent: "agent"
weight: 300
toc: true
---

Kerberos Agent is the next generation of Kerberos.io, and is the successor of Kerberos Open Source (v1/v2). More specifically it will replace and merge the [machinery](https://github.com/kerberos-io/machinery) and [web](https://github.com/kerberos-io/web) repositories. A switch in technologies and architecture has been made. Kerberos Agent is still under active development, and not yet released. The progress can be followed at the [develop branch](https://github.com/kerberos-io/opensource/tree/develop) and [project overview](https://github.com/kerberos-io/opensource/projects/1).

## What is changing?

Bottom line, we are rebuilding the project from scratch using a different technology stack. We are saying goodbye to C++, PHP (Laravel), BackboneJS and saying hello to Golang and React. Despite the technology changes, we are also changing the architecture which was put in place a couple of years ago. The biggest change is to run the show inside a single repository, and no longer over seperate repos (machinery and web). Read more about this in the FAQ.

{{< figure src="opensource-to-agent.svg" alt="The Kerberos Agent is a complete new rewrite of the Kerberos Open Source version 1 and 2." caption="The Kerberos Agent is a complete new rewrite of the Kerberos Open Source version 1 and 2." class="stretch">}}

## FAQ

### 1. Why a mono repo?

We have noticed in the past (v1 and v2) that splitting the repositories (machinery and web), created a lot of confusion within our community. People didn't understand the different versions and so on. This caused a lack of collaboration, and made it impossible for some people to collaborate and contribute.

Having a mono repo, which is well-organised, simplifies the entry point for new people who would like to use, understand and/or contribute to Kerberos Agent.

### 2. Why a change in technologies?

In previous versions (v1 and v2) we used technologies like C++, PHP and BackboneJS. 7 years ago this was still acceptable, however time has changed and new technologies such as React and Golang became very popular.

Due to previous reason we have decided to rebuild the Kerberos Open Source technology from scratch, taking into account all the feedback we acquired over the years. Having these technologies available, we will enable more people to contribute and use our technology.

### 3. How is the Kerberos Enterprise Suite involved?

We started the developments of the Kerberos Enterprise Suite a year ago (January, 2020), our focus here was scalability, fast development and easy deployment. We noticed that with technologies such as Golang and React, we can still provide a highly performant video surveillance system.

The Kerberos Agent which is currently part of the Kerberos Enterprise Suite will be open sourced and become the one and only engine for video stream capturing, motion detection, etc.

The Kerberos Agent will be used both in the open source as the B2B communities. Other solutions such as Factory, Vault and Hub will be made available through different licensing.

### 4. Change in License

Kerberos Agent is now available under the MIT license.
