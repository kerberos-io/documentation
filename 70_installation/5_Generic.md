# Generic

* [Machinery](#machinery)
    * [Compile](#machinery-compile)
    * [Configure](#machinery-configure)
    * [Run](#machinery-run)
* [Web](#web)
    * [Install webserver + PHP (optional)](#web-installation-webserver)
    * [Install source](#web-installation-source)
* [Auto removal](#auto-removal)


<a name="machinery"></a>
## Machinery

<a name="machinery-compile"></a>
### Compile

Update the packages and kernel.

    sudo apt-get update && sudo apt-get upgrade

Install development tools (c++, cmake).

    sudo apt-get install git cmake subversion libav-tools dh-autoreconf libcurl4-openssl-dev yasm libx264-dev pkg-config libssl-dev

If you want to use IP cameras, make sure to compile FFMPEG with x264 support.

    git clone https://github.com/FFmpeg/FFmpeg ffmpeg
    cd ffmpeg && git checkout remotes/origin/release/2.8
    ./configure --enable-gpl --enable-libx264 --enable-shared --prefix=/usr/local
    make && sudo make install

Go to home directory and pull the machinery from github.

    cd && git clone https://github.com/kerberos-io/machinery

Compile the machinery; this can take some time.

    cd machinery && mkdir build && cd build
    cmake .. && make && make check && sudo make install

Start the machinery on start-up.

    sudo systemctl enable kerberosio

<a name="machinery-configure"></a>
### Configure

The configuration files can be found at **/etc/opt/kerberosio/config**. By default the Raspberry Pi Camera module is set as capture device. You can update the **config.xml** file to change it to **USBCamera** or **IPCamera**. Images are stored in the **/etc/opt/kerberosio/capture** directory by default; this location can be changed by editing the **io.xml** file.

<a name="machinery-run"></a>
### Run

After kerberos is installed a binary is available at **/usr/bin/kerberosio**. Just run following command in your terminal to start kerberosio.

    kerberosio

<a name="web"></a>
## Web

<a name="web-installation-webserver"></a>
### Install web

If you want to install **the web**, you'll need to have **a webserver** (e.g. Nginx) and **PHP** running with some extensions. You also need **NodeJS** and **npm** installed to install **Bower**. Below you can find the installation procedure to install the web on your preferred environment.

**Install Dependencies**

Install Git, PHP7 (+extensions) and NodeJS.

A) Ubuntu

    sudo apt-get update && sudo apt-get upgrade
    curl -sL https://deb.nodesource.com/setup | sudo bash -
    sudo apt-get install git php7.0-cli php7.0-gd php7.0-mcrypt php7.0-curl php7.0-mbstring php7.0-dom php7.0-zip php7.0-fpm nodejs npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node

B) Raspbian

    echo "deb http://mirrordirector.raspbian.org/raspbian/ stretch main contrib non-free rpi" | sudo tee --append /etc/apt/sources.list
    sudo apt-get update
    sudo apt-get install -t stretch php7.0 php7.0-curl php7.0-gd php7.0-fpm php7.0-cli php7.0-opcache php7.0-mbstring php7.0-xml php7.0-zip php7.0-mcrypt nodejs npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node

C) OSX

    brew install php7.0 php7.0-curl php7.0-gd php7.0-fpm php7.0-cli php7.0-opcache php7.0-mbstring php7.0-xml php7.0-zip php7.0-mcrypt nodejs npm

**Configure webserver**

Install Nginx,

    sudo apt-get install nginx

or if you're running OSX use brew.

    sudo brew install nginx

Creating a Nginx config.

    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nano /etc/nginx/sites-enabled/default

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

**Clone source**

Create a www location.

    mkdir -p /var/www

Get the source code from Github.

    cd /var/www && sudo git clone https://github.com/kerberos-io/web && cd web

Install PHP packages by using composer.

    curl -sS https://getcomposer.org/installer | sudo php
    sudo mv composer.phar /usr/bin/composer
    sudo composer install

Add write permission for the storage directory, and the kerberos config file.

    sudo chmod -R 777 storage
    sudo chmod -R 777 bootstrap/cache
    sudo chmod 777 config/kerberos.php

Install bower globally by using npm.

    sudo npm -g install bower

Install Front-end dependencies with bower

    cd public
    sudo bower --allow-root install

Reboot

    sudo reboot

<a name="auto-removal"></a>
## Auto removal

By default images or videos **aren't removed automatically**. This means that Kerberos.io will keep writing to disk, even if there is no more space available on your disk. When your **disk is full** you'll be **experiencing strange errors**: a corrupt web interface, blank images or corrupt videos.

To resolve this your should install a simple **bash script** and initiate **a cronjob** which continuously poll your filesystem, and start removing media when your disk is getting full.

Create a bash script and copy following script.

    nano /home/[your user]/autoremoval.sh

Copy following script (make sure the partition is correct, this is the default one for a Raspberry Pi).

    partition=/dev/root
    imagedir=/etc/opt/kerberosio/capture/
    if [[ $(df -h | grep $partition | head -1 | awk -F' ' '{ print $5/1 }' | tr ['%'] ["0"]) -gt 90 ]];
    then
        echo "Cleaning disk"
        find $imagedir -type f | sort | head -n 100 | xargs -r rm -rf;
    fi;

Make the script executable.

    chmod +x /home/[your user]/autoremoval.sh

Initiate a cronjob, and select the **nano** editor.

    crontab -e

Append following line, to execute the **autoremoval.sh** script every 5min.

    */5 * * * * /bin/bash /home/[your user]/autoremoval.sh
