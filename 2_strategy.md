# Strategy

In this section we'll explain the strategy of Kerberos.io in terms of goals, design/architecture and user experience.

## Mission

As you may have read on the [**Getting started**](/getting_started) page, Kerbers.io's goal is to be an easy to use video surveillance system which works on almost **every system/device**, with almost **every camera**, and that in just a few minutes.

Before Kerberos.io was designed or we even thought about it, we've found a lot of different surveillance solutions available in the market, of which **most of them are commercialized**. The free surveillance solutions, were mostly outdated and weren't synced with the bleeding edge technologies that we see nowadays.

We at Kerberos.io want to do something about it. Creating a video surveillance solution with bleeding edge technologies, available for everyone in this world, is our mission. With Kerberos.io we even want to **challenge commercial surveillance solutions**, by showing them how powerful an open source community is.

You only live once (YOLO), and therefore we want to give this world, with all the people living on it, something to **protect itself against all the bad things** strolling in our streets. We want to protect your families, properties and the things you care for. We **are a team** of hobbiest, professionals and people that want to move forward.

## Architecture

Here you'll find the thoughts we had, and still have, while developing and architecturing Kerberos.io. These are the results of what Kerberos.io nowadays is.

<a name="one-vs-multi"></a>
### The one vs multi camera support discussion

The most common question we get is the following: 

*I want to connect multiple cameras to Kerberos.io is it possible?*

The answer that we give is:

*Yes, it's possible because a lot of people asked for it, but we don't recommend it at all.*

So this might be a strange answer, but why don't we recommend it? The core idea of Kerberos.io is that it's easy to use, isolated and developed with clean code. We at Kerberos.io don't believe that a surveillance system which can configure **N** cameras is or can be intuitive for an end user, in terms of visualization and configuration. Besides user experience this will also **face its technical limitations when scaling** the solution with a lot of cameras; this can cause weird, unexpected and hard to debug deviations.

Kerberos.io **embraces the concept of isolation**. Every camera should have its own isolated environment, so a processing unit (server, Raspberry Pi, Docker container, etc) per camera. By using this concept you  have **the benefit of spreading risk**: if one processing unit goes down, the other ones stay operational. We think the best way to manage your cameras is to have **the ability to pin point** them, and **replace** them **without affecting any other** cameras.

On the other hand we **don't see a lot of benefits** (others than saving some money) **in practice** for connecting multiple cameras to a single processing unit. For example if you would be using USB cameras, it would be **rare to use them at exactly the same place**. When you're in this situation you probably need to pick a better place or position to install the camera and its processing unit. When running a lot of IP cameras, **running a Raspberry Pi** or other board, **for every single IP camera is overkill**, in this situation we strongly recommend to deploy Docker containers, so they are still virtually seperated processing units. Using **a single machine**, Raspberry Pi or other board **to manage all your IP cameras** without seperate virtual processing units (Docker) **is against the concept of isolation**.

This is **our vision about one vs multi camera support**, however we are aware that situations might exist where multi camera support is the best option, and that's also the reason why we've made it possible. You can use the Armbian, Raspbian or Docker installation to make this possible. For more information when to use which scenario, read the [**best practices**](/best_practices) page.

### Security

Security is Kerberos.io's number 1. When installing Kerberos.io, we **don't force** the system or user **to expose ports**. The idea is that Kerberos.io is used and **managed within a local network**, and **doesn't need internet access** to work properly. However a user can, at own risk, decide to make Kerberos.io public by enabling port forwarding on the router, so he or she is able to view the media remotely; a better option would be to setup a VPN tunnel, so the information is encrypted.

When you want to access your media online, we strongly [**recommend to use Kerberos.cloud**](https://cloud.kerberos.io) for making it public. With Kerberos.cloud we encrypt all your data and only make it available for a short period (minutes). Read more [**about Kerberos.cloud here**](/addons/Cloud).