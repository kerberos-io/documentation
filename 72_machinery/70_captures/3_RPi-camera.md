# RPi-camera

You can use the Raspberry Pi Camera Module with Kerberos.io. You just need [**to attach the camera module**](https://www.raspberrypi.org/help/camera-module-setup/) and you're ready to go. The Raspberry Pi Camera Module is enabled by default in the web.

## Web 

![Raspberry PI Camera Module](3_raspi-camera.png)

## Parameters

The parameters of the Raspberry Pi Camera Module can be found in the **config/capture.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<captures>

	    <RaspiCamera>
	        <frameWidth type="number">800</frameWidth>
	        <frameHeight type="number">640</frameHeight>
            <delay type="number">0</delay>
            <angle type="number">0</angle>
	    </RaspiCamera>

	</captures>

### Framewidth and -height

You can set the resolution of the camera module, make sure the resolution you've defined is valid.

### Delay

You can provide a delay/interval (milliseconds) between two captures.

### Angle

By defining an angle (degrees), you can rotate the images taken by the capture device. For example if you would mount the camera upside down, than you could enter the value 180 as the angle; this will flip the images.