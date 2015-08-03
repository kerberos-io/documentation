# IP Camera

Kerberos can be used with any IP camera, that provides a streaming URL. Make sure that you know the correct URL of your IP camera, you can find [a list here](http://www.ispyconnect.com/sources.aspx). Make sure you have updated the web interface, to make Kerberos aware you will be using an IP camera.

## Web interface 

![IP camera](2_ip-camera.png)

## Parameters

The parameters of the IP capture device can be found in the *config/capture.xml* file, but you can also use the web interface to modify the parameters. Below you see a default configuration file.

	<captures>

		<IPCamera>
            <url type="text">http://username:password@ipaddress/image.jpg</url>
            <frameWidth type="number">800</frameWidth>
            <frameHeight type="number">640</frameHeight>
        </IPCamera>
	    
	</captures>

### Framewidth and -height

You can set the resolution of the capture device, make sure the resolution you've defined is equal to the resolution you've defined in your IP camera software.