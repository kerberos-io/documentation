---
title: "Accounts"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
    vault:
        parent: "vault"
weight: 307
toc: true
---

Having setup `Providers` and `Integrations`, you need a secure way to interact with them through the creation of an account.

By creating an account you will receive credentials that give access to the Kerberos Vault's providers, integrations and APIs. Account credentials are being used by a Kerberos Agent to send recordings, and/or through custom code by API calls to download and/or forward recordings.

## Prerequisites

Before you can configure a provider, make sure [you have installed a Kerberos Vault](/vault/installation) inside a Kubernetes cluster.

## Configuration of an account

Once you have set up your Kerberos Vault instance, and have successfully login to the application, you should see the account navigation item on the left.

{{< figure src="account.gif" alt="One or more accounts can be created to secure your storage access." caption="One or more accounts can be created to secure your storage access." class="stretch">}}

When selecting the `+ Add Account` button, a modal will open that allows you to configure a specific account. Go a head and select one from the list.

{{< figure src="add-account.gif" alt="Create a secure account." caption="Create a secure account" class="stretch">}}

Once you've provided all the required fields and enabled the account, you should be able to use it and link your Kerberos Agents to your Kerberos Vault.

### Account settings

There are a couple of interesting configurations you can enable on account level. Let's have a look and verify what settings are available, and what they are used for.

#### Details

 - Account name: a random name identifying the account.
 - Main provider: the default provider the account is linked too.
 - Day limit: the expiry date of all recordings stored through this account.
 - Integrations: all the integrations which will be executed each time a recording was stored in a storage provider.

#### Directory

By defining a `directory` you force an account, and all its producing Kerberos Agents, to store all recordings in a specific subdirectory on the selected storage provider. 

By defining the `asteriks` (*) value, you will provide more flexibility and deligate the subdirectory to the connected Kerberos Agents. This means that different Kerberos Agents can store in different subdirectories, although they are connected to the same `account`.

#### Credentials

These credentials are shared with Kerberos Agents, Kerberos Vaults (chained/forwarding) and/or Kerberos Hub. It's the authentication information needed to push recordings or retrieve recordings from Kerberos Vault.

#### Cloud analysis

When connecting Kerberos Vault to Kerberos Hub through the integration, an event is forwarded [to the Kerberos Hub pipeline](/hub/pipeline). By enabling or disabling the cloud analysis you will enable or disable any cloud computing done on the Kerberos Hub.

This is required if you only want to store recordings and avoid any analysis in the cloud, and thus reduce bandwidth from Kerberos Vault to the Kerberos Hub microservices.

#### Edge analysis

When connecting Kerberos Vault to Kerberos Hub through the integration, an event is forwarded [to the Kerberos Hub pipeline](/hub/pipeline). By enabling or disabling the edge analysis you will enable or disable edge computing in Kerberos Vault.

This is useful when you want to compute specific analysis at the edge and forward the relevant results [to the Kerberos Hub pipeline](/hub/pipeline). This avoids bandwidth consumption but increases computing power at the edge.
