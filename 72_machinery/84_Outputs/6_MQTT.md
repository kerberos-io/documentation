# MQTT

MQTT protocol is a light-weight Machine to Machine (M2M) protocol widely used in Internet of things.  
Detailed information (a JSON object) is published to an MQTT topic. The JSON object contains the number of changes, the region, the URL of the image, etc.

## Parameters

The parameters of the MQTT output can be found in the **config/io.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

    <MQTT>
        <secure type="bool">false</secure>
        <verifycn type="bool">false</verifycn>
        <server type="number">127.0.0.1</server>
        <port type="number">1883</port>
        <topic type="text">kios/mqtt</topic>
        <username type="text"></username>
        <password type="text"></password>
        <throttler type="number">0</throttler>
    </MQTT>

### Secure

If checked, enable SSL/TLS support.  
**PLEASE NOTE**: when SSL/TLS support is enabled, the server certificate issuer is verified against the CA (Certification Authority) files available in /etc/ssl/certs.

### Verifycn

If checked, the MQTT server FQDN or ip address must match the CN (Common Name) of the server certificate.

### Server

IP address or FQDN of the MQTT broker.

### Port

TCP port of the MQTT broker.

### Topic

The topic to publish to.

### Username

The username for authenticating to the MQTT broker. This is only supported by brokers that implement the MQTT spec v3.1. If username is not set (empty), the password argument is ignored.  
This is only needed if the MQTT broker is configured for authentication.

### Password

The password to use, together with the username, for authenticating to the MQTT broker. This is only supported by brokers that implement the MQTT spec v3.1.  
This is only needed if the MQTT broker is configured for authentication.

### Throttler

Control the number of executions by setting a throttling value. E.g. if you set throttling to 5, the MQTT will only be triggered once in 5 seconds, nevertheless more detections occurred.

## Output

A JSON object is published to the topic of the MQTT broker you have configured.

	[
 		'regionCoordinates' : [618, 317, 703, 493],
  		'numberOfChanges' : 5446,
  		'timestamp' : '1465894497',
  		'microseconds' : '5-97451',
  		'token' : 695,
  		'pathToImage' : '1465894497_5-97451_frontdoor_618-317-703-493_5446_695.jpg',
  		'instanceName' : 'frontdoor',
	]

## Example

It is possible to subscribe multiple distributed IoT devices to the same MQTT topic and perform specific actions upon the detection of a motion.

Devices with more resources could fetch the image to perform further elaboration.
