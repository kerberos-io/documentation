---
title: "Configuration"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  vault:
    parent: "vault"
weight: 305
toc: true
---

Once you have set up Kerberos Vault successfully on your Kubernetes cluster, it is time to set it up and configure the different elements.

The steps we have to go through to get a functional Kerberos Vault are as following,

1. Mount and connect a storage provider,
2. implement and configure one or more integrations,
3. create an account, so Kerberos Vault can be consumed.

## 1. Providers

Storage providers are the foundation of Kerberos Vault. As an administrator you bring your own cloud or edge storage, so there is no need to install a specific Kerberos Vault storage, we are open and integrate with others.

Go ahead and [have a look at the provider page](/vault/provider), there we explain how to add and configure specific providers. 

## 2. Integrations

Once you have successfully stored your recordings on a storage provider, it is time to do something with it. This is where integrations come into play. An integration is a way to make another third-party solution or custom workload aware that a recording was stored on a storage provider.

An integration produces an event with relevant information about the recording:

- Where is it stored,
- its filesize,
- metadata about where motion was detected, etc.

By connecting to an integration you will have to power to consume those message and build custom workflows through the programming languages you prefer, or connect [to existing systems such as Kerberos Hub](/hub/first-things-first) for visualisation purposes. 

Go ahead and [have a look at the integrations page](/vault/integrations), there we explain how to add and configure specific integrations.

## 3. Accounts

You should now have a working storage provider that helps you to persist your recordings, and have an integration in place to produce and consume events. Now it is time to leverage those capabilities through the concept of accounts.

By creating an account you create a secure way of leveraging those capabilities by use authentication credentials; an access key and secret key. 

Once those credentials and relevant account has been created and enabled you can link it to your Kerberos Agents to start forwarding their recordings into your Kerberos Vault installation. On the other hand those credentials can also be leveraged when connecting to Kerberos Hub, so it can read and request recordings from your Kerberos Vault; and underlying storage providers.

Go ahead and [have a look at the accounts page](/vault/accounts), there we explain how to add and configure specific accounts.

## You're ready

If completed previous configurations, you are now ready to configure your Kerberos Agents with our without Kerberos Factory. Learn more here.
