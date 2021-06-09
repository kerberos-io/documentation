---
title: "Announcement"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "opensourcev3"
weight: 300
toc: true
---

Kerberos Open Source (v3) is the next generation of Kerberos.io, and is the successor of (v1/v2). More specifically it will replace and merge the [machinery](https://github.com/kerberos-io/machinery) and [web](https://github.com/kerberos-io/web) repositories. A switch in technologies and architecture has been made. Version 3 is still under active development, and not yet released. The progress can be followed at the [develop branch](https://github.com/kerberos-io/opensource/tree/develop) and [project overview](https://github.com/kerberos-io/opensource/projects/1).

## What is changing?

At the bottom line, we are rebuilding the project from scratch using a different technology stack. We are saying goodbye to C++, PHP (Laravel), BackboneJS and saying hello to Golang and React. Despite the technology changes, we are also changing the architecture, we have put in place a couple of years ago. The biggest change is to run the show inside a single repository, and no longer over seperate repos (machinery and web). Read more about this in the FAQ.

![Kerberos Open Source v2 - vs - v3](../public/images/kerberos-agent-v2-v3.png)

## FAQ

### 1. Why a mono repo?

We have noticed in the past (v1 and v2) splitting the repositories (machinery and web), created a lot of confusion within our community. People didn't understand the different versions and so on. This caused a lack of collaboration, and made it impossible for some people to collaborate and contribute.

Having a mono repo, which is well organised, simplifies the entry point for new people who would like to use, understand and/or contribute to Kerberos Open Source.

### 2. Why a change in technologies?

In previous versions (v1 and v2) we used technologies like C++, PHP and BackboneJS. 7 years ago this was still acceptable, however time has changed and new technologies such as React and Golang became very popular.

Due to previous reason we have decided to rebuild the Kerberos Open Source technology from scratch, taking into account all the feedback we acquired over the years. Having these technologies available, we will enable more people to contribute and use our technology.

### 3. What is the difference with Kerberos Enterprise?

We started the developments of Kerberos Enterprise a year ago (January, 2020), our focus here was scalability, and fast development and easy deployment. We noticed that with technologies such as Golang and React, we can still provide a highly performant video surveillance system.

Kerberos Open Source will use the same technology stack, and some code pieces, of Kerberos Enterprise which we have already build. We have a very clear now, of how a well developed and documented video surveillance system needs to look like.

### 4. When are we going to be able to install the first version?

We plan to ship the **first version by the end of Q1**, afterwards we will add more and more features as usual.


### 5. Change in License

Kerberos Open Source (v3) is now available under the MIT license.