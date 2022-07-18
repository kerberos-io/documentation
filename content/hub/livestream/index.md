---
title: "Livestream"
description: "Streaming from Kerberos Agent to Kerberos Hub"
lead: "Streaming from Kerberos Agent to Kerberos Hub"
date: 2022-07-02T12:50:00+00:00
lastmod: 2022-07-02T12:50:00+00:00
draft: false
images: []
menu:
  hub:
    parent: "hub"
weight: 305
toc: true
---

Kerberos Hub allows you to visualise livestreams from your Kerberos Agents. A low and high resolution is made available through the Kerberos Hub portal. 

{{< figure src="hub-livestream.gif" alt="Livestreaming" caption="Livestreaming" class="stretch">}}

The process of sharing livestreams from your Kerberos Agent to Kerberos Hub is done through the concept of MQTT. 


### Low resolution

The low resolution livestream is a snapshot, JPEG, shared over MQTT (TCP) and visualised in the Kerberos Hub using secure websockets (WSS). No port forwarding needed to be enabled.

### High definition

The high definition livestream is made possible through WebRTC. The full resolution and FPS is sent through using the WebRTC technology. WebRTC has NAT traversal capabilities by using STUN and TURN servers, so no need for port forwarding as well.
