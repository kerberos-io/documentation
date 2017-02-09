# Raspbian

* [How to install](#how-to-install)
* [Machinery](#machinery)
    * [Install package](#machinery-install-package)
    * [Configure](#machinery-configure)
    * [Run](#machinery-run)
* [Web](#web)
    * [Install webserver + PHP (optional)](#web-installation-webserver)
    * [Install source](#web-installation-source)


<a name="how-to-install"></a>
## How to install
A short video explaining how to install Kerberos.io on Raspbian.

<iframe src="https://player.vimeo.com/video/163983055?autoplay=0&color=943633" style="width:100%; height: 400px;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<a name="machinery"></a>
## Machinery

<a name="machinery-install-package"></a>
###Install package 

Update system

    sudo apt-get update

Download the debian file from [the machinery repository](https://github.com/cedricve/version-test/releases/v%machineryversion%); Please download the correct version for your Raspberry Pi, **replace X by the version**.

    sudo wget https://github.com/kerberos-io/machinery/releases/download/v%machineryversion%/rpiX-machinery-kerberosio-armhf-%machineryversion%.deb

Unpackage the file 

    sudo dpkg -i rpiX-machinery-kerberosio-armhf-%machineryversion%.deb
     
Enable Raspberry Pi camera (if needed)

    sudo raspi-config

Start the machinery on start-up, and reboot the system.

     sudo systemctl enable kerberosio && sudo reboot
     
<a name="machinery-configure"></a>
###Configure

The configuration files can be found at **/etc/opt/kerberosio/config**. By default the Raspberry Pi Camera module is set as capture device. You can update the **config.xml** file to change it to **USBCamera** or **IPCamera**. Images are stored in the **/etc/opt/kerberosio/capture** directory by default; this location can be changed by editing the **io.xml** file.

<a name="machinery-run"></a>
###Run

After kerberos is installed a binary is available at **/usr/bin/kerberosio**. Just run following command in your terminal to start kerberosio

    kerberosio

<a name="web"></a>
## Web

<a name="web-installation-webserver"></a>
### Install Nginx + PHP

Before you can run the web interface, you'll need to download and configure a webserver. Kerberos.io recommends to use Nginx, as it is a light-weight and fast webserver. The web interface is written in PHP, so we also need to download PHP and some packages.
    
Update the packages and kernel.

    sudo apt-get update && sudo apt-get upgrade

Install Nginx and PHP (+extension).

    sudo apt-get install nginx php5-cli php5-fpm php5-gd php5-mcrypt php5-curl

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
                fastcgi_pass unix:/var/run/php5-fpm.sock;
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

    sudo tar xvf web.tar.gz .

Add write permission for the storage directory, and the kerberos config file.

    sudo chmod -R 777 app/storage
    sudo chmod 777 app/config/kerberos.php