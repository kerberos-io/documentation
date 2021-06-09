---
title: "Contribute"
description: ""
lead: ""
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
menu:
  docs:
    parent: "opensource"
weight: 208
toc: true
---

In this document we describe the different things you need to know if you would like to add a new feature to Kerberos Open Source, or change some of its behaviour for your own use case.

Before starting, as you might have read already, you need to know that Kerberos Open Source consists of two solutions. A front-end, also called **web**, which allows you to review the recordings and to configure the back-end settings. A back-end, also called **machinery**, which is computer vision solution that processes the video stream of surveillance camera.

Once you start changing or adding features to Kerberos Open Source, there is a big chance you will need to modify the previously mentioned solutions. That's why we will discuss how you can contribute to one or both solutions.

## Machinery

Contributing to the [machinery repository](https://github.com/kerberos-io/machinery) requires C++ skills. This section describes all the technical stuff you will need to know. If you want to contribute, the first thing you will need to do is installing the source code on your working station.

### Prerequisites

> A Linux OS, or Mac OSX (Window is not supported).

### Installation

The complete installation can be found on the advanced installation page, describing the complete set of instructions. However for simplicity we will give a summarized version, as probably you will already have a development environment set up.

Install development tools (C++, CMake) and V4L utils, and clone the repository. Compile the project using cmake and make.

```ts
sudo apt-get -y update
sudo apt-get install -y git cmake subversion dh-autoreconf libcurl4-openssl-dev yasm libx264-dev pkg-config libssl-dev
cd && sudo git clone https://github.com/kerberos-io/machinery
cd machinery && mkdir build && cd build
cmake .. && make -j8 && make check && sudo make install
```

### Testing

We strongly recommend testing as a best practice in complex projects. Therefore the machinery uses the popular C++ test library: Google Test and Google Mock. The tests can be found in the test directory. You can run the test by executing following command:

```ts
make check
```

### Adding a new class

This paragraph will tell you how to create a new condition, algorithm, expositor, io or capture device. For simplicity we will show how to create a new algorithm; the steps are identical if you want to create for example a new capture device; only the directory will differ.

#### Create the header file

First we will need to create a new header file in the include/kerberos/machinery/algorithm directory. You can copy an existing algorithm header file, and start from there. You will end up with the following header file:

```ts
//
//  Class: AnotherAlgorithm
//  Description: Another algorithm
//  Created:     ...
//  Author:      ...
//  Mail:        ...
//  Website:     ...
//
//  The copyright to the computer program(s) herein
//  is the property of kerberos.io, Belgium.
//  The program(s) may be used and/or copied .
//
/////////////////////////////////////////////////////
#ifndef __AnotherAlgorithm_H_INCLUDED__   // if AnotherAlgorithm.h hasn't been included yet...
#define __AnotherAlgorithm_H_INCLUDED__   // #define this so the compiler knows it has been included
#include "machinery/algorithm/Algorithm.h"
namespace kerberos
{
	char AnotherAlgorithmName[] = "AnotherAlgorithm";
	class AnotherAlgorithm : public AlgorithmCreator<AnotherAlgorithmName, AnotherAlgorithm>
	{
    	private:
    		Image m_result;
        	int m_parameter;
    	public:
        	AnotherAlgorithm(){}
        	void setup(const StringMap & settings);
        	void initialize(ImageVector & images);
        	Image evaluate(ImageVector & images, JSON & data);
        	void setParameter(int parameter);
	};
}
#endif
```

When creating a new class you will need to inherit from it corresponding creator, for the algorithm example: AlgorithmCreator. The creator class requires two template parameters. The first one is a unique name for the class, this name will be used to make some kind of dependency injection possible; and is used in the configurations files. The second parameter is the class itself.

The inheritance of the creator class can be a little bit strange, but it is required and needed to register the class automatically with the factory. When the code gets compiled, the classes will be automatically registered with the factory, and you can create instances of those classes by using the name we've defined in the first template parameter. For example we could create a new instance of our previously created class with the following command.

```ts
Algorithm * anotherAlgorithm = Factory<Algorithm>::getInstance()->create("AnotherAlgorithm");
```

#### Create the source file

Ofcourse we also need to have an implementation file, therefore we need to create a new source file in the src/kerberos/machinery/algorithm directory. Just like the previous example, you can copy an existing class and implement the member functions you've declared in the header file. An example would be:

```ts
#include "machinery/algorithm/AnotherAlgorithm.h"
namespace kerberos
{
    void AnotherAlgorithm::setup(const StringMap & settings)
    {
        Algorithm::setup(settings);
        int parameter = std::atoi(settings.at("algorithms.AnotherAlgorithm.parameter").c_str());
        setParameter(parameter);
    }
    void AnotherAlgorithm::initialize(ImageVector & images)
    {
        ....
    }
    Image AnotherAlgorithm::evaluate(ImageVector & images, JSON & data)
    {
        Image evaluation;
        ... do something ..
        return evaluation;
    }
    void AnotherAlgorithm::setParameter(int parameter)
    {
        m_parameter = parameter;
    }
}
```

#### Modify the CMakeLists.txt file

Open the CMakeLists.txt in the src/kerberos directory file and append the name of the algorithm class to the KERBEROS_FACTORY_ENTITIES variable; for example machinery/algorithm/AnotherAlgorithm.cpp.

```ts
# -------------------------------------------------------
# Entities that have to be registered with the factory
#   - classes are registered on compile time, so they
#   don't belong to a library. New algorithms, expositors
#   or Io classes belong here.
set(KERBEROS_FACTORY_ENTITIES
    capture/USBCamera.cpp
    machinery/condition/Time.cpp
    machinery/condition/Enabled.cpp
    machinery/algorithm/DifferentialCollins.cpp
    machinery/algorithm/DifferentialCollinsWithColor.cpp
    machinery/algorithm/AnotherAlgorithm.cpp
    machinery/expositor/RectangleExpositor.cpp
    machinery/expositor/HullExpositor.cpp
    machinery/heuristic/Sequence.cpp
    machinery/io/IoDisk.cpp
    machinery/io/IoTCP.cpp
    machinery/io/IoMongoDB.cpp
)
```

#### Create a new entry in the config file

Open the algorithm.xml file in the config directory, and add a new tag with exactly the same name you've used in the header file; so in our example "AnotherAlgorithm". Within the new tag we can add properties that we will be use to configure our algorithm, in our example we defined a field parameter so we can add this field in the config file.

One thing you will need to do is to attach a type to a property. The type will be used by the web to automatically render the properties. For simplicity we can use the type number, this will show an input box on the settings page of the web where we are able to add numbers.

```ts
<algorithms>
	<AnotherAlgorithm>
		<parameter type="number">5</parameter>
    </AnotherAlgorithm>
</algorithms>
```

You can retrieve the parameter in the setup function with the settings parameter.

```ts
settings.at("algorithms.AnotherAlgorithm.parameter")
```

### Compile

Hurray, we've made it! So now you can compile the code again, and if you're using an IDE don't forget to include the new source file! If you are compiling from the command-line you just have to go to the build folder and write make.

## Web

Contributing to [the web repository](https://github.com/kerberos-io/web) requires both front- and back-end skillls, more precisely BackboneJS (JavaScript) and Laravel 5.4 (PHP).

### Prerequisites

Make sure you have following services installed on your working station.

>\>= PHP 7.1.0, NodeJS and NPM and Nginx or Apache

### Installation

Clone the repository to your working station.

```ts
git clone https://github.com/kerberos-io/web
cd web
```

Install the PHP libraries using the dependency mananger, **Composer**. If you haven't installed composer execute following commands.

```ts
php -r "readfile('https://getcomposer.org/installer');" > composer-setup.php
php -r "if (hash('SHA384', file_get_contents('composer-setup.php')) === '41e71d86b40f28e771d4bb662b997f79625196afcca95a5abf44391188c695c6c1456e16154c75a211d238cc3bc5cb47') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

After a succesful installation, you can run composer install or composer update from the root of the project. All dependencies will be installed or updated if a newer version is detected.

```ts
composer update
```

Besides PHP, the project also relies on BackboneJS (Javascript) for the front-end. Therefore a couple JavaScript dependencies should be installed.

```ts
npm -g install bower
cd public
bower update
```

When everything is installed properly, you need too link the web project with your applicationn server. Read more on the [Laravel documentation website](https://laravel.com/docs/5.8/deployment).