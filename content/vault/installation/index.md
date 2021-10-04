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

Kerberos Vault is shipped as a Docker container and is preferably installed inside a Kubernetes cluster. This means that it can run at the edge, or in the cloud.

Although you might except that Kubernetes at the edge or Kubernetes in the cloud is the same installation, you will notice that there are a few differences. 

When running a Kubernetes cluster on a Kubernetes service provider, such as [GKE](https://cloud.google.com/kubernetes-engine), [EKS](https://aws.amazon.com/eks/), you will have a couple of superpowers such as a `LoadBalancer` service, automatic `Volume` creation, etc. The latter is something what is missing in an Edge deployment, there you have to prepare the volumes yourself and install an edge load balancer like `MetalLB`. 

{{< figure src="vault-edge-cloud-deployments.svg" alt="Kerberos Vault can be installed everywhere your Kubernetes cluster can be installed." caption="Kerberos Vault can be installed everywhere your Kubernetes cluster can be installed." class="stretch">}}

## Installation on a Kubernetes Service Provider

Installing Kerberos Vault on a Kubernetes Service Provider (Azure, GCP, AWS) is straight forward, as you can create a Kubernetes cluster in a few clicks, get access to public load balancers, volumes and more. Running Kerberos Vault in such a cluster is just a matter of copy-pasting some configuration (yaml) files, and execution of `kubectl apply` commands.

Install Kerberos Vault on a Kubernetes Service Provider by [following this step-by-step installation guide](/vault/installation-cloud).

{{< figure src="vault-cloud-deployment.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

## Installation in a private cloud or at the edge

No need to install Kerberos Vault on a Kubernetes Service Provider, it can be installed on your own Kubernetes cluster in your private cloud, or at the edge. The closer you bring Kerberos Vault to your video streams, and Kerberos Agents, the more benefits you will experience (low latency, low bandwidth, etc). 

In contradiction to the Kubernetes Service Provider, there will be more work required. Setting up a Kubernetes Cluster, configure a load balancer, create persistent bolumes and claims.

Install Kerberos Vault on a private cloud or at the edge by [following this step-by-step installation guide](/vault/installation-edge).

{{< figure src="vault-edge-deployment.svg" alt="Store your recordings at the edge with Kerberos Vault" caption="Store your recordings at the edge with Kerberos Vault" class="stretch">}}
