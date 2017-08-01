# First things first

The reason why you're on this page is because you want to know **how to install Kerberos.io** on your microcontroller, Docker, local working station, server or whatever Linux environment you prefer. The good news is that we have **different approaches** from basic to advanced; it depends on how you want to install it.

Before you decide which installation method you will use, it might be interesting to read about our [**best practices**](/best_practices) and the [**one vs multi camera support**](/strategy#one-vs-multi) discussion.

## Raspberry Pi

When deploying on the Raspberry Pi there are two possible solutions. You can use our custom OS, [**KiOS**](installation/KiOS) (Kerberos.io Operating System), which is production-ready or install it on an existing OS, [**Raspbian**](installation/Raspbian).

### KiOS

[KiOS](https://github.com/kerberos-io/kios) is a custom linux OS (created by Buildroot) which runs Kerberos.io out-of-the-box. This is the **most simple** and **basic** installation procedure. Note that with KiOS you don't have multiple camera support.

<div style="float:right;margin-top:-15px;"><a href="installation/KiOS" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Install KiOS</a></div>

### Raspbian

If you already have a Raspberry Pi running with Raspbian, you probably **don't want to reflash your SD card**. Therefore you can install and download the different parts of Kerberos.io (the machinery and the web) without the need for complex and time consuming compiling.

<div style="float:right;margin-top:-15px;"><a href="installation/Raspbian" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Install on Raspbian</a></div>

## Armbian supported boards

If you have <a target="_blank" href="https://www.armbian.com/download/">*an Armbian supported board**</a>, you can follow the Armbian installation to transform it into a surveillance system.

<div style="float:right;margin-top:-15px;"><a href="installation/Armbian" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Install on Armbian</a></div>

## Docker

A Docker image is available on the Docker Hub for **x86 machines**. By using docker-compose you can run Kerberos.io with a one-liner.

<div style="float:right;margin-top:-15px;"><a href="installation/Docker" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Run on Docker</a></div>

## Generic

You can install Kerberos.io on any Linux based OS like Ubuntu, Debian, Raspbian, OSX, etc. The only thing you need to do is to compile the machinery and install the web interface. Kerberos.io can't be compiled on a native Windows machine, if you want to use Kerberos.io on windows you should Docker.

<div style="float:right;margin-top:-15px;"><a href="installation/generic" style="color:#fff;background-color:#943633;border-radius:7px;padding:8px;">Compile yourself</a></div>
