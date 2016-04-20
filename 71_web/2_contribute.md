# Contribute

* [Installation](#installation)
* [Versioning](#versioning)
* [Dependency management](#dependency-management)
    * [Composer](#composer)
    * [Bower](#bower)
* [Frameworks](#frameworks)
    * [Laravel](#laravel)
    * [BackboneJS](#backbonejs)

Contributing to the **web** repository requires both front- and back-end sklls. This document describes how to contribute to Kerberos.io and describes all the technical stuff you will need to know. If you want to contribute, the first thing you will need to do is installing the source code on your local environment.

<a name="installation"></a>
## Installation

The complete installation can be found on [**the advanced installation page**](/installation/advanced), describing the complete set of instructions. However for simplicity we will give a summarized version, as probably you will already have a development environment set up.

Install PHP dependencies

    sudo apt-get install php5-cli php5-fpm php5-gd php5-mcrypt php5-curl nodejs
    
Get the source code from Github.

    git clone https://github.com/kerberos-io/web && cd web

Install PHP packages by using composer.

    curl -sS https://getcomposer.org/installer | sudo php
    sudo mv composer.phar /usr/bin/composer
    composer install

Change write permission on the storage directory.

    chmod -R 777 app/storage

Install bower globally by using node package manager, this is installed when installing nodejs.

    npm -g install bower

Install Front-end dependencies with bower
    
    cd public
    sudo bower --allow-root install

That's it..

<a name="versioning"></a>
## Versioning

As you've probably seen in the **installation summary** we are hosting our repositories on [**github**](https://github.com/kerberos-io). As any larger project we are also using a versioning strategy; an easy one :) we don't want to get the things complicated. The version strategy is based on this [**branching model**](http://nvie.com/posts/a-successful-git-branching-model/). 

The model includes:

* master branch,
* develop branch and
* hotfixes

The idea is that the **master** branch always contains a stable release and development happens on the **develop** branch. When we plan to create a new release we merge the develop branch to the master branch and create a new release. If **bugs are introduced** in the master branch (stable release), **hotfixes** are pushed to the master branch and merged back to the develop branch. Believe me, it's very straight-forward if you are into it.

<a name="dependency-management"></a>
## Dependency management

The web is created with PHP and JS. It's obvious that we don't have developed all the functionality ourself, a lot of other open-source third-party libraries are used. To install these libraries (dependencies) a dependency manager is used. For the PHP side we have **composer** and for the JS side there is **bower**.

<a name="composer"></a>
### Composer (PHP)

[**Composer**](https://getcomposer.org/) is a dependency manager for PHP, which is very easy to install and use. To install composer execute following commands:

	php -r "readfile('https://getcomposer.org/installer');" > composer-setup.php
    php -r "if (hash('SHA384', file_get_contents('composer-setup.php')) === '41e71d86b40f28e771d4bb662b997f79625196afcca95a5abf44391188c695c6c1456e16154c75a211d238cc3bc5cb47') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
    php composer-setup.php
    php -r "unlink('composer-setup.php');"
    
After composer is installed properly you can just do **composer install** or **composer update** within the root directory of the **web** repository; this will update all the dependencies if a newer version is available.

    composer update

<a name="bower"></a>
### Bower (JS)

[**Bower**](http://bower.io/) is a dependency manager for JS, it's very similar to composer. To install bower you'll need to download **nodejs** and execute following command:

    npm -g install bower
    
After bower is installed you can install or update dependencies within the **/public** directory.

    bower update

<a name="frameworks"></a>
## Frameworks

The web is created with two frameworks and a lot of third-party libraries.

<a name="laravel"></a>
### Laravel 4.2

[**Laravel**]((http://laravel.com) is a very **powerful** and **popular** PHP framework. This is also the main reason why the web is created with Laravel, the community is huge. A lot of people are writing tutorials and recording webcasts. This makes **getting started** with contributing to the web repository so **easy**. You will find all the information you need on the Laravel [**documentation site**](http://laravel.com/docs/4.2).

<a name="backbonejs"></a>
### BackboneJS

[**BackboneJS**](http://backbonejs.org/) is a **lightweight** framework. It's used in the web to create the **dynamic behaviour** and **structure** the source code. You will find all the information you need on the BackeboneJS [**documentation site**](http://backbonejs.org/).