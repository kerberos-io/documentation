# Enabled

This condition makes it possible to disable/enable Kerberos, with a simple true/false parameter. This is helpful when you're expecting a lot of activity, and you don't want Kerberos to trigger all those events.

## Web interface 

![Enabled condition](2_enabled-condition.png)

## Parameters

The parameters of the Time condition can be found in the *config/condition.xml* file, but you can also use the web interface to modify the parameters. Below you see a default configuration file.

	<conditions>

	    <Enabled>
	    	<active type="bool">true</active>
	        <delay type="number">5000</delay>
	    </Enabled>
	    
	</conditions>



### Active

The active field is boolean value (true/false). When the active field is true, Kerberos is enabled, if not kerberos is disabled.

### Delay

The delay value is used when the condition failed, so when enabled is set to false. In that case Kerberos will idle for the specfied delay time. The value of the delay is expressed in miliseconds.