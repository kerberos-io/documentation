# Streaming

The machinery has the ability to stream your capture device as a MJPG stream.

## Parameters

The parameters for the supported streaming protocols can be found in the *config/stream.xml* file, but you can also use the web to modify the parameters. Below you see a default configuration file; at the moment of writing only a MJPG stream is supported.

	<streams>
		<Mjpg>
	    	<enabled type="bool">true</enabled>
	    	<streamPort type="number">8889</streamPort>
	    	<quality type="number">75</quality>
	    	<username type="number"></username>
	    	<password type="number">75</password>
	    </Mjpg>
	</streams>


### Enabled

A boolean which turns ON/OFF the stream. This is interesting when working with IP cameras, where you already have an RTSP/MJPG stream from the camera itself.

### Stream Port

The port on which the stream is available.

### Quality

The quality is a value between [0-100]. The lower the quality, the more the image will be compressed. If you're using the RaspberryPi Camera module, this option will be ignored.

### Username/password

You can **secure** the MJPEG streaming **with a username and password**. These credentials will be used to authorize your requests using **Basic Authentication**. Please note that once enabled, the live stream on the dashboard page can fail; however it will work if you open it directly in your browser or ip camera client. The format of the streaming url, after authentication enabled, will look as following:

	http://username:password@ip-camera:8899
