# Contribute

* [Versioning](#versioning)
* [Composer](#composer)
* [Laravel](#laravel)
* [Bower](#bower)

This documents describes how to contribute to Kerberos and describes all the technical stuff you will need to know. If you want to contribute you will need to install the source code on your local environment.

<a name="versioning"></a>
## Versioning

The source is managed on [Github](https://github.com/kerberos-io), and thus we are using git as our version control. For simplicity we are using following [branching model](http://nvie.com/posts/a-successful-git-branching-model/). The model includes:

* main branch
* develop branch
* hotfix and release branches

If you are a new developer, fork the development branch and send a pull request.

<a name="composer"></a>
## Composer

Make sure you have [composer installed](https://getcomposer.org/download/) on your local system. Run this in your terminal to get the latest Composer version:

	curl -sS https://getcomposer.org/installer | php

Or if you don't have curl:

	php -r "readfile('https://getcomposer.org/installer');" | php

<a name="laravel"></a>
## Laravel

We're using Laravel as our PHP framework. You will find all the information you need on the laravel [documentation site](http://laravel.com/docs).

<a name="bower"></a>
## Bower

Bower is used for managing our front end dependencies. Bower can be installed with npm, so make sure you have installed node.