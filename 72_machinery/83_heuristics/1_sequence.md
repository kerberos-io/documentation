# Sequence

This is a trivial heuristic. The sequence heuristic will store a single integer in memory, that will count the numbers of valid detections. When the heuristic will detect a false detection, it will decrease the count. The sequence heuristic will return true, if a threshold is reached; for example when something was detected three times in a row.

## Parameters

The parameters of the Sequence heuristic can be found in the **config/heuristic.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<heuristics>
		<Sequence>
		    <minimumChanges type="number">1</minimumChanges>
		    <minimumDuration type="number">1</minimumDuration>
		    <noMotionDelayTime type="number">2000</noMotionDelayTime>
		</Sequence>
	</heuristics>


### Minimum changes

The heuristic will only return true if enough changes have been detected. The minimum of changes indicates the minimum number of pixels that have to been changed, to be a valid detection.

### Minimum durations

The minimum number of detections in a row to be a valid detection.

### No motion delay time

When the heuristic failed, due to not enough pixels changed or not x detections in a row, the heuristic will idle for some time.
