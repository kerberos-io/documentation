---
title: "Getting Started"
description: "What to expect from the Kerberos Factory."
lead: "What to expect from the Kerberos Factory."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  factory:
    parent: "factory"
weight: 301
toc: true
---


Once you've installed Kerberos Factory, you will have the web application running inside your cluster. This web application allows you to administrate and automate the creation of your Kerberos Agents through the concept of [Kubernetes deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/) and pods.

Important to note is that this web application is relying [on the official Golang Kubernetes API](https://github.com/kubernetes/client-go), so that means from an administration point of view, you could simply use the well known `kubectl` command instead. The web application adds some functionalities on top of the Kubernetes API, which are specific to a Kerberos Agent; for example region of interests, livestreaming settings, etc.

## Login page

Once you open a browser, and navigate to the web application (see installation for the url), you will land on the login page.

{{< figure src="login.gif" alt="Login into the Kerberos Factory interface." caption="Login into the Kerberos Factory interface." class="stretch">}}

The default username password, specified in the [`deployment.yaml`](https://github.com/kerberos-io/enterprise/blob/master/yaml/factory/deployment.yaml#L54) is:

- username: **root**
- password: **kerberos**

> The username and password [can be changed in the `deployment.yaml` file](https://github.com/kerberos-io/enterprise/blob/master/yaml/factory/deployment.yaml#L54).

## Overview

On the overview page you will find an intuitive overview of the different pages and functionalities. On the left menu you will see two sections: **Docker** and **Kubernetes**. Kerberos Factory can run in Docker (single-host) and Kubernetes (cluster) mode, however the recommended way is of course Kubernetes.

When working with Kubernetes, Kerberos Agents are deployed as a deployment. When working with Docker, Kerberos Agents are deployed as traditional Docker containers.

{{< figure src="overview.gif" alt="Review your Docker or Kubernetes agents." caption="Review your Docker or Kubernetes agents." class="stretch">}}


## Kubernetes

On the left menu you will find the Kubernetes section. In this section 3 pages are available:

- Nodes: a list of all the nodes in your cluster.
- Deployments: a list of all the Kerberos Agents running in your cluster.
- Pods: all the pods running in your cluster.

## Nodes

The nodes section lists all the available nodes inside your Kubernetes cluster. It shows a limited amount of information such as the version, the number of Docker images installed on the node, and some basic hardware information.

{{< figure src="nodes.png" alt="Get an entire list of nodes which are connected to your Kubernetes cluster." caption="Get an entire list of nodes which are connected to your Kubernetes cluster." class="stretch">}}

## Deployments

The deployments section will list all the Kerberos Agents (running as deployments) that you have deployed inside your cluster. This page gives you access to deploy new Kerberos Agents one by one or in bulk. Next to that you can easily upgrade Kerberos Agents to a newer version, reboot them, view logging and update the configuration options of the Kerberos Agent.

{{< figure src="deployments.png" alt="Get a list of all your Kerberos Agents." caption="Get a list of all your Kerberos Agents." class="stretch">}}

### Adding a new deployment

There are two options to add a new deployment, single deployments and bulk deployment.

{{< figure src="single-bulk-deployment.gif" alt="Deploy a single Kerberos Agent or in bulk." caption="Deploy a single Kerberos Agent or in bulk." class="stretch">}}

- single deployment

By specifying a name for your Kerberos Agent, and it's corresponding RTSP url, a new Kubernetes deployment will be created for you, and a Kuebrnetes pod will be deployed to one of your installed nodes.

- in bulk deployment.

By importing an Excel file, deployments can be created in bulk.

By specifying the name and corresponding RTSP url in multiple rows, you can deploy your deployments in bulk.

{{< figure src="add-bulk-deployment-excel.png" alt="Add a Kerberos Agent through a deployment." caption="Add a Kerberos Agent through a deployment." class="stretch">}}

### Configuring a deployment

Once you have a running Kerberos Agent, you should see a green circle next to the deployment, indicating that it is successfully running. At any time you can configure your Kerberos Agent by clicking on the <SettingsIcon className="pointer"/> icon. This will open a popup, allowing you to change some settings.

{{< figure src="deployment-configuration.gif" alt="Once you created the Kerberos Agent, you can configure the agent." caption="Once you created the Kerberos Agent, you can configure the agent." class="stretch">}}

Following settings can be changed:

- One or more regions of interest,
- Time based conditions,
- Pre- and post recording
- Continuous recording
- Linking to [Kerberos Hub Saas](/hub/first-things-first) or [Kerberos Vault](/vault/first-things-first)

### Global configuration

Configuration can be specified in a Kerberos Agent, this means that you update the configuration of a specific Kubernetes deployment. However, this can also be specified at a higher level. This higher level is what we call the global configuration.

By specifying configurations at a higher level, any Kerberos Agents will inherit from that configuration. This is improving the overall maintenance and management of your Kerberos Agents.

{{< figure src="global-configuration.gif" alt="You can specify the configurations on a global level, so all Kerberos Agents will inherit from that." caption="You can specify the configurations on a global level, so all Kerberos Agents will inherit from that." class="stretch">}}

### Upgrade or reboot a Kerberos Agent

At Kerberos, we have agile development cycles, which means that new versions will be released every day, week or month. To make sure you can upgrade or downgrade these Kerberos Agent easily, an upgrade feature is built-in. When pressing the upgrade button, you will be able to select the version to which you would like to upgrade or downgrade. Once submitted, **a zero downtime upgrade will take place**. Kubernetes will download the new release, create a new pod, and destroy the old one.

At any moment you can reboot one of your Kerberos Agents. When pressing the reboot button, next to your deployment, Kubernetes will destroy the pod of your deployment, and schedule a new one. 

{{< figure src="upgrade-reboot.gif" alt="You can specify the configurations on a global level, so all agents will inherit from that." caption="You can specify the configurations on a global level, so all agents will inherit from that." class="stretch">}}

## Pods

When creating a Kerberos Agent, Kubernetes will create a Kubernetes deployment and schedule a pod. The pod will be managed by your deployment, and deployed as a container to one of your available nodes. Once a pod dies/ crashes, or whatever unexpected scenario, the deployment will make sure it is deployed again to a different (or the same) node. This makes sure the Kerberos Agent is in a healthy state at all times.

{{< figure src="pods.png" alt="When creating a deployment, a Kubernetes pod has created and assigned to a node." caption="When creating a deployment, a Kubernetes pod has created and assigned to a node." class="stretch">}}

## Storage and video management

Kerberos Factory allows you to scale your video landscape horizontally, using the concept of Kubernetes, and brings a strong backbone for stability and performance. It allows you to avoid reinventing the wheel, and get stuck in the numerous challenges of developing a scalable video platform.

Kerberos Agents store their recordings locally for a short period. This means that long-term storage is not included in the solution. On top of that it also does not have a visual component, which allows you te review dashboards or recordings. To overcome these two challenges, long-term storage with extensibility/integration capabilities and visualisation features, following solutions were developed [Kerberos Vault](/storage/introduction) and [Kerberos Hub](/cloud).

### Kerberos Vault

[Kerberos Vault](/vault/first-things-first) is a solution which makes it possible to store recordings from Kerberos Agents (across different clusters) at a central place, on the storage provider you want. You can store your recordings in the cloud (AWS S3, Google Cloud Storage, Azure Blob storage) or at the edge (Minio, Ceph).

On the other hand it's an open platform, as it allows you build extensions and integrations (web apps, mobile apps, machine learning services much more). Kerberos Vault ships with the ability of real-time messaging (Kafka), and a REST API (documented as Swagger).

{{< figure src="vault-cloud-storage.svg" alt="Kerberos Vault allows you to centralise your recordings and build integrations." caption="Kerberos Vault allows you to centralise your recordings and build integrations." class="stretch">}}

To connect one or more Kerberos Agents to your Kerberos Vault instance, you should open the configuration option and navigate to the `cloud` tab. After selected you need to fill-in the credentials from your Kerberos Vault account.
To connect one or more Kerberos Agents to your Kerberos Vault instance, you should open the configuration option and navigate to the `cloud` tab. After selected you need to fill-in the credentials from your Kerberos Vault account.

- Storage URI: this is the API endpoint of your Kerberos Vault instance. Usually this is in the following format: `http(s)://api.yourdomain.com/storage`. Where `api.yourdomain.com` should match your Kerberos Vault API endpoint. If you are deploying Kerberos Vault at the edge, in the same cluster, you can use the internal DNS name, as following `http://kerberos-vault.kerberos-vault:8081/storage`.

- Provider: the name of the provider, which you created on the Kerberos Vault providers page, to which you want to send your recordings to.

- Directory: this is the subdirectory in which your files will be stored. At the time of writing this should also equal your Kerberos Hub username, if you plan to upload to Kerberos Hub.

- Access Key: this should match the access key of one of your Kerberos Vault accounts.

- Secret Access Key: this should match the secret access key of one of your Kerberos Vault accounts.

{{< figure src="storage-setup.gif" alt="Using Kerberos Vault you can bring your own storage, and store the recordings of your agents in your own storage provider." caption="Using Kerberos Vault you can bring your own storage, and store the recordings of your agents in your own storage provider." class="stretch">}}

### Kerberos Hub

For the visualisation part Kerberos Hub comes into the picture. Kerberos Hub is a web app, backed up with a number of microservices, that shows dashboards, live streams, filter recordings and much more. Learn more [about the features and functions here](/cloud).

You have two choices when using Kerberos Hub, either you send your recordings from your Kerberos Agents directly to Kerberos Hub, or you send your recordings to Kerberos Vault, and connect Kerberos Vault to Kerberos Hub. About the latter more is explained on the [Kerberos Vault page](/storage/get-started).

Select the Kerberos Hub option, and copy-paste the credentials from your Kerberos Hub subscription.

{{< figure src="enterprise-to-hub.gif" alt="By linking your Enterprise agent to Kerberos Hub, your recordings and livestreams will become available online." caption="By linking your Enterprise agent to Kerberos Hub, your recordings and livestreams will become available online." class="stretch">}}

- Region: this is the region where your recordings will be stored. Only `eu-west-1` for now (will change, on the roadmap).

- Bucket: the name of the Kerberos Hub bucket.  Only `kerberosaccept` for now (will change, on the roadmap).

- Directory: this is your personal directory, and matches your Kerberos Hub username.

- Public Key: this should match the public key of your Kerberos Hub subscription.

- Secret Access Key: this should match the private key of your Kerberos Hub subscription.
