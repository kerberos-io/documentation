---
title: "Release notes"
description: "Understand what's new in the Kerberos Open Source agent."
lead: "Understand what's new in the Kerberos Open Source agent."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  opensource:
    parent: "opensource"
weight: 205
toc: true
---

### 2.8.0

Aligned machinery, web and KiOS versions. Too many people were confused by the versioning.

#### Web

* Videos displayed on canvas were blocked in latest browsers.
* Disabled reboot and shutdown.
* Disabled upgrade process, use fwupdate shell command instead.

#### KiOS

* Major upgrade, solved many different problems (list to long); not possible to upgrade from 2.7.0 to 2.8.0.
* Updated firmware to latest Raspbian (raspberrypi-kernel_1.20180417-1).
* Support for the Raspberry Pi 4.

### 2.7.2

#### Machinery

* To optimise the cloud experience we've added a proxy.kerberos.io machine in between.
* We've changed the S3 storage scheme (class:ONEZONE_IA).

### 2.7.1

#### Machinery

* Resolved deadlock with livestreaming while restarting machinery.
* Revert logging library; enabled log rotating.

#### KiOS

* Updated firmware to latest Raspbian (raspberrypi-kernel_1.20180417-1).
* Resolved issue with WIFI on Raspberry Pi 3B+

### 2.7.0

#### Web

* Unique session cookie, which allows to open multiple web interfaces (e.g. when using docker).

#### Machinery

* Added live streaming feature for app.kerberos.io
* Upgraded logging library: log file can be max 5MB, and will rotate.
* Better logging for cloud uploads (failed information).

#### Docker

