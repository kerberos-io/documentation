# Best practices

Kerberos.io can be **used for many different purposes**: nanny cam, baby monitor, site monitor, parking monitor, pet monitor, vacation monitor, people counting, real-time monitoring, recording, and the list goes on. Kerberos.io also gives you **a lot of possible ways to install it** on the devices your prefer. You can install it on your local Linux system e.g. Ubuntu, Raspbian, Armbian, Docker and by using our own OS, named KiOS.

Having all these different scenarios, ways to install and possible combinations, **it might be hard to find the best setup** for your specific situation. On this page we will discuss a couple of scenarios, and which solution/setup is the best pratice/match for each one of them.

One of the strategies Kerberos.io follows is **the concept of isolation**. Read more about it on the [**strategy page**](/strategy) and the [**one vs multi camera support**](/strategy#one-vs-multi) discussion for a complete understanding of the best practices.

## IP cameras

This is the most common scenario. Nowadays if you want to buy a camera, there is a 90% chance that it will be an IP camera.

IP cameras have outnumbered the video camera industry, they come with many different flavours and technologies (e.g. ONVIF). Typically a user will **buy one or more IP cameras**, **position them** at various places at home or work, and **install a video surveillance system** to manage them; e.g. Kerberos.io.

### Desire

What we often see is that users ask for, or desire to have, one single application where they can access and manage all their different IP cameras. This desire may look obvious at first sight, but has **limitations on the long run**.

Many video surveillance solutions, other than Kerberos.io, uses the approach previously described. However this approach is against the Kerberos.io strategy/philosophy, read more about it on the [**strategy page**](/strategy) and the [**one vs multi camera support**](/strategy#one-vs-multi) discussion.

### Best practice

When you have an enterprise environment, or just have a lot of IP cameras (>2), you [**should consider to use Docker**](/installation/Multi-camera/Docker). When using **Kerberos.io with Docker**, you create an individual virtual processing units, **a Docker container**, for each camera.

By using this approach the management of your cameras is transparant and you have the ability to pin point them by an IP address (or port). Next to that you will have **a highly scalable solution**, when new cameras are installed you create new containers for each camera. When processing a lot of cameras you can eventually use **Docker swarm** to load balance containers over multiple systems.

### Dont's

What we often see is that users want to use a single Raspberry Pi or other board, to manage multiple IP cameras. Though this is possible with the Raspbian or Armbian installation, we don't recommend this when processing a lot of IP cameras (>2), due to:

* limited resources (CPU and RAM),
* visualization and configuration in the web interface is not intuitive,
* and unreliably for network drops.

When using only one or two IP cameras you can consider to use a multi camera approach with Raspbian or Armbian. In this case a Docker setup can be overkill.

## Local cameras (e.g. USB camera)

One of the goals of Kerberos.io is to be a cheap and ecologic video surveillance solution. With Kerberos.io you can **reuse your old USB cameras**, and combine them with a board (Raspberry Pi or other) to use them as a professional surveillance system.

### Desire

Just the like the IP camera scenario, users want to have a single application where they can manage all their cameras. The same philosophy applies here, Kerberos.io recommends the concept of **isolation**. Though with USB cameras it might be more useful to connect multiple cameras as they require a machine or board to process them; the processing unit needs to be at the same place of the camera. You **don't have the possibility to use Docker** when using USB cameras.

### Best practice

If you consider to connect multiple local cameras to a processing unit (server, Raspberry Pi or other board), you should take into account following points:

* Did you positioned your cameras properly?
* Has the second (or other) camera a lot of value? Maybe can you give it a better position somewhere else.

In some cases a second or third camera can be of a lot of value e.g. a 360° view, but most of the time this is totally overkill and you should better use it elsewhere.
