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

    sudo apt-get update && sudo apt-get install libav-tools libssl-dev

Download the debian file from [**the machinery repository**](https://github.com/kerberos-io/machinery/releases/v%machineryversion%/); Please download the correct version for your Raspberry Pi.

Raspberry Pi Zero/Zero W

    wget https://github.com/kerberos-io/machinery/releases/download/v%machineryversion%/rpi0-machinery-kerberosio-armhf-%machineryversion%.deb
    sudo dpkg -i rpi0-machinery-kerberosio-armhf-%machineryversion%.deb

Raspberry Pi A/B/B+

    wget https://github.com/kerberos-io/machinery/releases/download/v%machineryversion%/rpi1-machinery-kerberosio-armhf-%machineryversion%.deb
    sudo dpkg -i rpi1-machinery-kerberosio-armhf-%machineryversion%.deb

Raspberry Pi 2

    wget https://github.com/kerberos-io/machinery/releases/download/v%machineryversion%/rpi2-machinery-kerberosio-armhf-%machineryversion%.deb
    sudo dpkg -i rpi2-machinery-kerberosio-armhf-%machineryversion%.deb

Raspberry Pi 3

    wget https://github.com/kerberos-io/machinery/releases/download/v%machineryversion%/rpi3-machinery-kerberosio-armhf-%machineryversion%.deb
    sudo dpkg -i rpi3-machinery-kerberosio-armhf-%machineryversion%.deb

Enable Raspberry Pi camera (if needed).

    sudo raspi-config

Set machinery to start on boot, and start it now. A reboot is required if you have changed the options in raspi-config in the previous step.

    sudo systemctl enable kerberosio
    sudo service kerberosio start

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
    sudo nano /etc/nginx/sites-enabled/kerberosio.conf

Copy and paste following config file; this file tells nginx where the web will be installed and that it requires PHP.

    server
    {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/web/public;
        server_name kerberos.rpi;
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

Restart nginx

    sudo service nginx restart

<a name="web-installation-source"></a>
### Install source

Create a www location.

    sudo mkdir -p /var/www/web && sudo chown www-data:www-data /var/www/web
    cd /var/www/web

Get the source code from Github.

    sudo -u www-data wget https://github.com/kerberos-io/web/releases/download/v%webversion%/web.tar.gz

Unpack

    sudo -u www-data tar xvf web.tar.gz .

Change write permission on the storage directory.

    sudo chown www-data -R storage bootstrap/cache config/kerberos.php
    sudo chmod -R 775 storage bootstrap/cache
    sudo chmod 0600 config/kerberos.php

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


# Multi-camera on Raspbian

When you've installed Kerberos.io on your **Raspbian** installation, then you have the possibility **to connect one or more cameras** to the Raspberry Pi. Please note that this functionality **isn't available out-of-the-box**, and therefore requires some technical skills to configure.

## Install Raspbian

First things first. Install Kerberos.io on Raspbian by following **the Raspbian installation** mentioned before, and make sure you've installed Kerberos.io properly.

By default Kerberos.io **only support a single type of camera**, you can navigate to the settings page and change the capture device. If you want to connect more cameras, it **isn't possible** to configure it **through the web interface**.

## This is how it works

When installed properly, the kerberos.io binary will start at boot, and read the configuration files located at **/etc/opt/kerberosio/config**. Next to that Kerberos.io will start the correct capture device, and configure the complete system according the settings you've defined in those configuration files. This is what happens:

	$ kerberosio --config /etc/opt/kerberosio/config/config.xml


To start multiple devices we can simple run the binary a second time, and **overwrite the settings** by commandline parameters. Suppose that we want to connect two more USB cameras, next to our Raspberry Pi camera, then we can do this as following:

	$ kerberosio --name usbcamera1 --capture USBCamera --captures.USBCamera.deviceNumber 0 --streams.Mjpg.enabled false &
	$ kerberosio --name usbcamera2 --capture USBCamera --captures.USBCamera.deviceNumber 1 --streams.Mjpg.enabled false &

What this will do is start two new kerberosio processes, and **connect each USB camera to a kerberosio process**. By overwriting the devicenumber we're able to select a specific USB camera. Next to that we also disabled the stream, because by default kerberosio will bind to the port 8889, and that will not work if we have multiple processes running (additionally you can change the port for each process).

## Where can I find those variables?

When Kerberos.io is started it will write to a log file located at **/etc/opt/kerberosio/logs/log.stash**, which you can see on the system page of the web interface. In the log file you'll see the startup configuration with all the different settings. You can overwrite every setting which is listed in this overview, just keep in mind that you have to prefix every option with **a double dash --**.

	26/10/2016 08:11:36.135 INFO  [trivial] Reading configuration
	26/10/2016 08:11:36.141 INFO  [trivial] Final configuration:
	- algorithm = DifferentialCollins
	- algorithms.BackgroundSubtraction.dilate = 7
	- algorithms.BackgroundSubtraction.erode = 5
	- algorithms.BackgroundSubtraction.history = 50
	...
	- algorithms.DifferentialCollins.threshold = 15
	- capture = USBCamera
	- captures.IPCamera.angle = 0
	- captures.IPCamera.delay = 1000
	- captures.IPCamera.frameHeight = 360
	- captures.IPCamera.frameWidth = 640
	- captures.IPCamera.url = rtsp://admin:888888@192
	- captures.RaspiCamera.angle = 0
	- captures.RaspiCamera.delay = 500
	- captures.RaspiCamera.frameHeight = 720
	- captures.RaspiCamera.frameWidth = 1280
	- captures.USBCamera.angle = 0
	- captures.USBCamera.delay = 500
	- captures.USBCamera.deviceNumber = 0
	- captures.USBCamera.frameHeight = 640
	...
	- streams.Mjpg.enabled = false
	- streams.Mjpg.quality = 75
	- streams.Mjpg.streamPort = 8889
	- timezone = Europe-Brussels

## Where can I find my images?

All images will be stored at the same location, so they will be mixed in the webinterface. We don't provide a way to see the images independent (on a camera basis), if you would like to have this then you should check out our [**cloud application**](https://cloud.kerberos.io) which has some additional features.
