---
title: "Introduction"
description: "A brief introduction into the world of Kerberos.io"
lead: ""
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

The **Kerberos(dot)io** project, is a video surveillance solution, which was initiated back in 2014. Over the years it has evolved into a trusted, stable and feature-rich video surveillance system. To set the expectations, watch the video below to understand what it can and can't do. If you want to install Kerberos(dot)io, it's recommended to have a look [at the architectures page](/prologue/deployments/) to find the best solution for your usecase.

<div class='embed-container'><iframe src="https://player.vimeo.com/video/382090189" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>

## The name: Kerberos.io

Many people are confused, and don't understand why this project is called Kerberos(dot)io. If you've been in the IT world for a while you will notice that Kerberos is already used for the authentication protocol [Kerberos](https://en.wikipedia.org/wiki/Kerberos_(protocol)).
We believe that the name Kerberos(dot)io makes sense for this project as well, with a strong emphasize on the suffix **.io**, which stands for input and output devices (e.g. any type of camera). Kerberos(dot)io can be seen as a kind of security protocol driven by hardware devices such as surveillance cameras. To make writing easier we will from now on, refer to Kerberos instead of Kerberos(dot)io.

## Why Kerberos

As burglary is very common, we believe that video surveillance is a trivial tool in our daily lifes which helps us to feel a little bit more secure. Responding to this need, a lot of companies have started developing their own video surveillance software in the past few years.

Nowadays we have a myriad of expensive cameras, recorders, and software solutions which are mainly outdated and difficult to install and use. Kerberos goal is to solve these problems and to provide every human being or enterprise in this world to have their own ecological, affordable, easy-to-use and innovative surveillance solution.

## What is Kerberos

Kerberos is a video surveillance solution, that uses computer vision algorithms to detect changes, and that can trigger actions (notifications, api, etc). It comes in two flavors, Kerberos Open Source and Kerberos Enterprise. Kerberos can be deployed to any ARM device, Linux OS, Docker, Balenca Cloud, or cluster such as Kubernetes.

### Kerberos Agent

When you install Kerberos Open Source or Kerberos Enterprise we will refer to it as the Kerberos agent. A Kerberos agent, is a software solution that processes the video stream of a single surveillance camera, makes and visualises recordings and takes actions (for example sending notifications).