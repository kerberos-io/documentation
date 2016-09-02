# IP-camera

Kerberos.io can be used with any IP-camera, that provides a RTSP (or MJPEG) stream. Make sure that you know the correct URL of your IP camera, you can find [a list here](http://www.ispyconnect.com/sources.aspx). Make sure you have updated the web, to make Kerberos.io aware you will be using an IP-camera.

## Parameters

The parameters of the IP capture device can be found in the **config/capture.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<captures>

		<IPCamera>
            <url type="text">http://username:password@ipaddress/image.jpg</url>
            <frameWidth type="number">800</frameWidth>
            <frameHeight type="number">640</frameHeight>
            <delay type="number">0</delay>
            <angle type="number">0</angle>
        </IPCamera>
	    
	</captures>

### URL

To use your IP-camera, you should provide a valid RTSP (or MJPEG) URL. Kerberos.io will take snapshots from this stream.

### Framewidth and -height

You can set the resolution of the capture device, make sure the resolution you've defined is equal to the resolution you've defined in your IP-camera software.

### Delay

You can provide a delay/interval (milliseconds) between two captures.

### Angle

By defining an angle (degrees), you can rotate the images taken by the capture device. For example if you would mount the camera upside down, than you could enter the value 180 as the angle; this will flip the images.