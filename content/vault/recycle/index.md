---
title: "Recycle"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: true
images: []
menu:
  vault:
    parent: "vault"
weight: 310
toc: true
---

Next to persisting your recordings, recycling up is evenly important. Recycling avoids your disks being filled up with recordings and locking up the entire OS and cluster, and also important helps you to reduce costs. Recycling is managed through a recycle service called Kerberos Vault Recycle, which you can use to remove recordings based on different rules.

## Recycling rules

Different recycling rules can be defined. A rule determines when and how recordings should be removed.

### Account day limit

When creating an `account` in Kerberos Vault, you have the option to specify a day limit. This day limit is used by the recycle service, to determine if one ore more recordings are ready to be removed from the selected storage provider.

{{< figure src="vault-recycle.gif" alt="You can remove your recordings by specifying the day limit field." caption="You can remove your recordings by specifying the day limit field." class="stretch">}}

## Prerequisites

This installation guide assumes you have set up Kerberos Vault properly.

## Installation

Modify the Mongodb credentials, as you did for the Kerberos Vault deployment.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "xxxxxxxxxx"

Create the recycle deployment as following.

    git clone https://github.com/kerberos-io/vault
    kubectl apply -f ./vault/yaml/deployment-cleanup.yaml -n kerberos-vault
