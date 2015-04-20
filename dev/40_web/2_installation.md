# Installation

* [Install from source](#install-from-source)
    * [Install on Arch Linux](#install-from-source-on-arch-linux)

The web interface is already installed on the Kerberos image, however you can also install the webinterface from source; you don't need to do this if you've deployed the Kerberos image on the SD card.

<a name="install-from-source"></a>
## Install from source

The web interface can be installed standalone, for example to host the web interface on an external server; e.g. to increase performance and to centralize multiple kerberos instances.

<a name="install-from-source-on-arch-linux"></a>
### Install on Arch Linux

Update the Arch Linux kernel

    pacman -Syyu

Install git, nginx, php with extensions and nodejs

    pacman -S git nginx php php-fpm php-gd php-mcrypt php-apc php-composer nodejs

Start nginx and php-fpm on boot

    systemctl enable nginx
    systemctl enable php-fpm

Edit nginx config

    nano /etc/nginx/nginx.conf

Copy and paste following config

    user       http http;
    worker_processes  1;
    worker_rlimit_nofile 8192;

    events {
        worker_connections  1024;
    }

    http {
        index    index.html index.htm index.php;
        include  mime.types;
        root /home/kerberos-web/public;
        
        server {
            server_name kerberos.rpi kerberos.rpi;
            index index.php index.html index.htm;

            location /{
                try_files $uri $uri/ /index.php?$query_string;
            }
            location ~ \.php$ {
                fastcgi_pass unix:/run/php-fpm/php-fpm.sock;
                fastcgi_index index.php;
                include fastcgi.conf;
            }
        }
    }

Make sure you've enabled following php extensions: mcrypt, phar, gd and openssl.

    nano /etc/php/php.ini

Uncomment following extensions

    extension=mcrypt.so
    extension=phar.so
    extension=gd.so
    extension=openssl.so

Add the APC extension at the end of the extensions list

    extension=apcu.so

Go to home directory
    
    cd /home

Get the source code from github

    git clone https://github.com/kerberos-io/web kerberos-web

Install php packages by using composer

    cd kerberos-web
    composer install

Change config file: edit the "config" variable, link it to the config directory of the kerberos-io repository. If you don't have the kerberos-io repository installed on that specific server, you can make it an empty string. In this case the option "settings" won't show up in the navigation menu. Please note that the default value is set to the destination of the machinery when installed on the Raspberry Pi.

    nano app/config/app.php

Change write permission on the storage directory

    chmod -R 777 app/storage

Install bower globally by using node package manager, this is installed when installing nodejs.

    npm -g install bower

Install Front end dependencies with bower
    
    cd public
    bower --allow-root install