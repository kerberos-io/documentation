# Multi-camera with Docker

**--- For the moment this approach only works for IP cameras, we don't have a cross-platform method to inject a USB camera or Raspberry Pi camera ---**

If you own multiple IP-cameras, then you probably **don't want** to setup **a Raspberry Pi for each camera**. Thanks to Docker there is an easier approach: instead of running multiple machines you can run multiple containers on a single machine. When you're processing a lot of cameras, you can **distribute the cameras/containers across multiple machines** by using **Docker Swarm**.

## This is how it goes..

The approach is equal to [**the traditional Docker approach**](/installation/docker). First you need to make sure you have **Docker installed** on the machine(s) you prefer. After the installation you can run multiple Docker commands to get Kerberos.io up and running.

Instead of running the docker command once, we will run the command multiple times with different names, and port mappings. So we can access the webinterface of each container.

    $ docker run --name camera1 -p 80:80 -p 8889:8889 -d kerberos/kerberos
    $ docker run --name camera2 -p 81:80 -p 8890:8889 -d kerberos/kerberos
    $ docker run --name camera3 -p 82:80 -p 8891:8889 -d kerberos/kerberos
