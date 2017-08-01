# USB-Camera

Kerberos.io supports a whole range of USB-cameras. You will find a complete list [**here**](https://web.archive.org/web/20120815172655/http://opencv.willowgarage.com/wiki/Welcome/OS/). Make sure you have updated the web interface, to make Kerberos.io aware you will be using an USB camera. [**Be careful**](http://raspberrypi.stackexchange.com/questions/340/how-much-power-can-be-provided-through-usb) that you don't attach USB-devices that require more than 100mA.

## Parameters

The parameters of the USB-camera can be found in the **config/capture.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<captures>
		<USBCamera>
	    	<frameWidth type="number">1280</frameWidth>
	    	<frameHeight type="number">720</frameHeight>
        	<deviceNumber type="number">0</deviceNumber>
            <delay type="number">0</delay>
            <angle type="number">0</angle>
	    </USBCamera>
	</captures>

### Framewidth and -height

You can set the resolution of the capture device, make sure the resolution you've defined is valid with your camera. Please check the specs of the USB camera you're using.

### Device number

If more than one device is connected, you can specify the index of the USB-camera. The index is an integer (1-5).

### Delay

You can provide a delay/interval (milliseconds) between two captures.

### Angle

By defining an angle (degrees), you can rotate the images taken by the capture device. For example if you would mount the camera upside down, than you could enter the value 180 as the angle; this will flip the images.
