# Installation

* [Install from source](#install-from-source)
    * [Install on Arch Linux](#install-from-source-on-arch-linux)
    * [Install on Raspbian](#install-from-source-on-raspbian)
    
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

Change write permission on the storage directory

    chmod -R 777 app/storage

Install bower globally by using node package manager, this is installed when installing nodejs.

    npm -g install bower

Install Front end dependencies with bower
    
    cd public
    bower --allow-root install
    
<a name="install-from-source-on-raspbian"></a>
### Install on Raspbian
    
Update the Raspbian kernel

    sudo apt-get update
    sudo apt-get upgrade

Install subversion, development tools (c++, cmake) and V4L utils.

    curl -sL https://deb.nodesource.com/setup | sudo bash - 
    sudo apt-get install nginx php5-cli php5-fpm php5-gd php5-mcrypt php5-curl nodejs

Edit nginx config

    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nano /etc/nginx/sites-enabled/default 
    
Copy and paste following config

    server
    {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /home/kerberos-web/public;
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

Go to home directory
    
    cd /home

Get the source code from github

    sudo git clone https://github.com/kerberos-io/web kerberos-web

Install php packages by using composer

    cd kerberos-web
    
    curl -sS https://getcomposer.org/installer | sudo php
    sudo mv composer.phar /usr/bin/composer
    sudo composer install

Change write permission on the storage directory

    sudo chmod -R 777 app/storage

Install bower globally by using node package manager, this is installed when installing nodejs.

    sudo apt-get install npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node
    sudo npm -g install bower

Install Front end dependencies with bower
    
    cd public
    sudo bower --allow-root install
    
Restart nginx

    sudo service nginx restart
