## Using V4L2 and RTSP server
The following shows how to use a V4L2 with a RTSP server to stream from the Raspberry Pi camera to Kerberos.io running somewhere else (In my case kerberos.io is running in a docker container on a central server)

This uses another awesome project from [mpromonet/v4l2rtspserver](https://github.com/mpromonet/v4l2rtspserver) and very helpful instructions from [here](http://c.wensheng.org/2017/05/18/stream-from-raspberrypi) and [here](https://github.com/mpromonet/v4l2rtspserver/issues/97#issuecomment-388908430)

## Assumptions
You have a Raspberry Pi running the latest Raspbian

## Installation of needed items
```
sudo apt-get install cmake liblog4cpp5-dev libv4l-dev
wget www.live555.com/liveMedia/public/live555-latest.tar.gz
tar xfz live555-latest.tar.gz
cd live/
./genMakefiles linux
make CPPFLAGS=-DALLOW_RTSP_SERVER_PORT_REUSE=1
sudo make install
cd
git clone https://github.com/mpromonet/v4l2rtspserver.git
cd v4l2rtspserver/
cmake .
make
sudo make install
```

## Usage:
If you want to now run it now, issue the following command:
```
v4l2rtspserver -F15 -H 972 -W 1296 -P 8555 /dev/video0
```
and put the following into kerberos.io configuration page:
`rtsp://<kerberos.io ip>:8555/unicast`


## Automate
To automate running the RTSP server at boot

### Startup script
Create start script in /home/pi/startrtspserver.sh with the following contents:
```
#!/bin/bash

sudo modprobe -v bcm2835-v4l2
v4l2rtspserver -F15 -H 972 -W1296 -P 8555 /dev/video0
```
Make executable:
```
chmod +x /home/pi/startrtspserver.sh
```

### Change Systemd
Update the systemd startup service by replacing the contents of /lib/systemd/system/v4l2rtspserver.service with the following:
```
[Unit]
Description=V4L2 RTSP server
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
User=pi
ExecStart=/home/pi/startrtspserver.sh

[Install]
WantedBy=multi-user.target
```


### Enable Service
Enable the service by issuing the following:
```
sudo systemctl enable v4l2rtspserver
```

### Update URL
Put the following URL in the kerberos.io configuation page:
`rtsp://<kerberos.io ip>:8555/unicast`

## Optional
You may want to disable the LED on the camera board as it can produce a glare. To do som add the following line to the end of /boot/config.txt
```
disable_camera_led=1
```
