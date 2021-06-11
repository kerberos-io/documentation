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

Just like Kerberos Enterprise, Kerberos Vault can be installed where Kubernetes can be installed. This means that it can run at the Edge - Baremetal -, in the cloud - VMs - or at Kubernetes service providers - SAAS - such as GCP, Azure, AWS, DigitalOcean, and the list goes on.

Although you might except Kubernetes at the Edge or Kubernetes in the cloud, there are no differences, well sorry to say there are. As Kubernetes service providers implemented features such as LoadBalancers, Persistent Volumes, and others, they have automated and integrated a huge portion of the Kubernetes stack with their related PAAS services. To be more concrete if you are running a Kubernetes Cluster on GCP, you will use the LoadBalancing and Storage services from GCP.

{{< figure src="deployment-models.svg" alt="Kerberos Vault can be installed everywhere your Kubernetes cluster can be installed." caption="Kerberos Vault can be installed everywhere your Kubernetes cluster can be installed." class="stretch">}}

Compared to Kubernetes at the Edge, there are no predefined LoadBalancers, Storage capabilities, and more. This means more administration work for you, but - with great power comes great responsibility - so no worries. In the end there are alternative functionalties available, for features which you find out-of-the-box at the Kubernetes service providers, you just have to spend more time on configuring and installing those services/pods/deployments yourself.

## Installation on a Kubernetes Service Provider

Installing Kerberos Vault, just like Kerberos Enterprise, on a Kubernetes Service Provider (Azure, GCP, AWS) is straight forward, as you can create a Kubernetes cluster in a few clicks, get access to public Load Balancers, storage and more. Running Kerberos Vault in such a cluster is just a matter of copy-pasting some configuration (yaml) files, and executing some `kubectl apply` commands.

{{< figure src="../first-things-first/arch-kerberos-vault-providers.svg" alt="Bring your own storage using Kerberos Vault" caption="Bring your own storage using Kerberos Vault" class="stretch">}}

Install Kerberos Vault on a Kubernetes Service Provider by [following this step-by-step installation guide](/storage/installation-cloud).

## Installation in Private cloud or Baremetal

No need to install Kerberos Vault on a Kubernetes Service Provider, you could install it on your own Kubernetes cluster in your private cloud, or even better inside your own premise. The closer you bring Kerberos Vault to your surveillance infrastructure, and Kerberos Enterprise, the more benefits you will experience (low latency, low bandwidth, etc).

{{< figure src="../first-things-first/arch-edge-kerberos-vault.svg" alt="Store your recordings at the edge with Kerberos Vault" caption="Store your recordings at the edge with Kerberos Vault" class="stretch">}}

In contradiction to the Kubernetes Service Provider, you will have some work todo. Setting up Kubernetes Cluster, play with MetalLB, Persistent Volumes and claims. Don't be scared, it's pretty straight forward as well. You can't simple expect a: click, click, 💥 approach.

Install Kerberos Vault on a Private cloud or Baremetal by [following this step-by-step installation guide](/vault/installation-edge).
