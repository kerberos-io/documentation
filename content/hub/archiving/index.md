---
title: "Archiving"
description: "Archiving media through the creation of a task."
lead: "Archiving media through the creation of a task."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  hub:
    parent: "hub"
weight: 305
toc: true
---

By default recordings are persisted for a short amount of time. Within Kerberos Hub you specify a retention period for each subscription, and assign the relevant subscription to a user. The retention period of a subscription can be set to 30, 60, 90 or any value you desire. The retention period decides how many days of footage will be shown to the end-user once he logged in, and also the removal of the relevant recordings in Kerberos Vault.

Many situation exists where you would like to archive recordings for future inspection, or just because you think the event is important. By archiving the relevant recording, the recording will be copied to another storage provider in Kerberos Vault which is not expiring or has a much higher rentention period; for example 3 years or longer.

The process of archiving through Kerberos Hub and Kerberos Vault is done through the creation of a task. Once a task is created in your Kerberos Hub account, the underlaying recording will be copied from the current storage provider to the archiving storage provider.

{{< figure src="create-task.png" alt="By creating a task, the recording is copied to the archive storage provider in Kerberos Vault." caption="By creating a task, the recording is copied to the archive storage provider in Kerberos Vault." class="stretch">}}

## Creating the archive storage provider and account

To benefit from tasks and the archiving process, an additional storage provider needs to be created in your Kerberos Vault.

{{< figure src="add-storage-provider.png" alt="Create a new storage provider for archiving in Kerberos Vault." caption="Create a new storage provider for archiving in Kerberos Vault." class="stretch">}}

To define the archiving retention period a new Kerberos Vault has to be created, as on account level we specify the retention period. By doing so, recordings copied to the archive storage provider will inherit the retention period from the newly created account.

{{< figure src="add-account.png" alt="Define a retention period in a new Kerberos Vault account." caption="Define a retention period in a new Kerberos Vault account." class="stretch">}}


## Define archive provider and account in Kerberos Hub

Now you have properly configured your Kerberos Vault instance for archiving, we need to make aware Kerberos Hub where to archive our recordings (in which provider and through which account). Open up the `values.yaml` and look for the `kerberosvault` section. Here you will find the `archive` property.

    # We have a kerberos vault component installed which contains all the
    # recordings. Kerberos vault is queried to retrieve the recordings
    # from the appropriate provider.
    kerberosvault:
    uri: "https://api.storage.yourdomain.com"
    accesskey: "xxx"
    secretkey: "xxx"
    provider: "a-provider"

    # Archiving is used when creating a task. The underlying recording of the task will be copied from its
    # existing provider to the below archived provider. Seperate credentials are used, as it makes possible to
    # specify another retention period.
    archive:
        accesskey: "xxx"
        secretkey: "xxx"
        provider: "an-archive-provider"

Specify the `accesskey` and `secretkey` of your newly created Kerberos Vault account, and specify the name of your new archive `provider`. Update your helm chart.

{{< figure src="tasks.png" alt="Your tasks showing up on the tasks page are now showing recordings from your archived storage provider." caption="Your tasks showing up on the tasks page are now showing recordings from your archived storage provider." class="stretch">}}