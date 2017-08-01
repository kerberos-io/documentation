# Project structure

* [File structure](#file-structure)
	* [Server](#server)
	* [Client](#client)
* [Settings page](#settings-page)


The web contains several important concepts and this is the right place where we will explain them briefly.

<a name="file-structure"></a>
## File structure

The web repository is not that big, however we give you a brief overview of the most important files/directories.
<a name="server"></a>
### Server
* **config/app.php** - general application settings.
* **config/kerberos.php** - this file contains Kerberos.io specific parameters; the user credentials to sign in, etc.
* **app/Http/Controllers** - MVC controllers
* **app/Http/Repositories** -repositories are injected into the controller.
* **app/Providers/AppServiceProvider.php** - bind repositories to a specific interface - dependency injection.
* **routes/api.php** - contains all the URI endpoints for Ajax calls.
* **routes/web.php** - url routing for pages.

<a name="client"></a>
### Client

* **public/css/less** - LESS is used for the CSS.
* **public/js/app** - BackboneJS and RequireJS is used for building modular JS classes.
* **public/js/mustache** - Mustache is used for the client-side view rendering.
* **public/js/vendor** - This is where the bower extensions are installed.
* **public/capture** - A directory where images are written to by default.
* **public/bower.json** - The bower extensions used in the kerberos project.
* **public/Gruntfile.js** - We are using Grunt for our task manager.

<a name="settings-page"></a>
## Settings page

One of the most important reasons why the web exists is because it's a **GUI** to configure the machinery. The web contains a *settings* page where algorithms, expositors and much more can be configured. There is a basic setting view and an advanced settings view. The advanced view will convert the configuration files (from the machinery) into **HTML elements**, so e.g. when adding new algorithms or heuristics, the parameters will be shown on the settings page automatically. The only thing you need to do is to specify a type to each parameter. You will find an equivalent *view* with the same name in the **resources/views/controls** directory.
