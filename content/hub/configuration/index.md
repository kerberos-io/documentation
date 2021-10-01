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

### Groups

Groups are similar to sites, the only difference is that it is more abstract than a site. A group can be for example "Cash desks", "Entrance gates", "All stores of Belgium", "EMEA sites", etc. A group can be either a collection of sites, what we call then a **site group**, or it can contain a number of cameras from one or more sites, what we call a **group**.

Similar to sites, groups can also be used to give access to specific Kerberos Agents, and introduces a next level of flexibility and access controls. As illustrated before you could have some responsible for all "entrance gates" of all buildings within a specific country. By giving a sub account access to this group, he or she will only see the entrance gates of the different sites and not the other Kerberos Agents belonging to the related sites.

You can create a new group, by navigating to the groups page and clicking the `(+ Add Group)` button at the left top.

{{< figure src="hub-add-group.gif" alt="Structure your Kerberos Agents by using groups, another level of flexibility." caption="Structure your Kerberos Agents by using groups, another level of flexibility." class="stretch">}}
