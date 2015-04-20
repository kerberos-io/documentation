# Introduction

* [The web interface](#the-web-interface)
* [How does it work](#how-does-it-work)
* [Installation](#installation)
* [How to access](#how-to-access)

<a name="the-web-interface"></a>
## The web interface

Kerberos.web, the webinterface, allows you to configure the machinery and to view events that were detected by the machinery. You can use your mobile phone, tablet or desktop to view the images with the *responsive* and *intuitive* web interface.

<a name="how-does-it-work"></a>
## How does it work?

The webinterface is written in PHP using the extremely popular PHP Framework **Laravel**. It visualizes images, taken by the machinery, in a intuitive and responsive way. Besides a server-side framework, it also uses a client-side framework **Backbone** to create the dynamic behaviour. The webinterface includes the latest development tools, to increase development efficiency: RequireJS, bower, LESS, etc.

Besides visualization, the webinterface is also used to configure the machinery. On the settings page a user can select different options, for example a user could select a region where motion should be detected or could select a time range when motion could be detected, which algorithm is used, etc.

The webinterface can also be used to configure Kerberos with our [**cloud application**](/dev/addons/Cloud). The setup is very easy, you only need to create an account on our cloud application, request a key, and enter it in every webinterface you want to have synced.

<a name="installation"></a>
## Installation

If Kerberos is installed from the image, the webinterface will be pre-installed and nothing is left to do. If you want to install the webinterface from source, you will need to create a new webapplication on your webbrowser and transfer the webproject.

<a name="how-to-access"></a>
## How to access

You can access the webinterface by entering the ip address of the Raspberry Pi in your favorite browser. When the webapplication is loaded you will see a login page, on which you will need to enter your credentials. The default username and password is **root**. You are able to change this password by editing the **app/config/app.php** file.

![Login page kerberos.io webinterface](1_how-to-access.png)