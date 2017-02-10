# GPIO

A GPIO pin can be set as output device.

## Parameters

The parameters of the GPIO pin can be found in the **config/io.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<ios>

	    <GPIO>
        	<pin type="number">17</pin>
	        <periods type="number">5</periods>
	        <periodTime type="number">100000</periodTime>
	    </GPIO>
		    
	</ios>

### Pin

The pin that will be triggered.

### Periods

The number of times the pin will be triggered.

### Period time

The time in microseconds that the pin will be set *high*.