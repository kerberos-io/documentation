# Installation

* [Install from package manager](#install-from-package-manager)
    * [Install on Arch Linux](#install-on-arch-linux)
    * [Install on Raspbian](#install-on-raspbian)
* [Compile from source](#compile-from-source)
    * [Compile on Arch Linux](#compile-from-source-on-arch-linux)
        * [Auto start](#start-kerberos-on-boot-archlinux)
    * [Compile on Raspbian](#compile-from-source-on-raspbian)

The machinery is already installed on the Kerberos image, however you can also install the machinery from source.

<a name="install-from-package-manager"></a>
## Install from package manager

<a name="install-on-arch-linux"></a>
### Install Arch Linux

    todo..

<a name="install-on-raspbian"></a>
### Install on Raspbian

Add kerberos apt repository

    sudo echo 'http://apt.kerberos.io/ / >> /etc/apt/sources.list'

Update apt
    
    sudo apt-get update

Install kerberosio

    sudo apt-get install kerberosio

Force kerberosio to start on boot

    service kerberosio enable

<a name="install-from-source"></a>
## Compile source

The machinery can be installed standalone.

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

<a name="start-kerberos-on-boot-archlinux"></a>
#### Auto start

Create service file for kerberos

    nano /etc/systemd/system/kerberos.service

Copy and paste the configuration to the kerberos.service 

    [Unit]
    Description=Kerberos.io Video Surveillance
    
    [Service]
    Type=oneshot
    ExecStart=/usr/bin/local/kerberosio

    [Install]
    WantedBy=multi-user.target

Enable the service to start on boot

    systemctl enable kerberos.service
    
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