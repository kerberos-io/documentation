# Getting started

* [Why Kerberos.io](#why-kerberos-io)
* [What is Kerberos.io](#what-is-kerberos-io)
* [How does it work](#how-does-it-work)
* [Features](#features)
* [Installation](#installation)

<a name="why-kerberos-io"></a>
## Why Kerberos.io?

As burgalary is very common, we believe that video surveillance is a **trivial tool** in our daily lifes which helps us to **feel** a little bit more **secure**. Responding to this need, a lot of companies have started developing their own video surveillance software in the past few years.

Nowadays we have a myriad of **expensive** camera's, recorders and software solutions which are mainly **outdated** and **difficult** to install and use. Kerberos.io's goal is to solve these problems and to provide every human being in this world to have its own **ecological**, **affordable**, **easy-to-use** and **innovative** surveillance solution. Read more about [**our strategy here**](/strategy).

<a name="what-is-kerberos-io"></a>
## What's Kerberos.io?

Kerberos.io is a **low-budget** video surveillance solution, that uses computer vision algorithms to detect changes, and that can trigger other devices. Kerberos.io is open source so everyone can customize the source code to its needs and share it with the community under the [**CC-NC-ND license model**](/license). When deployed on the Raspberry Pi or any other board, it has a **green footprint** and it's **easy to install**; you only need to transfer the [**Kerberos.io OS (KIOS)**](/installation/KiOS) to your SD card and that's it.

<iframe src="https://player.vimeo.com/video/163975947?autoplay=0&color=943633" style="width:100%; height: 400px;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<a name="how-does-it-work"></a>
## How does it work?

When installed Kerberos.io on a Raspberry Pi or any other Linux device, two applications are available: the [**machinery**](https://github.com/kerberos-io/machinery) and the [**web**](https://github.com/kerberos-io/web).

The machinery is responsible for the processing. It's **an image processing framework** which takes images from the type of camera (USB-, IP- or RPi-camera) you've configured in the configuration files and executes one ore more algorithms and post-processes (e.g. save a snapshot). The configuration files allow you to define the type of camera, post-processes, conditions and much more; it's **highly configurable**. It's important to note that the machinery, out-of-the-box, can handle only one camera at a time.

The web is responsible for the visualization. It's a **GUI** which helps the user to find activity at a specific period, configure the machinery, view a live stream, see system information and much more. It's important to note that the machinery can work without the web, however we don't recommend this.

The cloud is an extra service, which is available by default but is not required. The main goal of this service is **to view your activity from everywhere** in the world. By [**subscribing to a plan**](https://cloud.kerberos.io), you can sync your images to the cloud application. To have a more detailed explanation go to the [**machinery**](/machinery/introduction) and [**web**](/web/introduction) pages.

![How does it work](1_how_does_it_work.png)

<a name="features"></a>
## Features

Kerberos.io comes with **a bunch of features**, below you can find a short list of the most important ones.

 * Full range camera support (**USB**, **Raspberry Pi** v1.3 and v2.1, and **IP cameras** which support a RTSP or MJPEG stream).
 * **Hardware encoding** when using the Raspberry Pi Camera.
 * Constraints to make detection more intelligent (time interval, regions, etc).
 * Ability to save snapshots and **video recording** and execute/trigger a bash script, webhooks or GPIO pin.
 * **Live streaming** (MJPEG) on the web or with another program like VLC or IP camera viewer; ability to secure with Basic Authentication.
 * **Heatmap** and latest sequence of activity.
 * Fluent and **responsive overview** (Smartphone, Tablet and PC) of snapshots by day and hour.
 * System information (CPU, disk, network, etc).
 * Use [**Kerberos.cloud**](https://cloud.kerberos.io) to view your activity from anywhere in the world.
 * **Multiple cameras** with Docker or Raspbian; read more about the [**best practices**](/best_practices).
 * **REST API** to control Kerberos.io from your custom solution/program.
 * **Cross-browser support**: IE, Chrome, Safari, Firefox.

<a name="installation"></a>
## Installation

Installing <b>Kerberos.io</b> to your IoT device, has never been so easy. By using our <b>cross-platform</b> installer, you can run a <b>fully configured</b> video surveillance system within <b>3 minutes</b>. Indeed, we also think that's awesome!

<a href="/installation/KiOS" alt="install kios">
<img src="/images/kios-install.gif" style="border-radius: 0; margin: 0 0 10px 0; width: 100%;"/>
</a>

By using the KiOS installer, you'll get <b>an easy to use GUI</b> which allows you to configure and **flash KiOS to your SD card**. Just download the installer, select a version, specify your network configurations, select your SD card and press the flash button; **it can't be easier**. If you **don't want to reflash you SD card**, you can run Kerberos.io on your existing [**Raspbian**](/installation/Raspbian) or [**Armbian**](/installation/armbian) installation, or if you like containers you can use [**Docker**](/installation/Docker).
