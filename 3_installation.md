# Installation

* [Install from image](#install-from-image)
	* [Download the image](#download-the-image)
	* [Insert your SD card](#insert-your-sd-card)
	* [Transfer image](#transfer-image)
		* [OSX: transfer image](#osx-transfer-image)
		* [Windows: transfer image](#windows-transfer-image)
		* [Linux: transfer image with terminal](#transfer-image-with-terminal-with-linux)
	* [Setup WIFI connection](#setup-wifi-connection)
	* [Power on the Raspberry Pi](#power-on-raspberry-pi)
	* [Access the Raspberry Pi with SSH](#access-raspberry-pi)
* [Install from source](#install-from-source)

Kerberos is **easy to install**, you just have to copy the Kerberos image to your SD card, plug the SD card into your Raspberry Pi and that's it. It can also be installed on other devices than the Raspberry Pi; for development or production. Therefore you will need to compile the machinery from source and install the webinterface with your favorite webserver.

<a name="install-from-image"></a>
## Install from image

If you want to use Kerberos.io **as a service**, this would be the preferred way. Kerberos is provided as an image, a pre-installed operating system. The only thing you have to do to make things work, is to transfer the image to your SD card. After transferring you can just plug the SD card into your Raspberry Pi and kerberos will work; isn't that great! 

<a name="download-the-image"></a>
### 1. Download the image (v1.1.0)

First you will need to download the Kerberos image; click on the image below. The Kerberos.io image contains a Linux operating system, built on Arch Linux. The image has the machinery and webinterface installed, and ofcourse all the dependencies Kerberos needs. With this image you just have to plugin the SD card in your Raspberry Pi and you're done. 

#### Raspberry Pi Model 2 (Recommended)

The Raspberry Pi 2 is the successor to the Raspberry Pi. It builds upon the original model B+ upgrading to 1 GB of RAM, and replacing the aged ARMv6l single-core with an ARMv7l Cortex-A7 quad-core.

[![Kerberos.io image](3_kerberos-image.png)](https://drive.google.com/file/d/0B-2b4NYY_1xuOTU5X1l0cEhseWs/view?usp=sharing)
    
#### Raspberry Pi Model A, A+, B and B+

The Raspberry Pi is a credit-card sized computer that plugs into your TV and a keyboard. It’s a capable little PC which can be used for many of the things that your desktop PC does, like spreadsheets, word-processing and games. It also plays high-definition video.

[![Kerberos.io image](3_kerberos-image.png)](https://drive.google.com/file/d/0B-2b4NYY_1xuVnE5OXAyWmpUNU0/view?usp=sharing)
   
<a name="insert-your-sd-card"></a>
### 2. Insert your SD Card

Ensure that you have inserted the SD card, that you wish to clone, into the SD card reader. If your PC/Mac does'nt have an internal SD card reader, you will need to plug in an external SD card reader via a USB socket.

<a name="transfer-image"></a>
<a name="osx-transfer-image"></a>
### 3. OSX: transfer image

*	Download the .dmg file (RPi-sd card builder v1.2)

[![RPi logo](3_rpi-logo-cloner.png)](https://mega.co.nz/#!PZc2HTTQ!eD9dtFpoKnbZqP1hkvrv43_Pvc9xadMVxRP2K-M8n88)

* Run the app
* Select the operating system distributions (.img file)
* You will prompt with this. After you connect your SD card press continue.
* Now you have to select your SD card.
* Now the program will need administrator privileges. insert your password
* Confirm that your SD card has been unmounted.

<a name="windows-transfer-image"></a>
### 3. Windows: transfer image

*	Download and install the [Win32DiskImager](http://sourceforge.net/projects/win32diskimager/files/latest/download).
*	Select the image file you've downloaded earlier and the drive letter of the SD card.

<a name="transfer-image-with-terminal-linux"></a>
### 3. Linux: transfer image with terminal

#### Format SD card

Select SD card and delete all partitions with gparted

	gparted

To format the SD card, enter the following command:

	sudo mkdosfs -F 16 -v /dev/sdb -I

#### Transfer image to your SD card

In Terminal, enter the following command ensuring that you identify the correct destination disc.

	sudo dd if="kerberos-io-armvx-4GB-vy.img" of=/dev/sdb bs=2M

<a name="setup-wifi-connection"></a>
### 4. Setup WIFI connection

After you've transferred the image, you can edit the **wireless.conf** file on the SD card. You will see a similar config like below, edit the ESSID property with the name of your WIFI connection and the property Key with the WIFI password. **Don't forget to match the Address, Gateway and DNS fields, with your internal network**.

    Description='A simple WPA encrypted wireless connection'
    Interface=wlan0
    Connection=wireless

    ##################
    # WIFI credentials

    Security=wpa
    ESSID='YOUR-WIFI-SSID'
    Key='YOUR-WIFI-PASSWORD'

    #####################
    # Static IP address
    # (Don't forget to add the subnet at the end of the Address e.g. /24)

    Address='192.168.0.11/24'
    Gateway='192.168.0.1'
    DNS=('192.168.0.1')
    IP=static

    # Uncomment this if your ssid is hidden
    #Hidden=yes

<a name="power-on-raspberry-pi"></a>
### 5. Power on the Raspberry Pi

When the installation is completed, you can **plug the SD card** into your Raspberry Pi, and that's all. From this point you need to **figure out the IP address** of your Raspberry Pi. If you found your IP address (dynamic or static), you can **open your favorite browser** and type in the IP address. This will open the Kerberos login page, which you can **access** with the username: **root** and password: **root**.

![Login page kerberos.io webinterface](1_how-to-access.png)

<a name="access-raspberry-pi"></a>
### 6. Access the Raspberry Pi with SSH

To use Kerberos you only need access to the webinterface, however you can also **[access the system with SSH**.

    macbook:~ cedricverstraeten$ ssh root@ 192.168.0.11
    root@ 192.168.0.11's password: 

You can sign in with the default Arch Linux credentials: username "**root**" and password "**root**".

<a name="install-from-source"></a>
## Install from source

This will be the procedure if you want to contribute to Kerberos or if you want to use Kerberos on your local machine. To install Kerberos from source; you will need to **[compile the machinery](/machinery/installation)** from source and **[import the webinterface](/web/installation)** into your favorite webserver.
