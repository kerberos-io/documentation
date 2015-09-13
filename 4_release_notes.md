# Release notes

* [1.1.0](#1-1-0)
* [1.0.3](#1-0-3)
* [1.0.2](#1-0-2)
* [1.0.1](#1-0-1)
* [1.0.0](#1-0-0)

<a name="1-1-0"></a>
## 1.1.0

#### Web

* Support IP camera's with MJPEG stream. [#3](https://github.com/kerberos-io/web/issues/3)
* Introduce new API methods to configure the machinery, using basic auth. [#4](https://github.com/kerberos-io/web/issues/4)
* Optimization of loading image and dashboard page, completely redesigned the retrieval of images. [#5](https://github.com/kerberos-io/web/issues/5)
* Optimization of settings page. [#5](https://github.com/kerberos-io/web/issues/5)
* Timebar gradient only works in Chrome. [#6](https://github.com/kerberos-io/web/issues/6)
* Minor CSS fixes for responsive layout.

#### Machinery

* Flip/rotate option for capture devices. [#5](https://github.com/kerberos-io/machinery/issues/1)
* Support IP camera's with MJPEG stream. [#4](https://github.com/kerberos-io/machinery/issues/4)
* Introduced webhook io device. [#5](https://github.com/kerberos-io/machinery/issues/5)

#### Cloud

* Fixed problem when syncing a huge amount of images. [#1](https://github.com/kerberos-io/sync-s3/issues/1)

<a name="1-0-3"></a>
## 1.0.3

#### Web

* Optimize performance, new datastructure has been implemented.

#### Machinery

* Memory optimization.
* Removal of images older than 3 days have been removed.
* Start machinery automatically (delay has been removed).

#### Cloud

* Resolved file exist problem.

<a name="1-0-2"></a>
## 1.0.2

#### Web

* Timezone on settings page is also used for the webinterface.

#### Machinery

* Added extra timezones to timezone.xml.

<a name="1-0-1"></a>
## 1.0.1

#### Web

* Improved error handling (date search).

#### Machinery

* Improved memory cleanup.

<a name="1-0-0"></a>
## 1.0.0

#### First commit of Kerberos.io

* Camera support: **USBCamera** (V4L), **Raspberry Pi camera module** (MMAL).
* Conditions: **Enabled** (turn on/off Kerberos) and active **Time** per day.
* Algorithms: **Differential Images**.
* Heuristics: **Sequence**.
* Expositors: Select a **Hull** or **Rectangle**.
* Outputs: Write image to **Disk**, trigger an **GPIO** output pin and send a **TCP/IP packet**.
* Cloud: send your images to the **Kerberos.io cloud aplication**.