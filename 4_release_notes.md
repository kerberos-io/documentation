# Release notes

* [2.1.0](#2-1-0)
* [2.0.0](#2-0-0)
* [1.1.0](#1-1-0)
* [1.0.3](#1-0-3)
* [1.0.2](#1-0-2)
* [1.0.1](#1-0-1)
* [1.0.0](#1-0-0)

<a name="2-1-0"></a>
## 2.1.0

#### Web

* Added PhotoSwipe for image overview (easier to browse through images). [#24](https://github.com/kerberos-io/web/issues/24)
* Added reboot and shutdown commands. [#23](https://github.com/kerberos-io/web/issues/23)
* Added logging view to system page. [#20](https://github.com/kerberos-io/web/issues/20)
* Added labels to check if machinery is running. [#19](https://github.com/kerberos-io/web/issues/19)
* Added error handling if web interface isn’t working properly. [#2](https://github.com/kerberos-io/web/issues/2)
* Fixed Heatmap.js fail to load by ad-blocker. [#16](https://github.com/kerberos-io/web/issues/16)
* Show additional information on the dashboard (streaming is opening or not) there is no data available. [#16](https://github.com/kerberos-io/web/issues/16)
* Settings page is now visible on mobile (+ changed icon). [#16](https://github.com/kerberos-io/web/issues/16)
* Fixed sorting of news articles. [#16](https://github.com/kerberos-io/web/issues/16)
* Removed links to assets in the cloud (.css files). [#16](https://github.com/kerberos-io/web/issues/16)

#### Machinery

* Added configurable streaming port and quality. [#21](https://github.com/kerberos-io/machinery/issues/21)
* Added new algorithm: Background subtraction. [#35](https://github.com/kerberos-io/machinery/issues/35)
* Added new heuristic: Counter (for object/people counting). [#28](https://github.com/kerberos-io/machinery/issues/28)
* Added video capture, which can be used for debugging purposes (replay a video fragment).. [#26](https://github.com/kerberos-io/machinery/issues/26)
* It’s now possible to mark the images with a timestamp. [#24](https://github.com/kerberos-io/machinery/issues/24)
* Fixed blocking streaming socket. [#22](https://github.com/kerberos-io/machinery/issues/22)

#### Kios

* Fix removal images if disk is almost full (wrong path was defined). [#1](https://github.com/kerberos-io/kios/issues/1)


<a name="2-0-0"></a>
## 2.0.0

#### Web

* Add simple ON/OFF toggle. [#24](https://github.com/kerberos-io/web/issues/24)
* Added update strategy when using KiOS. [#23](https://github.com/kerberos-io/web/issues/23)
* A system page which shows system information. [#20](https://github.com/kerberos-io/web/issues/20)
* Heatmap on dashboard page [#19](https://github.com/kerberos-io/web/issues/19)
* Added live stream view on the dashboard page [#2](https://github.com/kerberos-io/web/issues/2)
* Fixed bug cloud syncing [#16](https://github.com/kerberos-io/web/issues/16)
* Fixed broken settings page when space in instane name [#16](https://github.com/kerberos-io/web/issues/16)

#### Machinery

* RTSP support for IP-camera's. [#21](https://github.com/kerberos-io/machinery/issues/21)
* Verbose logging. [#35](https://github.com/kerberos-io/machinery/issues/35)
* IO-devices are executed in a seperate thread. [#28](https://github.com/kerberos-io/machinery/issues/28)
* Live streaming (MJPEG). [#26](https://github.com/kerberos-io/machinery/issues/26)
* Execute multiple instances on a machine. [#24](https://github.com/kerberos-io/machinery/issues/24)
* Override config by arguments. [#22](https://github.com/kerberos-io/machinery/issues/22)
* Move S3 upload to machinery and remove sync-s3 repository. [#16](https://github.com/kerberos-io/machinery/issues/16)

#### Docker

* Added Docker image (x86_x64) to Docker Hub.

#### Kios

* Add support for Raspberry Pi 1, 2 and 3. [#1](https://github.com/kerberos-io/kios/issues/1)

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