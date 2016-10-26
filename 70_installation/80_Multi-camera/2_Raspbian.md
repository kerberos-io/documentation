# Multi-camera on Raspbian

When you've installed Kerberos.io on **Raspbian**, then you have the possibility **to connect one or more cameras** to the Raspberry Pi. Please note that this functionality **isn't available out-of-the-box**, and therefore requires some technical skills to configure. 

## Install Raspbian

First things first. Install Kerberos.io on your Raspbian installation by following [**the traditional Raspbian installation**](/installation/raspbian), and make sure you've installed Kerberos.io properly, so you'll see the web interface and the machinery running.

By default the installation of Kerberos.io on Raspbian will **only support a single type of camera**. You can navigate to the settings page and change the capture device. However if you want to connect more cameras there **isn't a way** to configure it **through the web interface**.

## This is how it works

When installed properly, the kerberos.io binary will start at boot, and read the configuration files located at **/etc/opt/kerberosio/config**. Next to that Kerberos.io will start the correct capture device, and configure the complete system according the settings you've defined in those configuration files. This is what happens:

	$ kerberosio --config /etc/opt/kerberosio/config/config.xml


To start multiple devices we can simple run the binary a second time, and **overwrite the configuration** by commandline parameters. Suppose that we want to connect two more USB cameras, next to our Raspberry Pi camera than we can do this as following:

	$ kerberosio --name usbcamera1 --capture USBCamera --captures.USBCamera.deviceNumber 0 --streams.Mjpg.enabled false &
	$ kerberosio --name usbcamera2 --capture USBCamera --captures.USBCamera.deviceNumber 1 --streams.Mjpg.enabled false &

What this will do is start two new kerberosio processes, and **connect the USB cameras to a single process**. By overwriting the devicenumber we're able to select a specific USB camera. Next to that we also disabled the streaming, because by default it will bind to the same port 8889, and that will not work.

## Where can I find those variables?

When Kerberos.io is started it will write to a log file **/etc/opt/kerberosio/logs/log.stash**, which you can also see on the system page of the web interface. In the log file you'll see the startup configuration with all the different settings. You can overwrite every setting which is listed in this overview, just keep in mind that you have to prefix every option with **a double dash --**.

	26/10/2016 08:11:36.135 INFO  [trivial] Reading configuration
	26/10/2016 08:11:36.141 INFO  [trivial] Final configuration:
	- algorithm = DifferentialCollins
	- algorithms.BackgroundSubtraction.dilate = 7
	- algorithms.BackgroundSubtraction.erode = 5
	- algorithms.BackgroundSubtraction.history = 50
	...
	- algorithms.DifferentialCollins.threshold = 15
	- capture = USBCamera
	- captures.IPCamera.angle = 0
	- captures.IPCamera.delay = 1000
	- captures.IPCamera.frameHeight = 360
	- captures.IPCamera.frameWidth = 640
	- captures.IPCamera.url = rtsp://admin:888888@192
	- captures.RaspiCamera.angle = 0
	- captures.RaspiCamera.delay = 500
	- captures.RaspiCamera.frameHeight = 720
	- captures.RaspiCamera.frameWidth = 1280
	- captures.USBCamera.angle = 0
	- captures.USBCamera.delay = 500
	- captures.USBCamera.deviceNumber = 0
	- captures.USBCamera.frameHeight = 640
	...
	- streams.Mjpg.enabled = false
	- streams.Mjpg.quality = 75
	- streams.Mjpg.streamPort = 8889
	- timezone = Europe-Brussels

## Where can I find my images?

All images will be stored at the same location, so they will be mixed in the webinterface. We don't provide a way to see the images independent (on a camera basis), if you would like to have this then you should check out our [**cloud application**](https://cloud.kerberos.io) which has some additional features.

