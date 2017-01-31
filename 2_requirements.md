# Requirements

## Which hardware do I need?

Kerberos.io runs on every machine but its main goal is to run on a **Raspberry Pi**. We provide multiple ways (KIOS, Raspbian, Armbian, Docker, etc) to install Kerberos.io on the device your prefer. If you want to run Kerberos.io on a Raspberry Pi or any other board you'll first need to buy some hardware.

### Raspberry Pi 

As said, you can run Kerberos.io **on every Linux based machine**, however we recommend to run Kerberos.io on a **Raspberry Pi**, as it is a low-budget microcontroller which can you buy in almost every (online) electronic shop. 

To simplify the lives of our Raspberry Pi users, Kerberos.io comes with a custom ARM OS called [**KIOS**](installation/KiOS) (Kerberos.io Operating System), which you can deploy to your Raspberry Pi in just a few minutes. Kerberos.io supports **all Raspberry Pi versions** (1, 2, 3 and Zero). 

![Raspberry Pi Model A](2_raspberry-pi-a.png)

### What about other boards?

Kerberos.io can also be installed on other boards by following the [**Armbian**](/installation/armbian) installation. This is a short list of microcontrollers which work properly:

 * PCDuino3 Nano (Allwinner A20)
 * Orange Pi + (Allwinner H3)

### SD card

If you want to use your Raspberry Pi, you will need to have a SD card, on which an OS will be installed. Therefore you will need a **2GB or bigger SD card**.

![4GB SD card](2_sandisk_4gb_sd_card.png)

### Power supply 

You will need to have a **micro USB 5V** charger, to give the Raspberry Pi some juice.

![Micro USB 5V charger](2_micro-usb-5V-charger.png)

### Camera

Kerberos.io works with the full range of camera's. You can use an **USB-**, **IP-** or the **Raspberry Pi camera (v1.3 and v2.1)**. If you want to use an IP camera, we recommend to use the RTSP connection if available; note that it's possible that cheap IP cameras will not work properly.

![Raspberry Pi Camera Module](2_raspberry-camera-module.png)


### Optional 

You can use a **WIFI dongle** instead of an ethernet cable, but this is not required. We recommend the **Edimax** ew-7811un WIFI dongle; this is not necessary for the Raspberry Pi 3 as this is built-in.

![Edimax WIFI dongle](2_edimax-wifi-dongle.png)