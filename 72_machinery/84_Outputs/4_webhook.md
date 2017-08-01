# Webhook

Detailed information (a JSON object) is send as a POST request to a webhook. The JSON object contains the number of changes, the region, the URL of the image, etc. This is useful if you want to integrate the Kerberos.io events in your own application.

**Make sure** that the Webhook comes after the Disk device, otherwise the URL of the image is not included.
## Parameters

The parameters of the webhook can be found in the **config/io.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<ios>
		<Webhook>
			<url type="text">http://kerberos.web/api/v1/webhook</url>
		</Webhook>
	</ios>

### Url

This is the URL, to which Kerberos.io will send a JSON object (as a POST request).

## Output

A JSON object is POSTed to the url you've defined.

	[
 		'regionCoordinates' : [618, 317, 703, 493],
  		'numberOfChanges' : 5446,
  		'timestamp' : '1465894497',
  		'microseconds' : '5-97451',
  		'token' : 695,
  		'pathToImage' : '1465894497_5-97451_frontdoor_618-317-703-493_5446_695.jpg',
  		'instanceName' : 'frontdoor',
	]
