# Capture

* [USB camera](#usb-camera)
* [IP camera](#ip-camera)
* [Raspberry Pi Camera Module](#raspberry-pi-camera-module)

The capture device is responsible to take images. The images are used in the four pass way.

<a name="usb-camera"></a>
## USB camera

Kerberos supports a whole range of USB cameras. You will find a complete list [here](https://web.archive.org/web/20120815172655/http://opencv.willowgarage.com/wiki/Welcome/OS/). Make sure that you've updated the settings page on the web interface, that you will be using an USB camera.

<a name="ip-camera"></a>
## IP camera

Kerberos can be used with any IP camera, that provides a streaming URL. Make sure that you know the correct URL of your IP camera, you can find [a list here](http://www.ispyconnect.com/sources.aspx). Make sure you have updated the web interface, to make Kerberos aware you will be using an IP camera.

<a name="raspberry-pi-camera-module"></a>
## Raspberry Pi Camera Module

You can use the Raspberry Pi Camera Module with Kerberos, you just need to attach the camera module and you are ready to go. The Raspberry Pi Camera Module is enabled by default in the web interface. Please note that if you didn't installed Kerberos with the image, you will need to [enable the camera module](/1.0.0/FAQ#how-to-enable-camera-module) yourself.