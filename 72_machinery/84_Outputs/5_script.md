# Script

A bash script can be executed after a valid event was detected. A JSON object is send in the first parameter to the script you've defined.

## Parameters

The parameters of the Script output device can be found in the **config/io**.xml file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<ios>
    	<Script>
	        <path type="text">/etc/opt/kerberosio/scripts/run.sh</path>
					<throttler type="number">0</throttler>
	    </Script>
	</ios>

### Path

The location of the script that will be executed on detection.

### Throttler

Control the number of executions by setting a throttling value. E.g. if you set throttling to 5, the Script will only be triggered once in 5 seconds, nevertheless more detections occurred.

## Example

By default the script will point to **/etc/opt/kerberosio/scripts/run.sh**, which contains a template how you should start your script. Note that when using **KiOS**, this script will be read-only, copy it to the **/data** folder and change the path parameter.

	#!/bin/bash
	# -------------------------------------------
	# This is an example script which illustrates
	# how to use the Script IO device.
	#
	# --------------------------------------
	# The first parameter is the JSON object
	#
	# e.g. {"regionCoordinates":[308,250,346,329],"numberOfChanges":194,"timestamp":"1486049622","microseconds":"6-161868","token":344,"pathToImage":"1486049622_6-161868_frontdoor_308-250-346-329_194_344.jpg","instanceName":"frontdoor"}
	JSON=$1
	# -------------------------------------------
	# You can use python to parse the JSON object
	# and get the required fields
	name=$(echo $JSON | python -c "import sys, json; print json.load(sys.stdin)['instanceName']")
	coordinates=$(echo $JSON | python -c "import sys, json; print json.load(sys.stdin)['regionCoordinates']")
	changes=$(echo $JSON | pythfon -c "import sys, json; print json.load(sys.stdin)['numberOfChanges']")
	image=$(echo $JSON | python -c "import sys, json; print json.load(sys.stdin)['pathToImage']")

The idea is that you can use **Python** in your bash script, to parse the JSON object send as first parameter. Afterwards you can do with the output what you want.
