# Multi-camera with Docker

If you own multiple IP-cameras, then you probably **don't want** to setup **a Raspberry Pi for each camera**. Thanks to Docker there is an easier approach: instead of running multiple machines you can run multiple containers on a single machine. And when you're processing a lot of cameras, you can **distribute the cameras/containers across multiple machines** by using **Docker Swarm**.

## This is how it goes..

The approach is equal to [**the traditional Docker approach**](/installation/docker). First you need to make sure you have **Docker installed** on the machine(s) you prefer. After the installation you can use docker-compose to get Kerberos.io up and running. Create a **docker-compose.yml** file and add following configuration:

    machinery:
        image: kerberos/machinery
        ports:
        - "8889"

    web:
        image: kerberos/web
        ports:
        - "80"
        volumes_from:
        - machinery
        links:
        - machinery

Instead of running docker-compose up, we add an additional parameter **-p**. This will create and link the containers from the compose file, but will **wrap and isolate** the containers **in a project**. By reusing this command, and defining different project names, you can run multiple Kerberos.io instances on the same machine (or distribute them over multiple machines.)

    docker-compose -p camera-frontdoor up -d
    docker-compose -p camera-partyroom up -d
    ...
    docker-compose -p camera-garden up -d


