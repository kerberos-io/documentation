---
title: "Installation"
description: "Install a Kerberos Agent where and how you want."
lead: "Install a Kerberos Agent where and how you want."
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

The easiest to get your Kerberos Agent up and running is to use our Docker image on Docker hub. Once you selected a specific tag, run below command, which will open the web interface of your Kerberos agent on port 80. For persisting your configuration and/or recordings attach a volume. For more in depth configuration and installation verify [the Kerberos Agent repo](https://github.com/kerberos-io/agent).

### Running as a container

We are creating Docker images as part of our CI/CD process. You'll find our Docker images on [Docker hub](https://hub.docker.com/r/kerberos/agent). Pick a specific tag of choice, or use latest. Once done run below command, this will open the web interface of your Kerberos agent on port 80.  
    
    docker run -p 80:80 --name mycamera -d kerberos/agent:latest

Or for a develop build:

    docker run -p 80:80 --name mycamera -d kerberos/agent-dev:latest

Feel free to use another port if your host system already has a workload running on `80`. For example `81`.

    docker run -p 81:80 --name mycamera -d kerberos/agent-dev:latest

### Attach a volume

By default your Kerberos agent will store all its configuration and recordings inside the container. It might be interesting to store both configuration and your recordings outside the container, on your local disk. This helps persisting your storage even after you decide to wipe out your Kerberos agent.

You attach a volume to your container by leveraging the `-v` option. To mount your own configuration file, execute as following:

1. Decide where you would like to store your configuration and recordings; create a new directory for the config file and recordings folder accordingly.

        mkdir agent
        mkdir agent/config
        mkdir agent/recordings

2. Once you have located your desired directory, copy the latest [`config.json`](https://github.com/kerberos-io/agent/blob/master/machinery/data/config/config.json) file into your config directory.

        wget https://raw.githubusercontent.com/kerberos-io/agent/master/machinery/data/config/config.json -O agent/config/config.json

3. Run the docker command as following to attach your config directory and recording directory.

        docker run -p 80:80 --name mycamera -v $(pwd)/agent/config:/home/agent/data/config  -v $(pwd)/agent/recordings:/home/agent/data/recordings -d kerberos/agent:latest
