---
title: "Installation2"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "enterprise"
weight: 302
toc: true
---

Kerberos Enterprise can be installed where Kubernetes can be installed. This means that it can run at the Edge - Baremetal -, in the cloud - VMs - or at Kubernetes service providers - SAAS - such as GCP, Azure, AWS, DigitalOcean, and the list goes on.

Although you might except Kubernetes at the Edge or Kubernetes in the cloud, there are no differences, well sorry to say there are. As Kubernetes service providers implemented features such as LoadBalancers, Persistent Volumes, and others, they have automated and integrated a huge portion of the Kubernetes stack with their related PAAS services. To be more concrete if you are running a Kubernetes Cluster on GCP, you will use the LoadBalancing and Storage services from GCP.

![enterprise kubernetes](../../public/images/kerberos-enterprise-kubernetes.png)

Compared to Kubernetes at the Edge, there are no predefined LoadBalancers, Storage capabilities, and more. This means more administration work for you, but - with great power comes great responsibility - so no worries. In the end there are alternative functionalties available, for features which you find out-of-the-box at the Kubernetes service providers, you just have to spend more time on configuring and installing those services/pods/deployments yourself.

## Installation on a Kubernetes Service Provider

Installing Kerberos Enterprise on a Kubernetes Service Provider (Azure, GCP, AWS) is straight forward, as you can create a Kubernetes cluster in a few clicks, get access to public Load Balancers, storage and more. Running Kerberos Enterprise in such a cluster is just a matter of copy-pasting some configuration (yaml) files, and executing some `kubectl apply` commands.

![architecture kubernetes](../../public/images/kerberos-agent-architecture-kubernetes-cloud.png)

Install Kerberos Enterprise on a Kubernetes Service Provider by [following this step-by-step installation guide](/enterprise/installation-cloud).

## Installation in Private Cloud or Baremetal

No need to install Kerberos Enterprise on a Kubernetes Service Provider, you could install it on your own Kubernetes cluster in your private cloud, or even better inside your own premise. The closer you bring Kerberos Enterprise to your surveillance infrastructure, the more benefits you will experience (low latency, low bandwidth, etc).

![architecture kubernetes](../../public/images/kerberos-agent-architecture-kubernetes.png)

In contradiction to the Kubernetes Service Provider, you will have some work todo. Setting up Kubernetes Cluster, play with MetalLB, Persistent Volumes and claims. Don't be scared, it's pretty ssttraight forward as well. You can't simple expect a: click, click, 💥 approach.

Install Kerberos Enterprise on a Private cloud or Baremetal by [following this step-by-step installation guide](/enterprise/installation-edge).