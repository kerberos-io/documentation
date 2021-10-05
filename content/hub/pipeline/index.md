---
title: "Pipeline"
description: "A series of microservices to bring the scale you are looking for."
lead: "A series of microservices to bring the scale you are looking for."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  hub:
    parent: "hub"
weight: 304
toc: true
---
 
Kerberos Hub leverages a pipeline of microservices to execute specific tasks. Each time a recording is uploaded to Kerberos Vault, it will forward an event to Kerberos Hub, which on its turn will activate a pipeline consisting of a series of  microservices.

{{< figure src="hub-pipeline.svg" alt="Pipelines to scale the processing." caption="Pipelines to scale the processing." class="stretch">}}

Each microservice in the Kerberos Hub pipeline will be responsible for a specific action or process. The pipeline acts as an event mesh, that sends messages from one microservice to the other in an asynchronous matter. Important to note is that it is possible to customize the pipeline and bring you own microservices inside the pipeline; using the programming languages you prefer.

# How it works

Each time a recording is being uploaded to Kerberos Vault, and event is sent to Kerberos Hub, and a pipeline is started for that specific recording; and thus event. The pipeline will start sending messages towards to the different microservices in sequence and/or in parallel, depending on how the microservices and pipeline is configured. Once the pipeline is executed, and all related microservices are finished, the pipeline is done, and it will go in idle mode until the next event is received.

The distribution of messages is done through a Kafka broker and the concept of Kafka topics. Each microservice consume messages of its own Kafka topic. As soon as a microservice receives a message on its topic, it knows it has to do something, and execute the action he is responsible for. By having Kafka and the concept of topics we have a loosely coupled event architecture that we can easily extend with additional function and features (microservices).

The different kafka topics and microservices we have in place are.

- Orchestrator - `kcloud-event-queue`
- Monitoring - `kcloud-monitor-queue`
- Sequencer - `kcloud-sequence-queue`
- Analyser - `kcloud-analysis-queue`
- Throttler - `kcloud-throttler-queue`
- Notification - `kcloud-notification-queue`

## Orchestrator 

> kcloud-event-queue

A pipeline starts with the first microservice being executed, that is the event microservice, listening to the `kcloud-event-queue` topic. The event microservice is the dispatcher service that forwards messages back and forth. It reads the to be processed microservices, and forwards the message to the next microservice, so it can be consumed. Once the microservice is completed it will send the message back to the event microservice.

## Monitoring

> kcloud-monitor-queue

The first microservice in the pipeline is the monitoring microservice, this will verify a couple of things and store some metadata. It will keep track of

- the MB of data being stored,
- the latest event for each Kerberos Agent,
- if an account has to be disabled due to reaching its upload limit
- etc.

The monitoring microservice is like the name said, a monitoring step in the entire pipeline, it will keep track of some analytics that are useful to be shown in the Kerberos Hub application.

## Sequencer

> kcloud-sequence-queue

This is where the magic happens. The sequencer is responsible for grouping recordings that belong to a close time window, it makes it possible to handle individual events as group of events, so that it can be more easily queried.

The sequencer microservice is build in such a way that it can group events, even if they are delayed, or the connection from the Kerberos Agent was interrupted for some time. The sequencer will be able to recover and properly sequence in whatever situation.

## Analyser

> kcloud-analysis-queue

As recordings are sequenced the analyser will take care of some post-processing. Additional computations and algorithms are being executed in parallel on the uploaded recordings such as:

- Dominant color
- thumbnail,
- machine learning and object tracking, etc.

Once the analyser is hit, it will send out several messages in parallel to the different microservices to compute the previously mentioned requests. As soon as results come in, asynchronously, the analysis step is completed, and the next microservice is triggered.

## Throttler

> kcloud-throttler-queue

Messages that reach the throttler microservice will go in a throttling function, that controls the number of events going out. The reason of throttling is to limit the number of message being sent to the next microservice. Easy said, it is a way to limit and protect it against a huge amount of incoming data.

Let's say you have a lot of recordings being generated at once, this would result in a lot of messages being generated. When this happens you do not want to send notifications or other actions for every single message, you rather have a single message for all of them. This is what the throttler is for.

## Notification

> kcloud-notification-queue

After the throttler has been executed, it's time to send out alerts and notifications which you have setup. Depending on your alert settings, the notification microservice will send out a specific notification to your selected channels.
