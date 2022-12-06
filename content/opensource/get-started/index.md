---
title: "Get started"
description: "What to expect from the Kerberos Open Source agent."
lead: "What to expect from the Kerberos Open Source agent."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  opensource:
    parent: "opensource"
weight: 202
toc: true
---

**_Kerberos Open Source is deprecated, please [use Kerberos Agent](/agent/first-things-first) instead._**

Once you've installed Kerberos Open Source, you will have access to the web application. This web application allows you to administrate the machinery.

## Welcome page

The first time you open a browser, and navigate to the web application (ip address of your device), you will land on the welcome page. This page will guide you through some basic steps and set simple configurations such as username and password.

{{< figure src="welcome.png" alt="The landing page after successfully installing Kerberos Opensource." caption="The landing page after successfully installing Kerberos Opensource." class="stretch">}}

## Login page

When you've finished the welcome page, you will be redirected to the login page from now one. Use the credentials you have defined during the configuration of the welcome page. By default the username is **root**, and the password is **root**.

{{< figure src="login.png" alt="After setting up the system you can proceed to login." caption="After setting up the system you can proceed to login." class="stretch">}}

## Dashboard

After you have signed in successfully, you will land on the dashboard page. This page will give you an overview of some simple statistics. Such as the the activity per day, per hour, etc.

{{< figure src="dashboard.png" alt="The dashboard gives you a high-level overview of what has been happening." caption="The dashboard gives you a high-level overview of what has been happening." class="stretch">}}

## Media

By selecting a specific day from the left navigation, or choosing the date picker on the top, you will be shown all the relevant media for that specific day. Both videos and images are listed and grouped (if they are within a specific time span). By scrolling down, more media items will be shown.

You can use the timeslider at the top of the page for browsing through the day. The white (no activity) to gray (low activity) to red (high activity), will give you an indications of the amount of recordings for that specific hour.

{{< figure src="media.png" alt="The media page gives an overview of your recordings (grouped into sequences) for that specific day." caption="The media page gives an overview of your recordings (grouped into sequences) for that specific day." class="stretch">}}

{{< figure src="media-detail.png" alt="By drilling down into a sequence, you will see all the related recordings." caption="By drilling down into a sequence, you will see all the related recordings." class="stretch">}}

## Settings

Before being able to record anything, you will need to specify your capture device. A capture device is what we call: a camera. This camera can be a USB, RPi or IP camera. By default the RPi camera is selected, so if you are planning to use a IP camera make sure to change it on the settings page.

{{< figure src="settings.png" alt="The settings page allows you to modify and tweak the camera and motion settings." caption="The settings page allows you to modify and tweak the camera and motion settings." class="stretch">}}

### Region of interest

Besides selecting the capture device, you will have different options to make the detection more intelligent, such as defining a regions of interest, or an activation timeline (when Kerberos Open Source should be active).

{{< figure src="region-of-interest.png" alt="The region of interest allows you to inspect a specific region of the camera." caption="The region of interest allows you to inspect a specific region of the camera." class="stretch">}}

### Storage

Storing your recordings on your device is fine, on the other hand you might want to make it available remotely. By giving your [Kerberos Hub](/hub/first-things-first) credentials in the storage section, your recordings will be synced to our cloud solution.

{{< figure src="hub-connection.png" alt="The region of interest allows you to inspect a specific region of the camera." caption="The region of interest allows you to inspect a specific region of the camera." class="stretch">}}

## System

This page will gave you overall information of Kerberos Open Source. It will give you information (logging) about the system, shows you some system information, the number of recordings on the system and more.

{{< figure src="system.png" alt="The system pages show you the current status of your agent." caption="The system pages show you the current status of your agent." class="stretch">}}
