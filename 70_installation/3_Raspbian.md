# Raspbian

* [How to install](#how-to-install)
* [Machinery](#machinery)
    * [Install package](#machinery-install-package)
    * [Configure](#machinery-configure)
    * [Run](#machinery-run)
* [Web](#web)
    * [Install webserver + PHP (optional)](#web-installation-webserver)
    * [Install source](#web-installation-source)
* [Auto removal](#auto-removal)


<a name="how-to-install"></a>
## How to install
A short video explaining how to install Kerberos.io on Raspbian.

<iframe src="https://player.vimeo.com/video/163983055?autoplay=0&color=943633" style="width:100%; height: 400px;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<a name="machinery"></a>
## Machinery

<a name="machinery-install-package"></a>
### Install package

Update system and install libav-tools.

    sudo apt-get update && sudo apt-get install libav-tools

Download the debian file from [**the machinery repository**](https://github.com/kerberos-io/machinery/releases/v%machineryversion%/); Please download the correct version for your Raspberry Pi, **replace X by the version**.

    wget https://github.com/kerberos-io/machinery/releases/download/v%machineryversion%/rpiX-machinery-kerberosio-armhf-%machineryversion%.deb

Install the package

    sudo dpkg -i rpiX-machinery-kerberosio-armhf-%machineryversion%.deb

Enable Raspberry Pi camera (if needed)

    sudo raspi-config

Start the machinery on start-up, and reboot the system.

    sudo systemctl enable kerberosio && sudo reboot

<a name="machinery-configure"></a>
### Configure

The configuration files can be found at **/etc/opt/kerberosio/config**. By default the Raspberry Pi Camera module is set as capture device. You can update the **config.xml** file to change it to **USBCamera** or **IPCamera**. Images are stored in the **/etc/opt/kerberosio/capture** directory by default; this location can be changed by editing the **io.xml** file.

<a name="machinery-run"></a>
### Run

After kerberos is installed a binary is available at **/usr/bin/kerberosio**. Just run following command in your terminal to start kerberosio

    kerberosio

<a name="web"></a>
## Web

<a name="web-installation-webserver"></a>
### Install Nginx + PHP

Before you can run the web interface, you'll need to download and configure a webserver. Kerberos.io recommends to use Nginx, as it is a light-weight and fast webserver. The web interface is written in PHP, so we also need to download PHP and some packages.

Update the packages and kernel.

    echo "deb http://mirrordirector.raspbian.org/raspbian/ stretch main contrib non-free rpi" | sudo tee --append /etc/apt/sources.list
    sudo apt-get update && sudo apt-get upgrade

Install Nginx and PHP (+extension).

    sudo apt-get install -t stretch nginx php7.0 php7.0-curl php7.0-gd php7.0-fpm php7.0-cli php7.0-opcache php7.0-mbstring php7.0-xml php7.0-zip php7.0-mcrypt

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

    sudo tar xvf web.tar.gz .

Change write permission on the storage directory.

    sudo chmod -R 777 storage
    sudo chmod -R 777 bootstrap/cache
    sudo chmod 777 config/kerberos.php

Reboot

    sudo reboot

<a name="auto-removal"></a>
## Auto removal

By default images or videos **aren't removed automatically**. This means that Kerberos.io will keep writing to disk, even if there is no more space available on your SD card. When your **SD card is full** you'll be **experiencing strange errors**: a corrupt web interface, blank images or corrupt videos.

To resolve this your should install a simple **bash script** and initiate **a cronjob** which continuously poll your filesystem, and start removing media when your disk is getting full.

Create a bash script and copy following script.

    nano /home/pi/autoremoval.sh

Copy following script (make sure the partition is correct, this is the default one for a Raspberry Pi).

    partition=/dev/root
    imagedir=/etc/opt/kerberosio/capture/
    if [[ $(df -h | grep $partition | head -1 | awk -F' ' '{ print $5/1 }' | tr ['%'] ["0"]) -gt 90 ]];
    then
        echo "Cleaning disk"
        find $imagedir -type f | sort | head -n 100 | xargs -r rm -rf;
    fi;

Make the script executable.

    chmod +x /home/pi/autoremoval.sh

Initiate a cronjob, and select the **nano** editor.

    crontab -e

Append following line, to execute the **autoremoval.sh** script every 5min.

    */5 * * * * /bin/bash /home/pi/autoremoval.sh
