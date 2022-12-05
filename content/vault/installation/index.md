---
title: "Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  vault:
    parent: "vault"
weight: 302
toc: true
---

Kerberos Vault is shipped as a container image and is preferably installed inside a Kubernetes cluster. This means that you can run it where and how you want. Depending on your setup, home installation or production ready deployment, you might decide to install it using standard `Docker` or `Kubernetes` depending on your needs and requirements.

## Docker 

You can quickly ramp-up Kerberos Vault by using `docker compose`. We have provided a `docker-compose.yaml` file, which includes all the required services.

> Install Kerberos Vault using `docker compose` [following this step-by-step installation guide](https://github.com/kerberos-io/vault/tree/master/docker).

## Kubernetes

Although you might expect that self-hosted Kubernetes or a managed Kubernetes in the cloud is the same, you will notice that there are a few differences in terms of installation.  

When running a Kubernetes cluster on a Kubernetes service provider, such as [GKE](https://cloud.google.com/kubernetes-engine), [EKS](https://aws.amazon.com/eks/) or [AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) you will have a wide range of superpowers such as a `LoadBalancer` service, automatic `Volume` creation, etc. The latter is something what is missing in an Edge deployment, there you have to prepare the volumes yourself and install an edge load balancer like `MetalLB`. 

{{< figure src="vault-edge-cloud-deployments.svg" alt="Kerberos Vault can be installed everywhere your Kubernetes cluster can be installed." caption="Kerberos Vault can be installed everywhere your Kubernetes cluster can be installed." class="stretch">}}

## Managed Kubernetes

Installing Kerberos Vault on a Kubernetes Service Provider (Azure, GCP, AWS) is straight forward, as you can create a Kubernetes cluster in a few clicks, get access to public load balancers, volumes and more. Running Kerberos Vault in such a cluster is just a matter of copy-pasting some configuration (yaml) files, and execution of `kubectl apply` commands.

> Install Kerberos Vault on a Kubernetes Service Provider by [following this step-by-step installation guide](https://github.com/kerberos-io/vault/tree/master/kubernetes#a-managed-kubernetes-1).

{{< figure src="vault-cloud-deployment.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

## Self-hosted Kubernetes

No need to install Kerberos Vault on a Kubernetes Service Provider, it can be installed on your own Kubernetes cluster in your private cloud, or at the edge. The closer you bring Kerberos Vault to your video streams, and Kerberos Agents, the more benefits you will experience (low latency, low bandwidth, etc). 

In contrast to the Kubernetes Service Provider, there will be more work required. Setting up a Kubernetes Cluster, configuring a load balancer, and creating persistent volumes and claims.

> Install Kerberos Vault on a private cloud or at the edge by [following this step-by-step installation guide](https://github.com/kerberos-io/vault/tree/master/kubernetes#b-self-hosted-kubernetes-1).

{{< figure src="vault-edge-deployment.svg" alt="Store your recordings at the edge with Kerberos Vault" caption="Store your recordings at the edge with Kerberos Vault" class="stretch">}}
