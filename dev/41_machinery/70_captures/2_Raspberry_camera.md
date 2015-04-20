# USB Camera

You can use the Raspberry Pi Camera Module with Kerberos. You just need to attach the camera module and you're ready to go. The Raspberry Pi Camera Module is enabled by default in the web interface.

## Web interface 

![Raspberry PI Camera Module](2_raspi-camera.png)

## Parameters

The parameters of the Raspberry Pi Camera Module can be found in the *config/capture.xml* file, but you can also use the web interface to modify the parameters. Below you see a default configuration file.

	<captures>

	    <RaspiCamera>
	        <frameWidth type="number">800</frameWidth>
	        <frameHeight type="number">640</frameHeight>
	        <night type="number">60</night>
	        <day type="number">150</day>
	    </RaspiCamera>

	</captures>

### Framewidth and -height

You can set the resolution of the camera module, make sure the resolution you've defined is valid.

### Night and day

The Raspberry Pi Camera module has additional parameters. Thanks to the MMAL library we can change the configuration of the Raspberry Pi Camera Module. The night and day parameters are gray thresholds. The night parameter defines the lower gray value/threshold; if the brightness of the image taken by the camera module will be lower than the night value, it will switch to night mode. Similar, if the brightness is higher than the day value, it will switch to day mode. 

Notice that there is a kind of gray zone. If the brightness of the image is within those range, no reconfiguration will happen. This feature will be more advanced in future.