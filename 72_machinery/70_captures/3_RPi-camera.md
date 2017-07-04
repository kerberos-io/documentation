# RPi-camera

You can use the Raspberry Pi Camera Module with Kerberos.io. You just need [**to attach the camera module**](https://www.raspberrypi.org/help/camera-module-setup/) and you're ready to go. The Raspberry Pi Camera Module is enabled by default in the web.

## Parameters

The parameters of the Raspberry Pi Camera Module can be found in the **config/capture.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<captures>

	    <RaspiCamera>
				<frameWidth type="number">640</frameWidth>
				<frameHeight type="number">480</frameHeight>
				<delay type="number">1400</delay>
				<angle type="number">0</angle>
				<framerate type="number">30</framerate>
				<sharpness type="number">0</sharpness>
				<saturation type="number">0</saturation>
				<contrast type="number">0</contrast>
				<brightness type="number">50</brightness>
	    </RaspiCamera>

	</captures>

### Framewidth and -height

You can set the resolution of the camera module, make sure the resolution you've defined is valid.

### Delay

You can provide a delay/interval (milliseconds) between two captures.

### Angle

By defining an angle (degrees), you can rotate the images taken by the capture device. For example if you would mount the camera upside down, than you could enter the value 180 as the angle; this will flip the images.

### Framerate

The number of frames captures per second. Please note that this parameter will also be used if you're recording video. E.g. if you set this parameter to 20, you're recorded videos will also be 20 FPS.

### Sharpness, saturation, contrast, brightness

Camera properties which you can specify to tune the settings to your needs.
