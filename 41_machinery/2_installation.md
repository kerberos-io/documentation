# Installation

* [Install from package manager](#install-from-package-manager)
    * [Install on Arch Linux](#install-on-arch-linux)
    * [Install on Raspbian](#install-on-raspbian)
* [Compile from source](#compile-from-source)
    * [Compile on Arch Linux](#compile-from-source-on-arch-linux)
    * [Compile on Raspbian](#compile-from-source-on-raspbian)
* [Configure](#configure)
* [Run](#run)
 
<a name="install-from-package-manager"></a>
## Install from package manager

<a name="install-on-arch-linux"></a>
### Install Arch Linux

<a name="install-on-raspbian"></a>
### Install on Raspbian

Add kerberos apt repository

    echo 'deb http://apt.kerberos.io/ /' | sudo tee -a /etc/apt/sources.list

Update apt
    
    sudo apt-get update

Install kerberosio

    sudo apt-get install kerberosio

Force kerberosio to start on boot

    systemctl enable kerberosio.service

<a name="install-from-source"></a>
## Compile source

You can compile the machinery yourself. This will be the way to go if you would like to contribute to the kerberos project.

<a name="compile-from-source-on-arch-linux"></a>
### Compile on ArchLinux

Update the ArchLinux kernel

    pacman -Syyu

Install git, subversion, development tools (c++, cmake) and V4L utils.

    pacman -S git subversion cmake base-devel v4l-utils eigen ffmpeg curl

Go to home directory
	
	cd /home

Get the source code from github

	git clone https://github.com/kerberos-io/machinery kerberos-io

Compile kerberos

    cd kerberos-io && mkdir build && cd build
    cmake .. && make && make check && sudo make install

Enable the service to start on boot

    systemctl enable kerberosio.service
    
<a name="compile-from-source-on-raspbian"></a>
### Compile on Raspbian

Enable raspberry pi camera (if needed) and expand SD-card.

    sudo raspi-config
    
    -- expand SD-card
    -- enable camera module
    
Update the Raspbian kernel

    sudo apt-get update
    sudo apt-get upgrade

Install subversion, development tools (c++, cmake) and V4L utils.

    sudo apt-get install libav-tools cmake subversion dh-autoreconf libcurl4-openssl-dev

Go to home directory
	
	cd /home

Get the source code from github

	sudo git clone https://github.com/kerberos-io/machinery kerberos-io

Compile kerberos

    cd kerberos-io && sudo mkdir build && cd build
    cmake .. && make && make check && sudo make install
    
Enable the service to start on boot

    systemctl enable kerberosio.service

<a name="configure"></a>
##Configure

The configuration files can be found at **/etc/kerberosio/config**. By default the Raspberry Pi Camera module is set as capture device. You can update the **config.xml** file to change it to **USBCamera** or **IPCamera**. Images are stored in the **/srv/capture** directory; this location can be changed by editing the **io.xml** file.

<a name="run"></a>
##Run

After kerberos is installed a binary is available at **/usr/bin/kerberosio**. Just run following command in your terminal to start kerberosio.

    kerberosio
