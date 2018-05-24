# Docker

**--- For the moment this approach only works for IP cameras, we don't have a cross-platform method to inject a USB camera or Raspberry Pi camera ---**

A Docker image (x86) is available on [**the Docker Hub**](https://hub.docker.com/u/kerberos/kerberos). Before you can run this image you will have to get [**Docker**](https://docker.com) installed. After the installation you can use **docker** to get Kerberos.io up and running.

## Run a simple command.

After you've installed docker, you can open a command prompt and type in following command. This will pull the kerberos image and make the web interface available on port 80 and the livestream on port 8889. You can give the container a custom name using the **--name** property.

    docker run --name camera1 -p 80:80 -p 8889:8889 -d kerberos/kerberos
