---
name: Installation - Recycle
menu: Storage
route: /storage/installation-recycle
---

# Kerberos Storage - Recycle Mechanism

Next to storing your recordings, cleaning up is also important. You have to avoid your disk being filled up and locking up the entire system and cluster. Therefore we have build a recycle service called Kerberos Storage Recycle, which you can use to remove recordings based on different rules.

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
