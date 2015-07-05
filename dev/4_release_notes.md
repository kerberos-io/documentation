# Release notes

* [1.0.3](#1-0-3)
* [1.0.2](#1-0-2)
* [1.0.1](#1-0-1)
* [1.0.0](#1-0-0)

<a name="1-0-3"></a>
## 1.0.3

#### Web

* Optimize performance, new datastructure has been implemented.

#### Machinery

* Memory optimization.
* Removal of images older than 3 days have been removed.
* Start machinery automatically (delay has been removed).

#### Cloud

* Resolved file exist problem.

<a name="1-0-2"></a>
## 1.0.2

#### Web

* Timezone on settings page is also used for the webinterface.

#### Machinery

* Added extra timezones to timezone.xml.

<a name="1-0-1"></a>
## 1.0.1

#### Web

* Improved error handling (date search).

#### Machinery

* Improved memory cleanup.

<a name="1-0-0"></a>
## 1.0.0

#### First commit of Kerberos.io

* Camera support: **USBCamera** (V4L), **Raspberry Pi camera module** (MMAL).
* Conditions: **Enabled** (turn on/off Kerberos) and active **Time** per day.
* Algorithms: **Differential Images**.
* Heuristics: **Sequence**.
* Expositors: Select a **Hull** or **Rectangle**.
* Outputs: Write image to **Disk**, trigger an **GPIO** output pin and send a **TCP/IP packet**.
* Cloud: send your images to the **Kerberos.io cloud aplication**.