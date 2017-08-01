# Background subtraction

This Background subtraction algorithm is **a more advanced** method in comparison to the **Differential images** method. The key difference is that it uses and calculates a background image. Images taken from the capture device are then subtracted from the background image, resulting in a more robust segmentation of the foreground. As this method is more accurate, it also **consumes a lot more CPU power and memory**; the background model is adapted by every iteration.

The algorithm is described in [**following paper**](http://personal.ee.surrey.ac.uk/Personal/R.Bowden/publications/avbs01/avbs01.pdf).

## Parameters

The parameters of the Background images algorithm can be found in the *config/algorithm.xml* file, but you can also use the web to modify the parameters. Below you see a default configuration file.

	<algorithms>
		<BackgroundSubtraction>
			<shadows type="text">true</shadows>
			<history type="number">50</history>
			<nmixtures type="number">5</nmixtures>
			<ratio type="number">1</ratio>
			<erode type="number">5</erode>
			<dilate type="number">7</dilate>
	    	<threshold type="number">20</threshold>
	    </BackgroundSubtraction>
	</algorithms>

### Shadows

The shadows parameter is a true or false. By using this parameter you can make the Background subtraction a little bit more intelligent; to **neglect shadows in the foreground model**.

### History

This is an integer which tells the system, **the amount of images the system should take into account (history)**, to calculate the background model. The higher the history integer, the more images it will use to calculate the background model. By **increasing the history** you get **a more stable background** model, but a **less flexibl**e. As more images from the past are taken into account, the slower the background model will adapt to a new scenario. E.g. when a car drives into your street, and stands still for 5 minutes.

Finding the ideal history parameters, depends heavily in the application you want to use it. In practice this **is achieved by trial and error**.

### NMixtures

Sets the number of gaussian components in the background model.

### Ratio

If a foreground pixel keeps semi-constant value for about backgroundRatio*history frames, it’s considered background and added to the model as a center of a new component.

### Erode

Find a more detailed explanation at the [**Differential images section**](algorithms/Differential_images).

### Dilate

Dilate is exactly the same as the erode parameter, except that it has the reverse behaviour; instead of removing isolated pixels it will connect them. The dilate function is mainly used in segmentation techniques, to create **a more complete segment**; it fills gaps. The higher the number of the erode parameter, the more aggressive the dilating will be.

### Threshold

Find a more detailed explanation at the [**Differential images section**](algorithms/Differential_images).
