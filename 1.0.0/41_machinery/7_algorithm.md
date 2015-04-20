# Algorithm

* [Differential Images](#differential-images)

The algorithm is the second step of the four passway. An algorithm will execute some kind of function on a sequence of images and end up with a black and white image; just like the image below.

The white pixels on the image will indicate the object of interest. For example, when looking for motion, the pixels that have been changed; it depends on what the algorithm is looking for. The black pixels are background pixels.

![Black and white image](7_black-and-white-image.png)

The only convention that an algorithm should meet is that it should return a black and white image to the next step; the expositor. And of course that it requires a sequence of images as a parameter. Besides those conventions, an algorithm can do everything it wants to do. So you could create your own cat detection algorithm, marker detection, etc.

<a name="differential-images"></a>
## Differential Images

This is a trivial **motion detection algorithm**. Three images are compared, and the pixels that have been changed are marked as white pixels, pixels that are black are background images.