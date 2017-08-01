# Rectangle

This rectangle is a trivial expositor. A rectangle region can be defined to constrain the locations of pixels of interest; for example if you only want to have detection at your front door. The rectangle repositor will return the bounding rectangle of the pixels of interest.

## Parameters

The parameters of the rectangle expositor can be found in the **config/expositor.xml** file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<expositors>
		<Rectangle>
		    <region>
			    <x1 type="number">0</x1>
			    <y1 type="number">0</y1>
			    <x2 type="number">1280</x2>
			    <y2 type="number">720</y2>
			 </region>
		</Rectangle>
	</expositors>


### Region

The region parameter contains 4 values; x1, y1, x2 and y2 respectively. The values x1 and y1 indicate the x- and y-coordinate of the left upper starting point. The values x2 and y2 are the bottom right coordinates. A virtual rectangle will be drawn from (x1,y1) to (x2,y2). Pixels of interest that lie within this rectangle are valid pixels; if not they are invalid.
