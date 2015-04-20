# USB Camera

Kerberos supports a whole range of USB cameras. You will find a complete list [here](https://web.archive.org/web/20120815172655/http://opencv.willowgarage.com/wiki/Welcome/OS/). Make sure you have updated the web interface, to make Kerberos aware you will be using an USB camera. [Be carefull](http://raspberrypi.stackexchange.com/questions/340/how-much-power-can-be-provided-through-usb) that you don't attach USB devices that require more than 100mA.

## Web interface 

![USB camera](1_usb-camera.png)

## Parameters

The parameters of the USB capture device can be found in the *config/capture.xml* file, but you can also use the web interface to modify the parameters. Below you see a default configuration file.

	<captures>

		<USBCamera>
	    	<frameWidth type="number">1280</frameWidth>
	    	<frameHeight type="number">720</frameHeight>
	    </USBCamera>
	    
	</captures>

### Framewidth and -height

You can set the resolution of the capture device, make sure the resolution you've defined is valid with your camera. Please check the specs of the USB camera you're using.