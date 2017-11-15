# API

If you want to integrate Kerberos.io into your own application, you're at the right place! The Kerberos.io web interface comes with a **REST**full **API**, that allows you to get and modify data delivered by the Kerberos.io framework.

 * Reboot the system
 * Disable Kerberos.io
 * Health check
 * Enable or disable output devices
 * ..


## Authentication

To use the RESTfull API of your Kerberos.io instance you need to define an **Authorization header** with each request. We use **Basic Authentication** to secure the different **endpoints**.

	"Authorization": "Basic root:root"

An example with Python looks like this.

	import requests
	import json
	import base64

	url = "http://ip-of-pi/api/v1/condition/enabled"
	username = "user"
	password = "passw"
	basicAuth = base64.b64encode('%s:%s' % (username, password))
	headers = {"Authorization": "Basic " + basicAuth, "Content-Type": "application/json"}

	data = '{"active": "true"}'

	#Call REST API
	response = requests.put(url, data=data, headers=headers)

	print(response.text)

If you're using the wrong credentials, Kerberos.io will return following error message.

	Invalid credentials.

## Endpoints

All endpoints are prefixed with **api/v[version #]/**, in which the last part defines the API version number. Below you will find all the available endpoints with there signature and response. Note that when you call an endpoint which doesn't exists, Kerberos.io will throw an 404.

	{
 		"error": "API method does not exists"
	}

## API version 1

A list of all API methods available for version 1.

<div class="api-method">
	GET api/v1/name
</div>
<br/>

**Description**

Retrieve the name of your instance.

**Response**

	{
 		"name": "frontdoor"
	}


<div class="api-method">
	PUT api/v1/name
</div>
<br/>

**Description**

Change the name of your instance.

**Data**

	{
 		"name": "frontdoor-changed"
	}

<div class="api-method">
	GET api/v1/images/latest_sequence
</div>
<br/>

**Description**

Retrieve the latest sequence detected.

**Response**

    [
        {
            time: "10:59:57",
            src: "https://demo.kerberos.io/capture/1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4",
            local_src: "/var/www/web/public/capture/1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4",
            metadata: {
                key: "1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4",
                user: "1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4",
                timestamp: 1501491597,
                microseconds: "6-310145",
                instanceName: "frontdoor",
                regionCoordinates: "722-691-873-926",
                numberOfChanges: "703",
                token: "511"
            },
            type: "video"
        }
    ]

**Response**

Similar to **GET api/v1/name**.

<div class="api-method">
	GET api/v1/condition/enabled
</div>
<br/>

**Description**

Check if enabled or disabled.

**Response**

	{
	 	"active": "true",
	 	"delay": "5000"
	}

<div class="api-method">
	PUT api/v1/condition/enabled
</div>
<br/>

**Description**

Activate or disable the system

**Data**

	{
	 	"active": "false"
	}

**Response**

Similar to **GET api/v1/condition/enabled**.

<div class="api-method">
	GET api/v1/system/health
</div>
<br/>

**Description**

Check if the machinery is running (the stream is connected).

**Response**

	{
	 	"status": "false"
	}

<div class="api-method">
	POST api/v1/system/reboot
</div>
<br/>

**Description**

Restart the system.

<div class="api-method">
	POST api/v1/system/shutdown
</div>
<br/>

**Description**

Shutdown the system.
