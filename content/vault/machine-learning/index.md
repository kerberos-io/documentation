---
title: "Machine learning"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
    vault:
        parent: "vault"
weight: 306
toc: true
---

A couple of uses are the following ones:

- Continuous recording: having continuous recordings stored in your Kerberos Vault on premise, you don't want to replicate all your recordings to a Kerberos Vault provider in the cloud (to make them public available). Therefore, you could implement custom logic, for example based on a machine learning algorithm, to only replicate recordings which matche a specific scenario.

- On-Demand request: Having Kerberos Hub, an end-user could initiate a request for upload. By default no recordings are forwarded from your Kerberos Vault on premise to your Kerberos Vault in the cloud. Only when an end user requests one or more recordings, the
  upload will start for the requested recordings.
