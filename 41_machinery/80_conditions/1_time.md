# Time

It can be helpful to enable or disable Kerberos at specific times. Therefore the time condition makes it possible to select a time range for each day of the week. When the current time is within the time range, Kerberos will be enabled.

## Web interface 

![Time condition](1_time-condition.png)

## Parameters

The parameters of the Time condition can be found in the *config/condition.xml* file, but you can also use the web interface to modify the parameters. Below you see a default configuration file.

	<conditions>

    	<Time>
        	<times type="timeselection">13:00,15:00-0:01,20:58-0:01,20:59-0:01,19:20-0:01,21:59-0,0-0,0</times>
        	<delay type="number">10000</delay>
    	</Time>

	</conditions>


### Times

The times property contains a list of times, delimited by a "-". The first item in the list will specify the time range for the first day of the week (Monday), the last item for the last day of the week (Sunday). The begin- and end-time, for a specific day, are delimited by a "," where the first element will specify that start time and the second one specifies the end time.

### Delay

The delay value is used when the condition failed, so when the current time isn't in the selected time range for that day. In that case Kerberos will idle for the specified delay time. The value of the delay is expressed in miliseconds.