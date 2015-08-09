# Expositor

* [Rectangle](#rectangle)
* [Hull](#hull)

After the algorithm is executed, the expositor will determine, a region, where the changes are located. Just like the algorithm, the expositor has some simple conventions.

An expositor receives a black and white image as parameter and should modify a JSON object with all the information it processed. The JSON object **must include**: the bounding rectangle(s) of the positions where the pixels of interest are located and the number of pixels of interest. But can also include other optional parameters.

<a name="rectangle"></a>
## Rectangle

This is a trivial expositor. A rectangle region can be defined to constrain the locations of pixels of interest. The rectangle repositor will return the region of the pixels of interest.

<a name="hull"></a>
## Hull

A hull region can be defined to constrain the locations of pixels of interest. This is a more advanced expositor, which can be configured by using the web interface. The hull repositor will return the region of the pixels of interest.

![Expositor select hull](8_expositor-select-hull.png)