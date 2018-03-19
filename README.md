# KERBEROS.**IO**

[![Join the chat](https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg?style=flat)](https://gitter.im/kerberos-io/hades?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This repository contains all the documentation that is displayed on the [documentation website](https://doc.kerberos.io/). The documentation is written in [markdown](https://www.markdowntutorial.com/) The documentation includes information about: how kerberos works, how to install it and also some technical information for developers who are willing to contribute; for example how to add a new algorithm or a new output device.

## Vote for features

[![Feature Requests](https://feathub.com/kerberos-io/machinery?format=svg)](https://feathub.com/kerberos-io/machinery)

## Folder structure

Changes are added to the **development** branch first, and will be added to the **master** branch if stable. The document folder structure looks like this:

* branch1
	* document
	* document
	* ...
	* document
	* folder
		* document
		* folder
			* document
			* ...
			* document
			* folder
		* ...
		* folder
	* ...
	* folder
* branch 2
* ... 
* branch n

Directories and documents can start with a number, followed by an underscore, to order the documents; for example *1\_documentation* and *2\_more\_documentation*. Please note that documents always come first, and thus directories second. Thus directories and documents are sorted separately; just like the folder structure above.

## Contribute

Writing documentation is required if you send a pull-request. No code, how excellent it may be, will be merged without documentation or tests. This will give the other contributors a better understandig of how your code works and what its purpose is.

## How to write documentation

To create uniform documentation some guidelines are introduced:

* a document starts with a title.
* the title is followed by a listing of the subsections on the page.
* images start with a prefix similar to the document they belong to; for example: document "1_c" has two images *"1\_c\_this\_is \_an\_image"* and *"1\_c\_unicorn"*.
* images belong to the same directory as the document they belong to.
* documentation for new algorithms, expositors, heuristics, etc  will be using following template.
	* Global description of the class
	* Web interface (image)
	* Parameters (xml + description of each parameter)
