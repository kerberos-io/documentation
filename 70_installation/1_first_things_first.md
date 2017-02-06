#First things first

The reason why you're on this page is because you want to know how to install Kerberos.io on your microcontroller, local working station, server or whatever Linux machine you prefer. The good news is that we have **different approaches** from basic to advanced; it depends on how you want to install it.

## Raspberry Pi (ARM)

When deploying on the Raspberry Pi there are two possible solutions. You can use our custom OS, [**KiOS**](installation/KiOS) (Kerberos.io Operating System), which is production-ready or install it on an existing OS, [**Raspbian**](installation/Raspbian).

###KiOS

[KiOS](https://github.com/kerberos-io/kios) is a custom linux OS (created by buildroot) which runs Kerberos.io out-of-the-box. KiOS is **installed like every other OS** for the Raspberry Pi, you need to flash the OS (.img) to a SD card, update your network configration and you're up and running; no manual compilation or horrible configurations. This is the **most simple** and **basic** installation procedure.

<div style="float:right;margin-top:-15px;"><a href="installation/KiOS" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Install KiOS</a></div>

###Raspbian

If you already have a Raspberry Pi running with Raspbian, you probably don't want to reflash your SD-card. Therefore you can install the different parts of Kerberos.io (machinery and web) manual.

<div style="float:right;margin-top:-15px;"><a href="installation/Raspbian" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Install on Raspbian</a></div>

## Other

Kerberos.io can also be installed on a PC, Laptop or server. Similar to Raspbian, the different parts needs to be installed manually.

###Docker

A Docker image is available on the Docker Hub for the x86 architecture. By using docker-compose you can run Kerberos.io with a one-liner. 

<div style="float:right;margin-top:-15px;"><a href="installation/Docker" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Run on Docker</a></div>

###Advanced

This you will need to compile the machinery and install the web interface; It's a little bit more work.

<div style="float:right;margin-top:-15px;"><a href="installation/advanced" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Compile yourself</a></div>
