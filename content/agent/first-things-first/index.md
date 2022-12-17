---
title: "First things first"
description: "An agent with a mind for scale"
lead: "An agent with a mind for scale"
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  agent:
    parent: "agent"
weight: 201
toc: true
---

The Kerberos Agent is an isolated and scalable video management agent with a strong focus on user experience, scalability, resilience, extension and integration. It is the backbone of the entire Kerberos.io ecosystem, and is used as a foundation for small deployments to production level deployments with thousands of cameras.

Next to the Kerberos Agent, Kerberos.io provides many other tools such as [Kerberos Factory](/factory/first-things-first), [Kerberos Vault](/vault/first-things-first) and [Kerberos Hub](/hub/first-things-first) to provide additional capabilities: bring your own cloud, bring your own storage, central overview, live streaming, machine learning etc.

As [explained before](/prologue/how/), there is no need to install all those components from the start. Usually you just start with a few Kerberos Agents, scale over time, and add additional components to support additional use cases.

## Introduction

So by now you'll understand that Kerberos.io [applies the concept of agents](/prologue/how/). An agent is running next to (or on) your camera, and is processing a single camera feed. It applies motion based or continuous recording and make those recordings available through a user friendly web interface. A Kerberos Agent allows you to connect to other cloud services or integrates with custom applications.

![Kerberos Agent overview](kerberos-agent-overview.gif)

We'll provide a more detailed explanation of the Kerberos Agent, but it's important to know that the [Kerberos Agent GitHub repository](https://github.com/kerberos-io/agent) contains the most accurate and latest information. You can find [a brief list of features and functions here](https://github.com/kerberos-io/agent#a-world-of-kerberos-agents).
