---
title: "Analytics"
description: "Various types of video analytics are calculated."
lead: "Various types of video analytics are calculated."
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

Kerberos Hub provides insights through video analytics. Recordings being uploaded to Kerberos Vault are triggering [the Kerberos Hub pipeline](/hub/pipeline/). Inside the pipeline, several computations are being done: sequencing, alerting and video analytics.  

Having said that, please note that [you can build your own pipeline by](/vault/machine-learning/) integrating with Kerberos Vault. For example you could create your own cat/dog detector and inject your own machine learning algorithms, or interfere with your most favourable data sciene solution stack.

What can you expect from video analytis in Kerberos Hub? It provides two types of analytics: CPU  and GPU enabled computations.

## CPU 

These analytics are running on a CPU, and don't require a GPU in one of your nodes, as they are rather simple analytics. Following calculations or computer vision algorithms are executed in the pipeline. This list is still growing over time, as the Kerberos.io team is advancing the Kerberos Hub solution day by day.

### Thumbnail

Creating thumbnails might not bring any insightful analytics, but it helps to get already a sneak peek or context of the recording before it is downloaded from your Kerberos Vault. This also saves some bandwidth as videos do not need to be preloaded.

{{< figure src="thumbnail.png" alt="Thumbnail is the first image of the recording." class="stretch">}}

A simple scale down function is being used and converted to a base64 encoded image. This base64 object is stored in the Kerberos Hub database.

### Dominant color

A color histogram is created from the first frame of the recording. The most dominant color can be used for looking for a specific object.

{{< figure src="dominantcolor.png" alt="Thumbnail is the first image of the recording." class="stretch">}}

### Counting

After object detection and tracking is calculated, the results are used in the context of counting. In Kerberos Hub one or more counting lines can be configured. The service will calculate if specific trajects of objects are crossing one or more lines.

## GPU 

More complex analytics are calculated using a GPU. Specific machine learning models are loaded inside the GPU memory and predict specific objects, patterns and more.

### Object detection and tracking

The classification service executes a YOLOv3 algorithm on the recorded media. Detected objects are located in the media, and a tracker is following the positions the object is moving. 

{{< figure src="classification.png" alt="A pedestrian detected and tracked." class="stretch">}}

This GPU workload is not available in the Kerberos Hub pipeline by default, and requires to be installed seperately. More information about the installation of the `hub-objecttracker` can be found on our [Github page](https://github.com/kerberos-io/hub-objecttracker).