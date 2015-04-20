# Project structure

* [Lifecycle](#lifecycle)
	* [Capture](#capture)
	* [Condition](#condition)
	* [Algorithm](#algorithm)
	* [Expositor](#expositor)
	* [Heuristic](#heuristic)
	* [Io](#io)
* [Technical design](#techinal-design)
	* [Configuration](#configuration)
	* [Filewatcher](#filewatcher)
	* [Factory](#factory)
* [Dependencies](#dependencies)
	* [Image Processing](#image-processing)
	* [RapidJSON](#rapidjson)
* [Testing](#testing)
	* [Continous integration](#continous-integration)
	* [Unit testing / Mocking](#unit-testing-mocking)
* [File structure](#file-structure)

The machinery contains several important concepts and this is the place where we will tackle them briefly.

<a name="lifecycle"></a>
## Lifecycle

The machinery is a video recognition framework and is devided into four steps:

* condition
* algorithm
* expositor
* heuristic

The steps belong to a four passway; illustrated on the image below. In each cycle a sequence of images is processed. Each step will process the sequence, and will return some result to the next step. For example: an algorithm will process the images and returns an array to the Expositor, which contains boolean values. The steps are **loosly coupled**, so they have **simple conventions**, just like the example before.

Thanks to the loosly coupling, each step can be developed indepently. So algorithms, expositors, heuristics and conditions can be switched on the fly. This makes it easier for other developers who want to contribute to kerberos. They can create a new algorithm without knowing how a specific expositor or heuristic works. They just need to be aware of the convention an algorithm should meet.

![Lifecycle](4_project_structure.png)

<a name="capture"></a>
### Capture

You can choose which capture device you will be using, you can use your old USB webcam or the hi-tech and cheap Raspberry Pi Camera Module. The capture device will take some pictures and deliver them to the algorithm if the conditions (the first step of the four passway) are valid.

<a name="condition"></a>
### Condition

The condition is the first step of the four passway. In this step kerberos will determine if it's allowed to proceed to the next step. For example a condition can be a time constraint, a brightness threshold, etc. Multiple conditions can be selected and configured with the web interface.

<a name="algorithm"></a>
### Algorithm

The algorithm is the second step of the four passway. An algorithm will execute some kind of function on a sequence of images. An example of an algorithm would be one that does motion detection or one that would detect cats or dogs.

<a name="expositor"></a>
### Expositor

After the algorithm is executed, the expositor will determine, a region, where the changes were detected. An expositor can constrain a region in terms of selecting a hull or defining a rectangle.

<a name="heuristic"></a>
### Heuristic

When the expositor detected some kind of region, a heuristic will evaluate, the current and previous detections. The heuristic is basically some kind of memory which makes decision and tells kerberos if the detection was true or false.

<a name="io"></a>
### IO

If the heuristic determined that the detection was valid, one or more IO operations can be executed. For example an image can be saved to disk or an email can be sent.

<a name="technical-design"></a>
## Technical design

Kerberos.io has some technical design concepts, the most important parts are described below.

<a name="configuration"></a>
### Configuration

When the machinery is started, the first thing it will do is reading a configuration file; an XML file. The configuration file contains which algorithm, expositor, or capture device are selected, and the parameters they require. When the configuration is done, the machinery will enter the four passway and start the recognition. The configuration file can be modified on the settings page from the web interface, but could also be modified manually; in the config directory of the machinery.

<a name="filewatcher"></a>
### Filewatcher

When the configuration file is modified, we don't need to restart the machinery ourself. The machinery uses a filewatcher, named **Guard**, that will reconfigure the machinery on the fly without restarting the machinery itself. For example, a user want to change the time constraints, or wants to enlarge the resolution of the captured images.

<a name="factory"></a>
### Factory

The machinery uses the **factory class registration pattern**. Algorithms, expositors, heurstics and conditions are registered to the factory on compilation. Thanks to this mechanism, developers don't have to modify other classes than those they've created. So for example if a developer would add a new algorithm he will just need to create a new header and implementation file, and map a unique name to the class in the implementation file; this behaviour is similar to dependency injection without using reflection; reflection is not available in C++.

<a name="dependencies"></a>
## Dependencies

Kerberos.io has some dependencies, which are installed on the fly, when compiling machinery. We are using the externalproject feature of the cmake autotool to get the different depedencies from their source control (Github, SVN, ..). 

<a name="image-processing"></a>
### Image Processing

Kerberos.io is a video recognition framework and is therefore using a image processing library; OpenCV (Open Source Computer Vision). Thanks to this very powerful computer vision framework, developers can benefit from it and increase development time.

<a name="rapidjson"></a>
### Rapidjson

The machinery is using the rapidjson library to provide a flexible datastructure: JSON. The library is used within the core of kerberos, and is concerned within every step of the four pass way; except in the first step the condition, to be 100% correct.

<a name="testing"></a>
## Testing 

<a name="continous-integration"></a>
### Continous integration

The machinery is deployed automatically on **travis-ci**, when a new commit/release is pushed.

<a name="unit-testing-mocking"></a>
### Unit testing / Mocking

We strongly recommend testing as a best practice in complex projects. Therefore the machinery uses the popular c++ test library: Google Test and Google Mock. The test can be found in the **test** directory. You can run the test by executing following command:

	make check

<a name="file-structure"></a>
## File structure

* **bin** - contains the kerberos compiled and linked executable.
* **build** - contains all the compiled dependencies and source code.
* **cmake** - information about how to compile kerberos, and were to find the dependencies.
* **config** - configuration files that are used to configure kerberos.
* **exceptions** - custom exceptions.
* **include** - kerberos header files.
* **logs** - log file, kerberos exceptions are written to.
* **src** - kerberos source files.
* **test** - google tests