#Armbian

The instructions below are for Installing the machinery module of 
Kerberos.io 2.1.0 on Armbian. Resolutions of 1600x1200 (Logitech 
QuickCam Pro 9000) and 1280x960 (Logitech C270) were successfully 
tested. Both cameras are USB camera’s and UVC compatible. In general any 
UVC compatible camera should work. The Web module of Kerberos.io is also 
needed but can be installed using the instructions of the Kerberos.io 
website. The link is provided below. The Kerberos.io website contains 
excellent and detailed information on all the options of Kerberos.io. So 
please refer to that for further configuring and tweaking after installing.

The instructions are pretty straight forward and differ in fact only 
very little from the instructions already on the Kerberos.io website. 
One of the differences between the Raspbian and Armbian distribution is 
(how obvious) that Armbian does not contain the Raspberry Pi camera 
libraries. So read carefully in the instructions below how to obtain the 
needed libraries from a Raspbian Raspberry Pi image. I guess that 
installing the Raspberry Pi .deb file from Kerberos.io website also 
works when you install the Raspberry Pi camera libraries first, but 
compiling of programs is fun and provides the opportunity to learn some 
more about Linux.

It’s recommended to start with a fresh installation of Armbian. I used 
Armbian version 5.20 (legacy 3.4 kernel) including desktop. The 
installation method below was tested on a PCDuino3 Nano (Allwinner A20) 
and Orange Pi + (Allwinner H3).

Because the program compiles successfully, It is assumed that all 
Kerberos.io camera modes apart from the Raspberry pi camera module will 
work. I only tested the USBCamera option. The Logitech cameras were 
recognized and modules were automatically loaded by Armbian.

Connect your camera and open a terminal with root privileges and issue 
the commands below. Commands are in bold.

*sudo apt-get update && sudo apt-get upgrade*

*reboot*

**Open a terminal with root privileges.**

***lsusb*

Verify if your camera is shown in the USB device list.

*lsmod*

Verify if the uvc kernel module uvcvideo is loaded. When present, your 
camera should be operational.

***sudo apt install tightvncserver xrdp v4l-utils*

The xrdp and tightvncserver packages are not needed for Kerberos.io, but 
advised when running headless: they enable the Microsoft remote desktop 
protocol on your board. The 4vl-utils package contains the utility for 
detecting the resolutions of your USB webcam.

Download the Raspbian image for a Raspberry Pi 3 and flash it to a USB 
drive. Insert the flash drive and mount it. Make sure you have root 
privileges. Copy the contents from /opt/vc/lib from the Raspberry Pi 3 
Raspbian image to /usr/lib/arm-linux-gnueabihf on your Armbian 
installation that is not in /usr/lib/arm-linux-gnueabihf yet. The 
‘plugins’ directory does not need to be copied. IMPORTANT: do not 
overwrite any library or symbolic link as they might be hardware 
specific! Just don’t take that risk. It’s best to use the file manager 
(directly or via remote desktop) so you can skip files that already 
exist. I did not test what happens if you overwrite any existing library 
or symbolic link. Also, I am not sure if /usr/lib/arm-linux-gnueabihf is 
the best location for the libraries (but hey: it works!).

Now open a terminal with root privileges, make sure you are in /root and 
issue the commands below.

*sudo apt-get install git libav-tools cmake subversion dh-autoreconf 
libcurl4-openssl-dev*

*cd && sudo git clone https://github.com/kerberos-io/machinery*

*cd machinery && mkdir build && cd build*

*cmake .. && make && make check *

Note: a PCDuino3 Nano (A20 board) needs approx. 1h and 40 minutes.

*sudo make install*

*systemctl enable kerberosio*

*cd /etc/opt/kerberosio/config***

**Edit config.xml and replace ‘RaspiCamera’ with ‘USBCamera’. Save.

*v4l2-ctl - - list-format-ext*

Look at the supported resolutions of your camera and select the one you 
will be using for Kerberos.io.

Edit capture.xml and fill in the resolution in the USBCamera section. Save.

*service kerberosio start*

**Congratulations! You now have the machinery module running on your 
Armbian distribution. The program might complain about an incompatible 
pixel format of your camera. You can ignore this, it’s only a warning 
from OpenCV. To complete the installation of Kerberos.io you need to 
install the Web module. The installation of this module does not differ 
from the instructions on the website, so please follow them from 
https://doc.kerberos.io/2.0/installation/Advanced(Web section).

After installing the Web module a reboot is always recommended. Now go 
to http://your_armbian_board_addressto enjoy Kerberos.io!

One last advise: use external storage whenever possible. Kerberos.io can 
generate a lot of files when there is regular motion. Instructions for 
mounting external storage to Kerberos.io can also be found on the 
website of Kerberos.io.