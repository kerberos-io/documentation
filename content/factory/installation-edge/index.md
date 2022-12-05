---
title: "Edge Installation"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: true
images: []
menu:
  factory:
    parent: "factory"
weight: 304
toc: true
---

This is the way to go if you want to install Kerberos Factory on your Kubernetes cluster at the edge or inside a private cloud.  Before installing the different deployments in our cluster, we need to make sure we have one available.

{{< figure src="factory-edge.svg" alt="Process your video streams at the edge. " caption="Process your video streams at the edge." class="stretch">}}

## Prerequisites

### Docker

If you have a fresh Linux installation, make sure you have Docker installed. If not the case, this is how you can install it on a Ubuntu OSS.

    apt install docker.io -y

Once installed modify the `cgroup driver`, so kubernetes will be using it correctly. By default Kubernetes cgroup driver was set to systems but docker was set to systemd.

    sudo mkdir /etc/docker
    cat <<EOF | sudo tee /etc/docker/daemon.json
    {
      "exec-opts": ["native.cgroupdriver=systemd"],
      "log-driver": "json-file",
      "log-opts": {
        "max-size": "100m"
      },
      "storage-driver": "overlay2"
    }
    EOF
    
    sudo systemctl enable docker
    sudo systemctl daemon-reload
    sudo systemctl restart docker

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

### Permissions and namespace

Before setting up Kerberos Factory, the first thing that we need to do is enabling RBAC permissions (Role Based Access Control). This needs to be enabled to query specific endpoints from the Kubernetes API. By default, these endpoints are blocked, so we need to unlock them.

