# Project structure

* [Configuration](#configuration)
* [File structure](#file-structure)
	* [Server](#server)
	* [Client](#client)

The web interace contains several important concepts and this is the right place where we will explain them briefly.

<a name="configuration"></a>
## Configuration

The web interface can be used to configure the machinery and therefore provides a *settings* page where algorithms, expositors, etc can be configured. The web interface will convert the configuration files into HTML elements, so when adding new algorithms or heuristics, the parameters will be reflected in the web interface automatically. The only thing you need to do is to specify a type to each parameter. You will find an equivalent *view* with the same name in the **app/views/controls** directory.

The webinterface can be used to configure Kerberos with our [**cloud application**](/1.0.0/addons/Cloud). The setup is very easy, you only need to create an account on our cloud application, request a key, and enter it in every webinterface you want to have synced. Once Kerberos is configured with the cloud application, a filewatcher, **Gruntjs**, will push new images to the cloud application immediately.

<a name="file-structure"></a>
## File structure

Laravel has been used as back end framework, so if you aren't familiar with Laravel, check out their [documentation website](http://laravel.com/docs). However we will give a briefly explanation of the most important directories.

<a name="server"></a>
### Server
* **app/config/app.php** - this file contains Kerberos specific parameters; where the configuration files can be found, the user credentials to sign in, etc.
* **app/controllers** - MVC controllers
* **app/repositories** -repositories are injected into the controller.
* **app/api.php** - contains all the URI endpoints for Ajax calls.
* **app/repositories.php** - bind repositories to a specific interface - dependency injection.
* **app/routes.php** - url routing for pages.

<a name="client"></a>
### Client

* **public/css/less** - LESS is used for the CSS.
* **public/js/app** - BackboneJS and RequireJS is used for building modular JS classes.
* **public/js/mustache** - Mustache is used for the client-side view rendering. 
* **public/js/vendor** - This is where the bower extensions are installed.
* **public/capture** - A directory where images are written to by default.
* **public/bower.json** - The bower extensions used in the kerberos project.
* **public/Gruntfile.js** - We are using Grunt for our task manager.