---
name: Installation - Recycle
menu: Storage
route: /storage/installation-recycle
---

# Kerberos Storage - Recycle Mechanism

Next to storing your recordings, recycling up is also important. You have to avoid your disk being filled up and locking up the entire system and cluster, or you simply have to reduce cost. To make this possible we offer a recycle service called Kerberos Storage Recycle, which you can use to remove recordings based on different rules.

## Recycling rules

Different recycling rules can be configured in the Kerberos Storage app. Based on those rules, the recycle service, will or will not remove a recording from your providers.

### Account day limit

When creating an `Account` on the Kerberos Storage app, you have the option to specify the day limit for that account. This day limit tells the recycle service, if it is time or not to remove the recording.

![Storage - Day Limit](../../public/images/storage/daylimit.gif)

## Prerequisites

This installation guide assumes you have setup Kerberos Storage properly.

## Installation

Modify the MongoDB credentials, as you did for the Kerberos Storage yaml file.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "xxxxxxxxxx"

Execute following script to deploy the recycle job.

    git clone https://github.com/kerberos-io/storage
    kubectl apply -f ./storage/yaml/deployment-cleanup.yaml