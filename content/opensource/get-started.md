---
title: "Get started"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "opensource"
weight: 202
toc: true
---

Once you've installed Kerberos Open Source, you will have access to the web application. This web application allows you to administrate the machinery.

## Welcome page

The first time you open a browser, and navigate to the web application (ip address of your device), you will land on the welcome page. This page will guide you through some basic steps and set simple configurations such as username and password.

![OpenSource](../../public/images/opensource/kerberos-opensource-welcome.png)

## Login page

When you've finished the welcome page, you will be redirected to the login page from now one. Use the credentials you have defined during the configuration of the welcome page. By default the username is **root**, and the password is **root**.

![OpenSource](../../public/images/opensource/kerberos-opensource-login.png)

## Dashboard

After you have signed in successfully, you will land on the dashboard page. This page will give you an overview of some simple statistics. Such as the the activity per day, per hour, etc.

![OpenSource](../../public/images/opensource/kerberos-opensource-dashboard.png)

## Media

By selecting a specific day from the left navigation, or choosing the date picker on the top, you will be shown all the relevant media for that specific day. Both videos and images are listed and grouped (if they are within a specific time span). By scrolling down, more media items will be shown.

You can use the timeslider at the top of the page for browsing through the day. The white (no activity) to gray (low activity) to red (high activity), will give you an indications of the amount of recordings for that specific hour.

![OpenSource](../../public/images/opensource/kerberos-opensource-media.png)

![OpenSource](../../public/images/opensource/kerberos-opensource-media-detail.png)


## Settings

Before being able to record anything, you will need to specify your capture device. A capture device is what we call: a camera. This camera can be a USB, RPi or IP camera. By default the RPi camera is selected, so if you are planning to use a IP camera make sure to change it on the settings page.

![OpenSource](../../public/images/opensource/kerberos-opensource-settings.png)

### Region of interest

Besides selecting the capture device, you will have different options to make the detection more intelligent, such as defining a regions of interest, or an activation timeline (when Kerberos Open Source should be active).

![OpenSource](../../public/images/opensource/kerberos-opensource-motion.png)

### Storage

Storing your recordings on your device is fine, on the other hand you might want to make it available remotely. By giving your [Kerberos Cloud](/cloud) credentials in the storage section, your recordings will be synced to our cloud solution.

![OpenSource](../../public/images/opensource/kerberos-opensource-cloud.png)

## System

This page will gave you overall information of Kerberos Open Source. It will give you information (logging) about the system, shows you some system information, the number of recordings on the system and more.

![OpenSource](../../public/images/opensource/kerberos-opensource-system.png)