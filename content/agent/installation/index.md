---
title: "Installation"
description: "Run Kerberos Agents everywhere"
lead: "Run Kerberos Agents everywhere"
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

As described before a Kerberos Agent is a container, which can be deployed through various ways and automation tools such as docker, docker compose, kubernetes and the list goes on. To simplify your life we have come with concrete and working examples of deployments to help you speed up your Kerberos.io journey.

We have documented the different deployment models in the [Kerberos Agent GitHub repository](https://github.com/kerberos-io/agent/tree/master/deployments). There you'll learn and find how to deploy using:

- [Docker](https://github.com/kerberos-io/agent/tree/master/deployments#1-docker)
- [Docker Compose](https://github.com/kerberos-io/agent/tree/master/deployments#2-docker-compose)
- [Kubernetes](https://github.com/kerberos-io/agent/tree/master/deployments#3-kubernetes)
- [Red Hat OpenShift with Ansible](https://github.com/kerberos-io/agent/tree/master/deployments#4-red-hat-ansible-and-openshift)
- [Terraform](https://github.com/kerberos-io/agent/tree/master/deployments#5-terraform)
- [Salt](https://github.com/kerberos-io/agent/tree/master/deployments#6-salt)

By default your Kerberos Agents will store all its configuration and recordings inside the container. To help you automate and have a more consistent data governance, you can [attach volumes](https://github.com/kerberos-io/agent#configure-and-persist-with-volume-mounts) to configure and persist data of your Kerberos Agents, and/or configure each Kerberos Agent [through environment variables](https://github.com/kerberos-io/agent#configure-with-environment-variables).