* No longer need docker-compose, we merged the web and machinery containers to [a single container](http://hub.docker.com/r/kerberos/kerberos).

#### KiOS

* Updated firmware to latest Raspbian.
* Support for the Raspberry Pi 3B+.

### 2.6.1

#### Web

* Solved issue with persisting login configuration. [#111](https://github.com/kerberos-io/web/issues/111)

#### Machinery

* Added Pushbullet. [#139](https://github.com/kerberos-io/machinery/pull/139)
* Cloud upload was not longer working (hotfix also in 2.6.0).

### 2.6.0

#### Web

* Add a cloud connection verification method. [#112](https://github.com/kerberos-io/web/issues/112)

#### Machinery

* Add background color timestamp. [#128](https://github.com/kerberos-io/machinery/issues/128)
* Send instanceId in AWS header when uploading to cloud (necessary for new cloud app).
* Better support for Chinese IP cameras.

#### Docker

* Bug: Autoremove old images/video within Docker Containers. [#104](https://github.com/kerberos-io/web/issues/104)

### 2.5.0

#### Web

* Added Chinese and Italian language.
* Resolved issue with INSTALLED=true.
* Make latest_sequence available with basic auth.  [#99](https://github.com/kerberos-io/web/issues/99)

#### Machinery

* Provide an IO service for publishing events to MQTT. [#89](https://github.com/kerberos-io/machinery/issues/89)
* Optimize recording with H264_OMX. [#83](https://github.com/kerberos-io/machinery/issues/83)
* Implement throttler for Io detections. [#96](https://github.com/kerberos-io/machinery/issues/96)
* SSL version 1.0.0 is no longer accessible in Raspbian. [#109](https://github.com/kerberos-io/machinery/issues/109)

### 2.4.2

#### Web

* Typo in french translation, causes the web interface crash.

#### Machinery

* Resolved major bug in livestream: memory leak in stream class. [#94](https://github.com/kerberos-io/machinery/issues/94)
* Capture health verification: check if the chosen capture device is still grabbing (and didn't stalled).
* Extra logging when recording with raspberry pi camera.
* Make sure the cloud upload is functioning properly, after an upload it's verified if the files really exist in the cloud.

### 2.4.1

#### Web

* Show warning when system is disabled. [#88](https://github.com/kerberos-io/web/issues/88).
* Hull selector in basic view not always working.

### 2.4.0

#### Ecosystem

* Enable/Disable force network mode.
* Enable/Disable auto removal media.

#### Web

* Upgrade from Laravel 4.2 to Laravel 5.4 [#70](https://github.com/kerberos-io/web/issues/70).
* Fix bug with heatmap radius slider [#84](https://github.com/kerberos-io/web/issues/84).
* Design tweaks toggle button (remove outline).
* Disabled possibility to timestamp video when using hardware acceleration.

#### Docker

* Fix SSL support [#4](https://github.com/kerberos-io/docker/issues/4).
* Auto removal if disk is full.

#### Machinery

* OpenMAX IL hardware encoding for Raspberry Pi camera. [#83](https://github.com/kerberos-io/machinery/issues/83)
  * Optimized live streaming.
  * Optimized h264 recording.
* Basic authentication for live streaming (username and password). [#80](https://github.com/kerberos-io/machinery/issues/80)

### 2.3.1

#### Machinery

* Update for kerberos.cloud: pushing content-type.
* Change default configurations.

### 2.3.0

#### Ecosystem

* Support for Raspberry Pi Zero W. [#8](https://github.com/kerberos-io/kios/issues/8)

### 2.2.1

#### Ecosystem

* Upgraded FFmpeg and libx264 on KiOS.

#### Web

* Add Bulgarian translation. [#81](https://github.com/kerberos-io/web/pull/81)

#### Machinery

* Bug: IoVideo crashes due to a memory leak. [#70](https://github.com/kerberos-io/machinery/issues/70)

### 2.2.0

#### Ecosystem

* Added support for Armbian.
* Raspbian: Async requests causes session corruption. [#78](https://github.com/kerberos-io/web/issues/78)

#### Web

* Bug: Issue format instance name. [#57](https://github.com/kerberos-io/web/issues/57)
* Redesign settings page (better UX). [#39](https://github.com/kerberos-io/web/issues/39)
* Possibility to edit password through web interface. [#63](https://github.com/kerberos-io/web/issues/63)
* Support for viewing videos.
* Update radius of heatmap.
* PHP7 support. [#60](https://github.com/kerberos-io/web/issues/60)
* Welcome/installation page. [#60](https://github.com/kerberos-io/web/issues/60)
* Translation updated. [#74](https://github.com/kerberos-io/web/issues/74)
* Privacy mode. [#54](https://github.com/kerberos-io/web/issues/54)

#### Machinery

* Output as video file. [#60](https://github.com/kerberos-io/machinery/issues/60)
* Bug: System hangs when a wrong IP camera url was defined. [#48](https://github.com/kerberos-io/machinery/issues/48)
* Run arbitrary script/program. [#31](https://github.com/kerberos-io/machinery/issues/31)
* Bug: Weird colors from RPi Camera. [#64](https://github.com/kerberos-io/machinery/issues/64)
* Upgrade to OpenCV 3.2.0.

### 2.1.0

#### Web

* Added PhotoSwipe for image overview (easier to browse through images). [#45](https://github.com/kerberos-io/web/issues/45)
* Added reboot and shutdown commands. [#46](https://github.com/kerberos-io/web/issues/46)
* Added logging view to system page. [#33](https://github.com/kerberos-io/web/issues/33)
* Added labels to check if machinery is running.
* Added error handling if web interface isn’t working properly.
* Fixed Heatmap.js fail to load by ad-blocker. [#42](https://github.com/kerberos-io/web/issues/42)
* Show additional information on the dashboard (streaming is opening or not) there is no data available.
* Settings page is now visible on mobile (+ changed icon).
* Fixed sorting of news articles.
* Removed links to assets in the cloud (.css files).
* Design: improved layout of login page, async loading of image view.

#### Machinery

* Added configurable streaming port and quality. [#41](https://github.com/kerberos-io/machinery/issues/41)
* Added new algorithm: Background subtraction.
* Added new heuristic: Counter (for object/people counting). [#42](https://github.com/kerberos-io/machinery/issues/42)
* Added video capture, which can be used for debugging purposes (replay a video fragment).
* It’s now possible to mark the images with a timestamp. [#36](https://github.com/kerberos-io/machinery/issues/36)
* Fixed blocking streaming socket. [#39](https://github.com/kerberos-io/machinery/issues/39)

#### Ecosystem

* Fix removal images if disk is almost full (wrong path was defined).
* Support for the Raspberry Pi Camera module v2.1. [#3](https://github.com/kerberos-io/kios/issues/3)
* Support for the Raspberry Pi Zero; updated kernel to latest Raspbian. [#3](https://github.com/kerberos-io/kios/issues/3)
* KiOS GUI installer.

### 2.0.0

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

#### Ecosystem

* Add support for Raspberry Pi 1, 2 and 3. [#1](https://github.com/kerberos-io/kios/issues/1)

### 1.1.0

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

### 1.0.3

#### Web

* Optimize performance, new datastructure has been implemented.

#### Machinery

* Memory optimization.
* Removal of images older than 3 days have been removed.
* Start machinery automatically (delay has been removed).

#### Cloud

* Resolved file exist problem.

### 1.0.2

#### Web

* Timezone on settings page is also used for the webinterface.

#### Machinery

* Added extra timezones to timezone.xml.

### 1.0.1

#### Web

* Improved error handling (date search).

#### Machinery

* Improved memory cleanup.

### 1.0.0

#### First commit of Kerberos.io

* Camera support: **USBCamera** (V4L), **Raspberry Pi camera module** (MMAL).
* Conditions: **Enabled** (turn on/off Kerberos) and active **Time** per day.
* Algorithms: **Differential Images**.
* Heuristics: **Sequence**.
* Expositors: Select a **Hull** or **Rectangle**.
* Outputs: Write image to **Disk**, trigger an **GPIO** output pin and send a **TCP/IP packet**.
* Cloud: send your images to the **Kerberos.io cloud aplication**.
