---
title: "Edge Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  enterprise:
    parent: "enterprise"
weight: 304
toc: true
---

Welcome to the Kerberos Enterprise Edge installation. This is the way to go if you want to install Kerberos Enterprise on your Baremetal infrastructure or inside your Private Cloud.

{{< figure src="../../prologue/deployments/onpremise-more-then-5.svg" alt="When you start having bigger deployments it's recommended to go with a Kubernetes approach." caption="When you start having bigger deployments it's recommended to go with a Kubernetes approach." class="stretch">}}

Before we can actual start installing the different deployments in our cluster, we need to make sure we have one available.

## Prerequisites

### Docker

If you have a fresh Linux installation, make sure you have Docker installed. If not the case, this is how you can install it on a Ubuntu OSS.

    apt install docker.io -y

### Kubernetes

After Docker being installed go ahead and install the different Kubernetes servicess and tools.

    apt update -y
    apt install apt-transport-https curl -y
    curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add
    apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"
    apt update -y && apt install kubeadm kubelet kubectl kubernetes-cni -y

Make sure you disable swap, this is required by Kubernetes.

    swapoff -a

And if you want to make it permanent after every boot.

    sudo sed -i.bak '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab

## Installation

Before initiating a new Kubernetes cluster, make sure you have properly cleaned up previous installation (if this was the case ofc).

    kubeadm reset
    rm -rf $HOME/.kube

Initiate a new Kubernetes cluster using following command. This will use the current CIDR. If you want to use another CIDR, specify following arguments: `--pod-network-cidr=10.244.0.0/16`.

    kubeadm init

Once successful you should see the following. Note the `discovery token` which you need to use to connect additional nodes to your cluster.

    Your Kubernetes control-plane has initialized successfully!

    To start using your cluster, you need to run the following as a regular user:

      mkdir -p $HOME/.kube
      sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
      sudo chown $(id -u):$(id -g) $HOME/.kube/config

    You should now deploy a pod network to the cluster.
    Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
      https://kubernetes.io/docs/concepts/cluster-administration/addons/

    Then you can join any number of worker nodes by running the following on each as root:

    kubeadm join 192.168.1.103:6443 --token ej7ckt.uof7o2iplqf0r2up \
        --discovery-token-ca-cert-hash sha256:9cbcc00d34be2dbd605174802d9e52fbcdd617324c237bf58767b369fa586209

Now we have a Kubernetes cluster, we need to make sure we add make it available in our `kubeconfig`. This will allow us to query our Kubernetes cluster with the `kubectl` command.

    mkdir -p $HOME/.kube
    cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    chown $(id -u):$(id -g) $HOME/.kube/config

### Untaint all nodes

By default, and in this example, we only have one node our master node. In a production scenario we would have additional worker nodes. By default the master nodes are marked as `tainted`, this means they cannot run workloads. To allow master nodes to run workloads, we need to untaint them. If we wouldn't do this our pods would never be scheduled, as we do not have worker nodes at this moment.

    kubectl taint nodes --all node-role.kubernetes.io/master-

### Calico