First clone the configurations from the GitHub repository [kerberos-io/factory]( https://github.com/kerberos-io/factory).

    git clone https://github.com/kerberos-io/factory

A best practice is to create a separate namespace for your Kerberos Factory and Kerberos Agent deployments.

    kubectl create namespace kerberos-factory

Next go into the directory and execute the first Kubernetes configuration file `clusterrole.yaml`.

    kubectl create -n kerberos-factory -f ./factory/yaml/clusterrole.yaml

This will make several APIs inside your Kubernetes cluster available. We need this to be able to create deployments from the factory web app through the Kubernetes Golang SDK.

### MetalLB

In the Edge world, we do not have fancy Load balancers and Public IP from which we can benefit. To overcome this solutions such as MetalLB - Baremetal Load Balancer - have been developed (https://metallb.universe.tf/installation/). MetalLB will dedicate an internal IP address, or IP range, which will be assigned to one or more Load Balancers.

    kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml
    kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml
    kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

After installing the different MetalLB components, we need to modify a `configmap.yaml` file, which you can find here `./factory/yaml/metallb/configmap.yaml`. This file contains information of how MetalLB can get and use internal IP's as LoadBalancers.

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

You can change the IP range above to match your needs. MetalLB will use this range as a reference to assign IP addresses to your LoadBalancers. Once ready you can apply the configuration map.

    kubectl apply -f ./factory/yaml/metallb/configmap.yaml

### Helm

Before we can start with the real work, I know we had to do a lot of preparation, we have to install another helpful tool `Helm`. Helm is a package manager for Kubernetes, and really makes you life easier.

    curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3
    chmod 700 get_helm.sh
    ./get_helm.sh

This will make sure helm 3 is installed.

### Traefik

To access the Kerberos Factory application, we will create a service in the next paragraphs. This service will expose the web application as an Ingress. Thanks to our previous installation with MetalLB and Traefik (what we will do now), we will have a neat solution for managing our hostnames and Load Balancing IPs.

The idea is that Traefik, will have a dedicated IP address assigned from MetalLB, and will resolve the Ingress of our Kerberos Factory application. Let's go ahead with installing Traefik.

    helm repo add traefik https://helm.traefik.io/traefik
    kubectl create namespace traefik
    helm install traefik traefik/traefik -n traefik

### Ingress-Nginx (alternative for Traefik)

If you don't like `Traefik` but you prefer `Ingress Nginx`, that works as well.

    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
    helm repo update
    kubectl create namespace ingress-nginx
    helm install ingress-nginx -n ingress-nginx ingress-nginx/ingress-nginx

### MongoDB

The last step is to install the Kerberos Factory application. Kerberos Factory is responsible for installing and creating the kubernetes deployments inside your Kubernetes cluster.

Before we can move into the installation of MongoDB, we will need to prepare some storage or persistent volume. To simplify this we can leverage the OpenEBS storage solution, which can automatically provision PV (Persistent volumes) for us.

Let us start with installing the OpenEBS operator. Please note that you might need to change the mount folder. Download the `openebs-operator.yaml` and scroll to the bottom, until you hit the `StorageClass` section. Modify the `BasePath` value to the destination (external mount) you prefer.

    #Specify the location (directory) where
    # where PV(volume) data will be saved.
    # A sub-directory with pv-name will be
    # created. When the volume is deleted,
    # the PV sub-directory will be deleted.
    #Default value is /var/openebs/local
    - name: BasePath
      value: "/var/openebs/local/"
  
Once you are ok with the `BasePath` go ahead and apply the operator.

    wget https://openebs.github.io/charts/openebs-operator.yaml
    kubectl apply -f openebs-operator.yaml

Once done it should start installing several resources in the `openebs` namespace. If all resources are created successfully we can launch the `helm install` for MongoDB.

Have a look into the `./factory/yaml/mongodb/values.yaml` file, you will find plenty of configurations for the MongoDB helm chart. Important to note is [to set the storage class to `openebs-hostpath`](https://github.com/kerberos-io/factory/blob/master/yaml/mongodb/values-edge.yaml#L12), this will automatically create a PV on the host system.

To change the username and password of the MongoDB instance, go ahead and [find the attribute where](https://github.com/kerberos-io/factory/blob/master/yaml/mongodb/values.yaml#L75) you can change the root password.

    helm repo add bitnami https://charts.bitnami.com/bitnami
    kubectl create namespace mongodb
    helm install mongodb -n mongodb bitnami/mongodb --values ./factory/yaml/mongodb/values-edge.yaml

Once installed successfully, we should verify if the password has been set correctly. Print out the password using `echo $MONGODB_ROOT_PASSWORD` and confirm the password is what you've specified in the `values.yaml` file.

    export MONGODB_ROOT_PASSWORD=$(kubectl get secret -n mongodb mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)
    echo $MONGODB_ROOT_PASSWORD

### Kerberos Factory

The last step is to install the Kerberos Factory application. Kerberos Factory is responsible for installing and creating the kubernetes deployments inside your Kubernetes cluster.

#### Config Map

Kerberos Factory requires a MongoDB instance to be running, it uses it to store configuration files and other metrics. To specify those credentials a configmap is created and injected into the Kerberos Factory deployment.

Modify the MongoDB credentials in the configmap `./factory/yaml/mongodb.config.yaml`, and make sure they match the credentials of your MongoDB instance.

        - name: MONGODB_USERNAME
          value: "root"
        - name: MONGODB_PASSWORD
    -->   value: "yourmongodbpassword"

Create the config map.

    kubectl apply -f ./factory/yaml/mongodb.config.yaml -n kerberos-factory

#### Deployment

Before installing Kerberos Factory, open the `./factory/yaml/deployment.yaml` configuration file. At the of the bottom file you will find two endpoints, similar to the Ingres file below. Update the hostnames to your own preferred domain, and add these to your DNS server or `/etc/hosts` file (pointing to the same IP as the Traefik/Ingress-nginx EXTERNAL-IP).

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

If you are using Ingress Nginx, do not forgot to comment `Traefik` and uncomment `Ingress Nginx`.

    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
      name: factory
      annotations:
        #kubernetes.io/ingress.class: traefik
        kubernetes.io/ingress.class: nginx

Once you have corrected the DNS names (or internal /etc/hosts file), install the Factory web app inside your cluster.

    kubectl apply -n kerberos-factory -f ./factory/yaml/deployment.yaml

## Test out configuration

If everything worked out as expected, you should now have following services in your cluster across different namespaces:

- MongoDB
- Traefik
- Factory

It should look like this.

    $ kubectl get pods -n kerberos-factory
    NAME                              READY   STATUS    RESTARTS   AGE
    factory-6f5c877d7c-hf77p          1/1     Running   0          2d11h

    $ kubectl get pods -n mongodb
    NAME                              READY   STATUS    RESTARTS   AGE
    mongodb-758d5c5ddd-qsfq9          1/1     Running   0          5m31s

    $ kubectl get pods -n traefik
    NAME                              READY   STATUS    RESTARTS   AGE
    traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h

## Access the system

Once everything is configured correctly your cluster and DNS, you should be able to set up the Factory application. By navigating to the domain `factory.domain.com` in your browser you will see the login page showing up.

{{< figure src="login.png" alt="Once successfully installed Kerberos Factory, it will show you the login page." caption="Once successfully installed Kerberos Factory, it will show you the login page." class="stretch">}}
