# Advanced

* [Machinery](#machinery)
    * [Compile](#machinery-compile)
    * [Configure](#machinery-configure)
    * [Run](#machinery-run)
* [Web](#web)
    * [Install webserver + PHP (optional)](#web-installation-webserver)
    * [Install source](#web-installation-source)
 
<a name="machinery"></a>
## Machinery

<a name="machinery-compile"></a>
###Compile

Update the packages and kernel.

    sudo apt-get update && sudo apt-get upgrade

Install development tools (c++, cmake) and V4L utils.

    sudo apt-get install git libav-tools cmake subversion dh-autoreconf libcurl4-openssl-dev

Go to home directory and pull the machinery from github.

	cd && sudo git clone https://github.com/kerberos-io/machinery

Compile the machinery; this can take some time.

    cd machinery && mkdir build && cd build
    cmake .. && make && make check && sudo make install

Start the machinery on start-up.

     sudo systemctl enable kerberosio
     
<a name="machinery-configure"></a>
###Configure

The configuration files can be found at **/etc/opt/kerberosio/config**. By default the Raspberry Pi Camera module is set as capture device. You can update the **config.xml** file to change it to **USBCamera** or **IPCamera**. Images are stored in the **/etc/opt/kerberosio/capture** directory by default; this location can be changed by editing the **io.xml** file.

<a name="machinery-run"></a>
###Run

After kerberos is installed a binary is available at **/usr/bin/kerberosio**. Just run following command in your terminal to start kerberosio.

    kerberosio

<a name="web"></a>
## Web

<a name="web-installation-webserver"></a>
### Install webserver + PHP (optional)
    
Update the packages and kernel.

    sudo apt-get update && sudo apt-get upgrade

Install git, nginx, php (+extension) and nodejs.

    curl -sL https://deb.nodesource.com/setup | sudo bash - 
    sudo apt-get install git nginx php5-cli php5-fpm php5-gd php5-mcrypt php5-curl nodejs

Creating a nginx config.

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
    
Restart nginx

    sudo service nginx restart

<a name="web-installation-source"></a>
### Install source

Create a www location.
    
    mkdir -p /var/www

Get the source code from Github.

    cd /var/www && sudo git clone https://github.com/kerberos-io/web && cd web

Install PHP packages by using composer.

    curl -sS https://getcomposer.org/installer | sudo php
    sudo mv composer.phar /usr/bin/composer
    sudo composer install

Add write permission for the storage directory, and the kerberos config file.

    sudo chmod -R 777 app/storage
    sudo chmod 777 app/config/kerberos.php
    
Install bower globally by using node package manager, this is installed when installing nodejs.

    sudo apt-get install npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node
    sudo npm -g install bower

Install Front-end dependencies with bower
    
    cd public
    sudo bower --allow-root install