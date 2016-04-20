# Webhook

Detailed information (a JSON object) is send as a POST request to a webhook. The JSON object contains the number of changes, the region, the URL of the image, etc. 

**Make sure that the Webhook comes after the Disk device, otherwise the URL of the image is not included.**

## Web 

![Webhook io](4_webhook.png)

## Parameters

The parameters of the webhook can be found in the **config/io.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<ios>

		<Webhook>
            <url type="text">http://kerberos.web/api/v1/webhook</url>
        </Webhook>
	    
	</ios>

### Url

This is the URL, to which Kerberos will send a JSON object (as a POST request).