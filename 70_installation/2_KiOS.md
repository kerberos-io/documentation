#KiOS

* [Download the .img](#download)
* [Flash the .img to a SD card](#flash)
* [Network configuration](#network)
* [Power on the Raspberry Pi](#poweron)
* [Access the Raspberry Pi with SSH](#access)

## Introduction 

[KiOS](https://github.com/kerberos-io/kios) (Kerberos.io Operating System) is a custom linux OS created for the Raspberry Pi by buildroot, which runs Kerberos.io out-of-the-box. KiOS is **installed like every other OS** for the Raspberry Pi, you need to flash the OS (.img) to a SD card and update your network configration; no manual compilation or horrible configurations. If you want to get Kerberos.io up and running at a short time frame, this is the **most simple** and **basic** installation procedure; it takes about 15-30 min to download, install and configure.

<iframe src="https://player.vimeo.com/video/164054497?autoplay=0&color=943633" style="width:100%; height: 400px;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<a name="download"></a>
## 1. Download the .img

All releases are stored on the KiOS [**Github repository**](https://github.com/kerberos-io/kios), each release contains several images (for every Raspberry Pi version a different image is created). It's important to download the correct image; installing an image for another Raspberry Pi version will not work. After downloading, make sure to unzip the release.

[![Download KiOS](2_kerberos-image.png)](https://github.com/kerberos-io/kios/releases)

<a name="flash"></a>
## 2. Flash the .img to a SD card

Ensure that you have inserted the SD card, that you wish to clone, into the SD card reader. If you dont have an internal SD card reader, you will need to plug in an external SD card reader via a USB socket.

### OSX

* Download and install [RPi-sd card builder v1.2](https://mega.co.nz/#!PZc2HTTQ!eD9dtFpoKnbZqP1hkvrv43_Pvc9xadMVxRP2K-M8n88).
* Run the app.
* Select the kios-x-y.img.
* Select your SD card.
* Insert your password, as the program will need administrator privileges.
* The system will start transferring the image to your SD card.
* A confirmation is shown that the transferred is completed and SD card unmounted.

### Windows

* Download and install [Win32DiskImager](http://sourceforge.net/projects/win32diskimager/files/latest/download).
* Select the KiOS image and the drive letter of the SD card.

### Linux

#### Format SD card

Select SD card and delete all partitions with gparted

	gparted

To format the SD card, enter the following command:

	sudo mkdosfs -F 16 -v /dev/sdb -I

#### Transfer image to your SD card

In Terminal, enter the following command ensuring that you identify the correct destination disc.

	sudo dd if="kios-x-y.img" of=/dev/sdb bs=2M

<a name="network"></a>
## 3. Network configuration

After the image has been transferred, you can plug the SD card in to your Raspberry Pi and everything will work magically. By default the KiOS image will require an ethernet connection and use DHCP to give you a dynamic IP-address. However if you want to have a **static IP-address** or/and use a **wireless connection**, you'll need to do a small configuration. Insert the SD card into your working station and open the SD card, you'll see two files **static_ip.conf** and **wireless.conf**.

### Static IP-address

Open and edit the file **static_ip.conf**.

	#####################################################################
	# Enter the IP-address you want to have, followed by the subnet mask
	# e.g. 192.168.0.10/24

	static_ip=""

	#####################################################################
	# Enter the Gateway and DNS, this will be your router in most cases
	# e.g. 192.168.0.1

	static_gw=""
	static_dns=""
    
### Wireless connection

Open and edit the file **wireless.conf**. Fill-in your WIFI credentials: **SSID** the name of your wireles network, and **PSK** the password of your wireless network.

	update_config=1
	ctrl_interface=/var/run/wpa_supplicant

	network={
    	scan_ssid=1
    	ssid=""
    	psk=""
    }

<a name="poweron"></a>
## 4. Power on the Raspberry Pi

When the installation is completed, you can **plug the SD card** into your Raspberry Pi. From this point KiOS will boot the kernel and re-partition your SD-card; Please note that the first time you boot KiOS it can take about 2 mins before the system is operational. When KiOS is ready you can **open your favorite browser** and type in the IP address of your Raspberry Pi. This will open the Kerberos.io login page, which you can **access** with the username: **root** and password: **root**.

![Login page kerberos.io webinterface](1_how-to-access.png)

<a name="access"></a>
## 5. Access the Raspberry Pi with SSH

To use Kerberos.io you only need access to the webinterface, however you can also **access the system with SSH**.

    Cedrics-Mac-mini:build cedricverst$ ssh root@192.168.0.12
    Welcome to kios-79e30bbb!
    [root@kios-79e30bbb ~]# 

Note that by default no root password is set, you can define a password in the **/data/etc/kios.conf** file.

    [root@kios-79e30bbb ~]# nano /data/etc/kios.conf
    [root@kios-79e30bbb ~]# reboot
    
Add your password, save the file and reboot the system. 
