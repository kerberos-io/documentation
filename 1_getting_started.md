# Getting started

* [What is Kerberos.io](#what-is-kerberos-io)
* [How does it work](#how-does-it-work)
* [Installation](#installation)
* [Contribute](#contribute)

## Let's get started

In the video below you get a quick overview of how Kerberos works and how you can configure it. The video isn't technical but explains the different features Kerberos offers you.

<iframe src="https://player.vimeo.com/video/121532472?autoplay=0&color=943633" style="width:100%; height: 400px;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<a name="what-is-kerberos-io"></a>
## What's Kerberos.io?

Kerberos is a low-budget surveillance solution created for the **Rapsberry Pi**. Kerberos is open source, so you and others, can customize the source code to your needs and share it. It has a *low-energy* footprint when deploying on the Raspberry Pi and it's *easy to install*, you only need to transfer the image to your SD card and you're done.

Use your mobile phone, tablet or PC to keep an eye on your property. View the activity with our *responsive* and *user-friendly* web interface. Look at the dashboard to get a graphical overview of the past days. *Multiple* Kerberos *instances* can be installed and can be viewed with [only one web interface](/addons/Cloud).

<a name="how-does-it-work"></a>
## How does it work?

Kerberos is devided into two parts: the **machinery** (Back end, C++) and the **webinterface** (Front end, PHP). The machinery is responsible for the image processing and the webinterface is used to configure the machinery and to view the events that were detected by the machinery. Both parts are installed on the device, in most cases the Raspberry Pi. The machinery can trigger multiple output devices when an event occurred; it can trigger a GPIO pin, save an image to disk or send a TCP packet.

<a name="installation"></a>
## Installation

Kerberos is **easy to install**, you just have to copy the kerberos image to your SD card, plug it into your Raspberry Pi and that's it. Kerberos can be installed on other devices than the Raspberry Pi; for development or production. Therefore you will need to compile the machinery yourself and install the webinterface with your favorite webserver; nginx, apache, etc.

<a name="contribute"></a>
## Contribute

Want to contribute? You're a front end designer, user experience guru, an ambitious programmer, or a Ph.D. in Computer Vision who wants to take kerberos.io to the next level? Then we like to welcome you to the community. Contributions are taken very seriously, besides your code, testing and documentation are very important!