---
title: "Configuration"
description: "Configure Kerberos Hub to your own needs."
lead: "Configure Kerberos Hub to your own needs."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  hub:
    parent: "hub"
weight: 303
toc: true
---

Once you have installed the Kerberos Hub Helm chart, and you confirm to have all microservices properly running you should be able to access the Kerberos Hub login screen and sign in through the default username and password [which was defined during the installation step](https://github.com/kerberos-io/hub#post-installation).

{{< figure src="hub-login.gif" alt="Kerberos Hub login screen after installation." caption="Kerberos Hub login screen after installation." class="stretch">}}

# Accounts

Once you have executed the post installation you should now have a user with the role **owner**. The owner role is the highest privileged role and gives access to all features, functions, Kerberos Agents and related recordings of the specific user. An owner has an overview of all connected Kerberos Agents, and can create sites, groups, alerts, channels, etc. The owner can also delegate specific Kerberos Agents, sites or groups to sub accounts.

## Sub accounts

Sub accounts are created to delegate access to other users, and have a limited scope or access to the different Kerberos Agents and there related recordings and livestreams.

An example of sub account would be a site owner, a store owner, etc. Who only needs access to the livestreams or cameras from the specific site or store.

On top of that a sub account can have a specific role such as **guest** or **editor**. This role will limit the access to specific function and features.
On top of that a sub account can have a specific role such as **guest** or **editor**. This role will limit the access to specific function and features.

You can create a new sub account by navigation to the accounts page and clicking on the `(+ Add Account)` button at the left top.

{{< figure src="hub-add-account.gif" alt="Give another user limited access to Kerberos Hub by creating a sub account." caption="Give another user limited access to Kerberos Hub by creating a sub account." class="stretch">}}

## Sites

While scaling and installing more and more Kerberos Agents, it might become tedious to manage and structure them properly. Due to this reason the concept of sites was created. A site is a logical grouping of a number of Kerberos Agents that are physically installed at the same location.

By creating sites and assigning Kerberos Agents to a specific site, it is easier to monitor specific video streams and there related recordings/events.

Next to that sites also gives an additional advantage in terms of authorization and access control. As described in the accounts paragraph, a sub account can be granted access to only a limited number of sites, and therefore will only be able to view the Kerberos Agents at a specific location.

You can create a new site, by navigating to the sites page and clicking the `(+ Add Site)` button at the left top.

{{< figure src="hub-add-site.gif" alt="Structure your Kerberos Agents by using sites, and introduce Access Control for sub accounts." caption="Structure your Kerberos Agents by using sites, and introduce Access Control for sub accounts." class="stretch">}}

## Groups

Groups are similar to sites, the only difference is that it is more abstract than a site. A group can be for example "Cash desks", "Entrance gates", "All stores of Belgium", "EMEA sites", etc. A group can be either a collection of sites, what we call then a **site group**, or it can contain a number of cameras from one or more sites, what we call a **group**.

Similar to sites, groups can also be used to give access to specific Kerberos Agents, and introduces a next level of flexibility and access controls. As illustrated before you could have some responsible for all "entrance gates" of all buildings within a specific country. By giving a sub account access to this group, he or she will only see the entrance gates of the different sites and not the other Kerberos Agents belonging to the related sites.

You can create a new group, by navigating to the groups page and clicking the `(+ Add Group)` button at the left top.

{{< figure src="hub-add-group.gif" alt="Structure your Kerberos Agents by using groups, another level of flexibility." caption="Structure your Kerberos Agents by using groups, another level of flexibility." class="stretch">}}

## Cameras

On the cameras page you will have an overview of all the 
 cameras, Kerberos Agents, your (sub) account has access too. This means that if your account only has access to a couple of sites or groups, the cameras page will only show the Kerberos Agents that belong to the relating groups and sites.

{{< figure src="hub-cameras.gif" alt="Structure your Kerberos Agents by using groups, another level of flexibility." caption="Structure your Kerberos Agents by using groups, another level of flexibility." class="stretch">}}

By clicking on the `(+ Add Camera)` button, you will see a modal explaining you how to connect a Kerberos Agents to Kerberos Hub, and the different deployments which are available.

### Assign a Kerberos Agent

As explained in the modal, there are different possibilities to set up and run a Kerberos Agent. 

Nevertheless, how you deployed a Kerberos Agent, to connect the Kerberos Agent to Kerberos Hub, you will require the account credentials from your Kerberos Hub account to be shared with your Kerberos Agents. By sharing those credentials you are linking your Kerberos Agents to the relevant Kerberos Hub account.

By navigating to the profile page, and selecting your plan you will find the required credentials for your Kerberos Agents.

Please note that when you are using the Kerberos Hub Saas offering you will need both an access and secret key. If you are using Kerberos Hub self-hosted you will only need an access key.

{{< figure src="hub-link-agent.gif" alt="Get your credentials to link your Kerberos Agents." caption="Get your credentials to link your Kerberos Agents." class="stretch">}}

## Integrations

You got your accounts setup, sites and groups created and last but not least, one or more Kerberos Agents connected to your Kerberos Hub.

Now it is time to configure some integrations using alerts and channels. The idea of integrations is that you can send messages to other 3rd-party services, or your own APIs, when an interesting event/alert occurred.

{{< figure src="hub-alerts.gif" alt="Get your credentials to link your Kerberos Agents." caption="Get your credentials to link your Kerberos Agents." class="stretch">}}

### Alerts

Alerts can be configured to trigger one or more channels on a specific events. Generic or customer alerts can be configured to meet specific requirements and behaviours. A more indepth configuration of both generic and customer alerts are explained below.

![Configuring alerts](hub-customalerts.png)

#### Generic Alerts

Generic alerts (legacy) are the first alerts created in Kerberos Hub. Three different alerts can be configured:

![Configuring alerts](hub-alerts.gif)

- **Detections**: send a notification if a recording was received from a specific Kerberos agent, within a time range, with a specific classification, etc.
- **Devices**: when one of your Kerberos Agents stops working, a notification will be sent.
- **High upload**: when a lot of recordings are generated within a specific period of time, a notification can be send.

#### Custom Alerts

To be written

### Channels

Multiple channels can be configured and used as an event endpoint. Each channel has its own API and visualisation to the end user, therefore we will discuss them below.

#### Webhook

By configuring a webhook, you will be able to receive the event/notification through an HTTP (POST) call. The notification will contain basic information and the actual video recordings. An example of the event looks like this.

    "body": {
        "id": "c704244e6js97h3ob9k0",
        "type": "detection",
        "timestamp": 1639989520,
        "title": "Hey martin something happend at your ingarage.",
        "body": "A pedestrian was detected at 09:38.",
        "unread": true,
        "user": "martin",
        "userid": "57e1011e3178aa6c5cc774d6",
        "sequenceid": "61c040e27dc0c8cf9fb851a2",
        "media": [
            {
                "timestamp": 1639989500,
                "type": "video",
                "url": "https://storage.googleapis.com/kstorage-europe-west1/martin/1639989500_6-967003_ingarage_200-200-400-400_24_769.mp4?Expires=1640162320&GoogleAccessId=xxx"
            }
        ]
    }

An easy way to verify if the POST request is happening, you can use a public webhook service like `https://pipedream.com/`. By creating an account, you will receive your own HTTP endpoint and all the required inspection tools.

{{< figure src="configure-webhook.gif" alt="Configure the webhook channel." caption="Configure the webhook channel." class="stretch">}}

## What's next

Want to learn more how Kerberos Hub is working under the hood? Then [have a look at the Kerberos Hub pipeline page](/hub/pipeline) where we introduce the microservice architecture.
