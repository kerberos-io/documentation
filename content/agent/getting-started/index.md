---
title: "Getting Started"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  agent:
    parent: "agent"
weight: 202
toc: true
---

Once you've installed one ore more Kerberos Agents, you should have access to the Kerberos Agent user interface. The interface allows you to interact with the Kerberos Agent, and more specifically configure the camera stream, setup a cloud connection, watch recordings and live views, etc.

Having a UI in place, it is important to note that Kerberos Agent also ships numerous APIs, that allow you to automate the configuration. The APIs are exposed as, Swagger documentation, and can be used for configuration of Kerberos Agent but also development of custom applications or business logic.

## Login page

Once you open a browser, and navigate to the Kerberos Agent user app (see installation for the URL), you will land on the login page.

{{< figure src="login.gif" alt="After successful installation you should be able to access the login page." caption="After successful installation you should be able to access the login page." class="stretch">}}

The default username and password of the Kerberos Agent app is:

- username: **root**
- password: **root**

> The username and password can be changed [by setting an environment variable](https://github.com/kerberos-io/agent#configure-with-environment-variables).

## Dashboard

On the dashboard page, you'll find a summary of the most relevant information and insights.

{{< figure src="dashboard.gif" alt="All relevant information on a single pane of glass" caption="All relevant information on a single pane of glass" class="stretch">}}

## Media

At the media page you'll find all your past and future recordings. It shows the recordings in a latest to oldest view and allowxs you to filter and browse through your recordings.

{{< figure src="media.gif" alt="All your recordings in a single place." caption="All your recordings in a single place." class="stretch">}}

## Settings

The settings page allows you to modify the Kerberos Agent configuration. While configuring you will find different settings such as:

- general (name, timezone, etc)
- camera (which main stream and/or sub stream)
- streaming
- persistence

{{< figure src="settings.gif" alt="Configure your Kerberos Agent." caption="Configure your Kerberos Agent." class="stretch">}}
