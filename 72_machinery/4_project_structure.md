# Project structure

* [File structure](#file-structure)
* [CMake](#cmake)
	* [CMake setup](#cmake-setup)
		* [Src folder](#src-folder)
		* [CMake folder](#cmake-folder)
* [Technical design](#techinal-design)
	* [Configuration](#configuration)
	* [Filewatcher](#filewatcher)
	* [Factory](#factory)
* [Dependencies](#dependencies)
	* [Image Processing](#image-processing)
	* [RapidJSON](#rapidjson)
    * [Easylogging](#easylogging)

<a name="file-structure"></a>
## File structure

* **bin** - contains the compiled and linked executable.
* **build** - contains all the compiled dependencies and source code.
* **cmake** - external dependencies.
* **config** - configuration files that are used to configure Kerberos.io.
* **exceptions** - custom exceptions.
* **include** - header files.
* **logs** - logging.
* **src** - source files.
* **test** - google tests

<a name="cmake"></a>
## CMake

As mentioned before the machinery is using CMake. Therefore if you want to compile the source code, you will need to have CMake installed first. When executing the **CMake** command, CMake will create the appropriate makefiles to compile the machinery.

<a name="cmake-setup"></a>
### CMake setup

At the root of the project you will find **the main CMakeList.txt** file, and this is where everything starts. The root CMake file will include all the other CMake files; which are located in the **src** and **cmake** folder.

<a name="src-folder"></a>
#### Src folder

The **src** folder includes the machinery. You will find a CMakeLists.txt file in the folder and every subfolder. The CMakeLists.txt is reponsible for the directory it belongs to and will contain all the necesarry commands.

<a name="cmake-folder"></a>
#### CMake folder

The **CMake** directory in the root folder, contains the cmakefiles that will download all the dependencies. The CMake files describe where the dependencies are located (Github, SVN, etc.) but also how they need to be build, configured and/or installed.

<a name="technical-design"></a>
## Technical design

The machinery has some technical design concepts, the most important parts are described below.

<a name="configuration"></a>
### Configuration

When the machinery is started, the first thing it will do is read the configuration files; XML files. The configuration file contains which algorithm, expositor, or capture device are selected, and the parameters they require. When the configuration is done, the machinery will enter the four passway and start the recognition. The configuration file can be modified on the settings page from the web, but could also be modified manually; in the config directory of the machinery.

<a name="filewatcher"></a>
### Filewatcher

When the configuration file is modified, we don't need to restart the machinery ourself. The machinery uses a filewatcher, named **Guard**, that will reconfigure the machinery on the fly without restarting the machinery itself. For example, if a user want to change the time constraints, or wants to enlarge the resolution of the captured images.

<a name="factory"></a>
### Factory

The machinery uses the **factory class registration pattern**. Algorithms, expositors, heurstics and conditions are registered to the factory on compilation. Thanks to this mechanism, developers don't have to modify other classes than those they've created. So for example if a developer would add a new algorithm he will just need to create a new header and implementation file, and map a unique name to the class in the implementation file; this behaviour is similar to dependency injection without using reflection; reflection is not available in C++.

<a name="dependencies"></a>
## Dependencies

The machinery has some dependencies, which are installed on the fly, when compiling machinery. We are using the externalproject feature of the cmake autotool to get the different depedencies from their source control (Github, SVN, ..). 

<a name="image-processing"></a>
### Image Processing

Kerberos.io is a video recognition framework and is therefore using a image processing library: [**OpenCV (Open Source Computer Vision)**](https://github.com/Itseez/opencv). Thanks to this very powerful computer vision framework, developers can re-use complex algorithms.

<a name="rapidjson"></a>
### Rapidjson

The machinery is using [**the rapidjson library**](https://github.com/miloyip/rapidjson) to provide a flexible datastructure: JSON. The library is **used within the core of the machinery**, and is concerned within every step of the four pass way; except in the first step the condition, to be 100% correct.


<a name="easylogging"></a>
### Easylogging

The [**easylogging library**](https://github.com/easylogging/easyloggingpp)is used to support the logging in the machinery. Trivials logging is enabled by default, and will be written to the **logs/log.stash** file. When enabled verbose logging (it's an option in the configuration files), extensive logging is added.