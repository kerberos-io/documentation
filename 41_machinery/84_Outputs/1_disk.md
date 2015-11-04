# Disk

An image can be saved to disk.

## Web interface 

![Disk io](1_disk-io.png)

## Parameters

The parameters of the Disk output device can be found in the **config/io**.xml file, but you can also use the web interface to modify the parameters. Below you see a default configuration file.

	<ios>

	    <Disk>
	    	<fileFormat type="text">timestamp_microseconds_instanceName_regionCoordinates_numberOfChanges_token.jpg</fileFormat>
	    	<directory type="directory">/srv/capture</directory>
	    </Disk>
		    
	</ios>

### File format

The format that will be used for the name of the image. One or more variables can be defined and will be replaced by the machinery. Note that when you're using a variables name in the file format, that this name should be defined in the JSON object.

### Directory

The directory where the image will be saved to. By default images are saved to the **/srv/capture** directory.
