# Streaming

The machinery has the ability to stream your capture device as a MJPG stream.

## Parameters

The parameters for the supported streaming protocols can be found in the *config/stream.xml* file, but you can also use the web to modify the parameters. Below you see a default configuration file; at the moment of writing only a MJPG stream is supported.

	<streams>

		<Mjpg>
	    	<enabled type="bool">true</enabled>
	    	<streamPort type="number">8888</streamPort>
	    	<quality type="number">75</quality>
	    </Mjpg>
    
	</streams>


### Enabled

A boolean which turns ON/OFF the stream. This is interesting when working with IP cameras, where you already have an RTSP/MJPG stream from the camera itself.

### Stream Port

The port on which the stream is available.

### Quality

The quality is a value between [0-100]. The lower the quality, the more the image will be compressed.