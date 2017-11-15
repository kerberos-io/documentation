# TCP/IP client

The TCP/IP client will send a TCP packet to a server.

## Parameters

The parameters of the TCP/IP client can be found in the **config/io.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<ios>
	    <TCPSocket>
	        <server type="number">127.0.0.1</server>
	        <port type="number">1337</port>
	        <message type="text">it's so fluffy</message>
					<throttler type="number">0</throttler>
	    </TCPSocket>
	</ios>

### Server

The IP of the TCP server.

### Port

This is the port of the TCP server.

### Message

You can send some data to a TCP server.

### Throttler

Control the number of executions by setting a throttling value. E.g. if you set throttling to 5, the TCP will only be triggered once in 5 seconds, nevertheless more detections occurred.

## Examples

More information can be found [here](/addons/TCP_Listener).
