# Armbian

* [How to install](#how-to-install)
* [Machinery](#machinery)
    * [Install package](#machinery-install-package)
    * [Configure](#machinery-configure)
    * [Run](#machinery-run)
* [Web](#web)
    * [Install webserver + PHP (optional)](#web-installation-webserver)
    * [Install source](#web-installation-source)


<a name="machinery"></a>
## Machinery

<a name="machinery-install-package"></a>
### Install package

Update system and install dependency avcodec. These installation instructions assume that a fresh Armbian 5.24 or 5.25 installed.

    sudo apt-get update && sudo apt-get install libav-tools

Download the debian file from [**the machinery repository**](https://github.com/kerberos-io/machinery/releases/v%machineryversion%/); This should work on all Armbian supported boards. If not: inform us!.

    sudo wget https://github.com/kerberos-io/machinery/releases/download/v%machineryversion%/armbian-machinery-kerberosio-armhf-%machineryversion%.deb

Unpackage the file

    sudo dpkg -i armbian-machinery-kerberosio-armhf-%machineryversion%.deb     

Start the machinery on start-up, and reboot the system.

     sudo systemctl enable kerberosio && sudo reboot

<a name="machinery-configure"></a>
### Configure

The configuration files can be found at **/etc/opt/kerberosio/config**. By default the Raspberry Pi Camera module is set as capture device. This must be changed in the **config.xml** to **USBCamera** or **IPCamera** depending on your camera. Images / videos are stored in the **/etc/opt/kerberosio/capture** directory by default; this location can be changed by editing the **io.xml** file.

<a name="machinery-run"></a>
### Run

After kerberos is installed a binary is available at **/usr/bin/kerberosio**. Just run following command in your terminal to start kerberosio

    kerberosio

In case kerberosio does not start and complains about missing libraries, install the following libraries.

    sudo apt-get install pkg-config libavcodec-dev libavformat-dev libswscale-dev

<a name="web"></a>
## Web

<a name="web-installation-webserver"></a>
### Install webserver + PHP (optional)

Add Raspbian package repo and update the packages and kernel.

    echo "deb http://mirrordirector.raspbian.org/raspbian/ stretch main contrib non-free rpi" | sudo tee --append /etc/apt/sources.list
    sudo apt-get update && sudo apt-get upgrade

Install Nginx and PHP (+extension).

    sudo apt-get install nginx php7.0 php7.0-curl php7.0-gd php7.0-fpm php7.0-cli php7.0-opcache php7.0-mbstring php7.0-xml php7.0-zip php7.0-mcrypt nodejs npm

Creating a Nginx config.

    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nano /etc/nginx/sites-enabled/default

Copy and paste following config file; this file tells nginx where the web will be installed and that it requires PHP.

    server
    {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/web/public;
        index index.html index.htm index.nginx-debian.html;
        server_name kerberos.rpi kerberos.rpi;
        index index.php index.html index.htm;
        location /
        {
                autoindex on;
                try_files $uri $uri/ /index.php?$query_string;
        }
        location ~ \.php$
        {
                fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
        }
    }

Restart nginx and reboot system

    sudo service nginx restart && sudo reboot

<a name="web-installation-source"></a>
### Install source

Create a www location.

    sudo mkdir -p /var/www/web && cd /var/www/web

Get the source code from Github.

    sudo wget https://github.com/kerberos-io/web/releases/download/v%webversion%/web.tar.gz

Unpack

    sudo tar xvf web.tar.gz

Change write permission on the storage directory.

    sudo chmod -R 777 storage
    sudo chmod -R 777 bootstrap/cache
    sudo chmod 777 config/kerberos.php

Reboot

    sudo reboot
