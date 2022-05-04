---
title: "ONVIF"
description: "Communicate with your agents through MQTT and ONVIF."
lead: "Communicate with your agents through MQTT and ONVIF."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  hub:
    parent: "hub"
weight: 305
toc: true
---

When adding and deploying your Kerberos Agents you have [the option to enable ONVIF](/factory/getting-started/#adding-a-new-deployment) integration. Once enabled and connected properly to your camera using ONVIF, you can leverage specific functions and features of the camera, such as as PTZ, Streaming Profiles, etc. Which features are available depends on the camera you are using, and [which ONVIF profiles](https://www.onvif.org/profiles) are supported.

When connecting your Kerberos Agents to Kerberos Hub, you can start leveraging those capabilities. This means that certain ONVIF actions are forwarded from Kerberos Hub to the (edge deployed) Kerberos Agent. The forwarding is happening through the MQTT bidirectional connection you have setup.

![MQTT Kerberos Hub architecture](mqtt-kerberos-hub.svg)

## PTZ

One of the key elements of ONVIF is the ability to control PTZ or use and configure presets, without using the builtin controls and application of the camera provider. By leveraging the ONVIF protocol providers such as Kerberos.io can leverage capabilities such as PTZ in its own application and user interface. 

This brings several of advantages, such as an unified experience independent of the camera brand, which usually end up in more scalable and well designed user interfaces. At least that's what our mission is at Kerberos.io.

When browsing to the livestream page of a specific camera or groups of camera, you will see some of the PTZ functions visualised.

![PTZ on Kerberos Hub](ptz.gif)