Calico is an open source networking and network security solution for containers, virtual machines, and native host-based workloads. (https://www.projectcalico.org/). We will use it as our network layer in our Kubernetes cluster. You could use otthers like Flannel aswell, but we prefer Calico.

    curl https://docs.projectcalico.org/manifests/calico.yaml -O
    kubectl apply -f calico.yaml

### Kerberos Enterprise

Before setting up Kerberos Enterprise, some configuration needs to happen. First thing that we need to do is setting up the RBAC permissions (Role Based Access Control). We need to enable this to be able to query specific endpoints from the Kubernetes API. By default these endpoints are locked, so we need to unlock them.

    git clone https://github.com/kerberos-io/enterprise

A best practice is to create a separate namespace for your enterprise deployment.

    kubectl create namespace kerberos

    kubectl create -n kerberos -f ./enterprise/yaml/factory/clusterrole.yaml

This will make several actions, permissions, inside your cluster available. We need this to be able to create deployments from the Kerberos Enterprise web app.

### MetalLB

In the Edge world, we do not have fancy Load balancers and Public IP from which we can benefit. To overcome this solutions such as MetalLB - Baremetal Load Balancer - have been developed (https://metallb.universe.tf/installation/). MetalLB will dedicate an internal IP address, or IP range, which will be assigned to one or more Load Balancers.

    kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml
    kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml
    kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

After installing the different MetalLB components, we need to create a `configmap.yaml` file. This file contains information of how MetalLB can get and use internal IP's as LoadBalancers.

      apiVersion: v1
      kind: ConfigMap
      metadata:
        namespace: metallb-system
        name: config
      data:
        config: |
          address-pools:
          - name: default
            protocol: layer2
            addresses:
    -->     - 192.168.1.200-192.168.1.210

You can change the IP range above to match your needs. MetalLB will use this range as a referance to assign IP addresses to your LoadBalancers. Once ready you can apply the configration map.

    kubectl apply -f ./enterprise/yaml/metallb/configmap.yaml

### Helm

Before we can start with the real work, I know we had to do a lot of preparation, we have to install another helpful tool `Helm`. Helm is a package manager for Kubernetes, and really makes you life easier.

    curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
    chmod 700 get_helm.sh
    ./get_helm.sh

This will make sure helm 3 is installed.

### Traefik

To access the Kerberos Enterprise web application, we will create a service in the next paragraphs. This service will expose the web application as an Ingress. Thanks to our previous installation with MetalLB and Traefik (what we will do now), we will have a neat solution for managing our hostnames and Load Balancing IPs.

The idea is that Traefik, will have a dedicated IP address assigned from MetalLB, and will resolve the Ingress of our Kerberos Enterprise web app. Let's go ahead with installing Traefik.

    helm repo add stable https://charts.helm.sh/stable
    helm install -n kerberos traefik -f ./enterprise/yaml/traefik/values.yaml stable/traefik

### MongoDB

When using Kerberos Enterprise, it will generate configurations for every surveillance camera deployed. These configuration files are stored centrally in a MongoDB database. Therefore we use `helm` to install a MongoDB instance inside your cluster.

Before we can move into the installation of MongoDB, in contrary with the cloud installation, we will need to create a Persistent Volume (PV). For simplicity we will use `local-storage`, and make sure the volume is assigned to a specific node (hostname).

Create a folder on the node (VM), where you want to persist the data of MongoDB.

    mkdir /home/mongodb/

Once done open the `./enterprise/yaml/mongodb/volume.yaml` file and make sure to change capacity, local path (if changed) and the hostname attribute (VM/machine, on which the directory is made available).

        spec:
          capacity:
    -->    storage: 10Gi
          accessModes:
          - ReadWriteOnce
          persistentVolumeReclaimPolicy: Recycle
          storageClassName: local-storage
          local:
    -->    path: /home/mongodb/
          nodeAffinity:
            required:
              nodeSelectorTerms:
              - matchExpressions:
                - key: kubernetes.io/hostname
                  operator: In
                  values:
    -->           - hostname

After modified properly you can go ahead with creating the PV.

    kubectl create -n kerberos -f ./enterprise/yaml/mongodb/volume.yaml

Have a look into the `./enterprise/yaml/mongodb/values.yaml` file, you will find plenty of configurations for your MongoDB instance. You will also find the attribute where you can change the root password of MongoDB.

    helm repo add bitnami https://charts.bitnami.com/bitnami
    helm install mongodb bitnami/mongodb -n kerberos --values ./enterprise/yaml/mongodb/values-edge.yaml

Once installed succesfully the MongoDB instance, we should copy the password of the MongoDB instance. Once revealed copy the password, as we will need in the next steps.

    export MONGODB_ROOT_PASSWORD=$(kubectl get secret -n kerberos mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)
    echo $MONGODB_ROOT_PASSWORD

### Kerberos Enterprise Web App - The Factory

The last step is to install the Kerberos Enterprise application. Kerberos Enterprise is managed through an application which we call the `Factory`. It is responsible for initiating the deployments inside your cluster. These deployments is what we also call (similar to the Open Source version) the machinery.

The Factory is shipped as a web app (React) which provides you with a tool to update your deployments (agents) easily, monitor them, etc. The Factory is the central portal for managing Kerberos Enterprise inside your cluster. However at any point you can fine-tune or take-over using the `kubectl` command.

Before installing the Factory web app, open the `./enterprise/yaml/factory/deployment.yaml` configuration file. At the bottom file you will find two endpoints, similar to the traefik config file. Update the domain names to your own domain, and add these to your DNS server (pointing to the same IP as the traefik EXTERNAL-IP).

        spec:
          rules:
    -->   - host: factory.domain.com
            http:
              paths:
              - path: /
                backend:
                  serviceName: factory
                  servicePort: 80
    -->   - host: api.factory.domain.com
            http:
              paths:
              - path: /
                backend:
                  serviceName: factory
                  servicePort: 8081

Modify the MongoDB credentials, and make sure they match the credentials of your MongoDB instance.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "xxxxxxxxxx"

Once you have corrected the DNS names (or internal /etc/hosts file), install the Factory web app inside your cluster.

    kubectl apply -n kerberos -f ./enterprise/yaml/factory/deployment.yaml

## Test out configuration

If everything worked out as expected, you should now have following services in your cluster:

- MongoDB
- Traefik
- Factory

It should look like this.

    $ kubectl get pods -n kerberos
    NAME                              READY   STATUS    RESTARTS   AGE
    factory-6f5c877d7c-hf77p          1/1     Running   0          2d11h
    mongodb-758d5c5ddd-qsfq9          1/1     Running   0          5m31s
    traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h

## Access the system

Once everything is configured correctly your cluster and DNS, you should be able to setup the Factory application. By navigating to the Factory domain `factory.domain.com` in your browser you will see the Factory login page showing up.

{{< figure src="login.png" alt="Once successfully installed Kerberos Enterprise, it will show you the login page." caption="Once successfully installed Kerberos Enterprise, it will show you the login page." class="stretch">}}
