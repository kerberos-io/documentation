---
title: "Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  factory:
    parent: "factory"
weight: 302
toc: true
---

Kerberos Factory is shipped as a container image and is required to be installed inside a Kubernetes cluster. Kerberos Factory integrates with the Kubernetes API server to automatically provision Kerberos Agents on its behalf. This means that Kerberos Factory is out-of-scope if you are planning to use a `docker` or `docker compose` setup.

You can run Kerberos Factory wherever you can run a Kubernetes cluster, so it can run at the edge, or in the cloud. Although you might except that Kubernetes at the edge or Kubernetes in the cloud is the same installation, you will notice that there are a few differences.

When running a managed Kubernetes cluster, such as [GKE](https://cloud.google.com/kubernetes-engine), [EKS](https://aws.amazon.com/eks/) or  or [AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/), you will have a wide range of superpowers such as a `LoadBalancer` service, automatic `Volume` creation, etc. The latter is something what is missing in an self-hosted deployment, where you will have to prepare the volumes yourself and install an edge load balancer like `MetalLB`.

{{< figure src="factory-edge-cloud.svg" alt="Kerberos Factory can be installed everywhere your Kubernetes cluster can be installed." caption="Kerberos Factory can be installed everywhere your Kubernetes cluster can be installed." class="stretch">}}

## Managed Kubernetes

Installing Kerberos Factory in a managed Kubernetes cluster (Azure, GCP, AWS) is straight forward, as you create Kubernetes clusters in a few clicks, get access to public load balancers, volumes and more. Running Kerberos Factory in a managed Kubernetes cluster is just a matter of copy-pasting some configuration (yaml) files, and execution of `kubectl apply` commands.

> Install Kerberos Factory in a managed Kubernetes cluster by [following this step-by-step installation guide](https://github.com/kerberos-io/factory/tree/master/kubernetes#b-managed-kubernetes-1).

{{< figure src="factory-cloud.svg" alt="Kerberos Factory managed cluster" caption="Kerberos Factory managed cluster" class="stretch">}}

## Self-hosted Kubernetes

No need to install Kerberos Factory on a Kubernetes Service Provider, it can be installed on your own Kubernetes cluster in your private cloud, or at the edge. The closer you bring Kerberos Vault to your video streams, and Kerberos Agents, the more benefits you will experience (low latency, low bandwidth, etc).

In contradiction to the Kubernetes Service Provider, there will be more work required. Setting up a Kubernetes Cluster, configure a load balancer, create persistent bolumes and claims.

> Install Kerberos Factory on a private cloud or at the edge by [following this step-by-step installation guide](https://github.com/kerberos-io/factory/tree/master/kubernetes#a-self-hosted-kubernetes-1).

{{< figure src="factory-edge.svg" alt="Kerberos Factory self-hosted cluster" caption="Kerberos Factory self-hosted cluster" class="stretch">}}
