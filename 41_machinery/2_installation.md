# Installation

* [Install from source](#install-from-source)
    * [Install on Arch Linux](#install-from-source-on-arch-linux)
        * [Auto start](#start-kerberos-on-boot-archlinux)

The machinery is already installed on the Kerberos image, however you can also install the machinery from source.

<a name="install-from-source"></a>
## Install from source

The machinery can be installed standalone.

<a name="install-from-source-on-arch-linux"></a>
### Install on ArchLinux

Update the ArchLinux kernel

    pacman -Syyu

Install git, subversion, development tools (c++, cmake) and V4L utils.

    pacman -S git subversion cmake base-devel v4l-utils eigen

Go to home directory
	
	cd /home

Get the source code from github

	git clone https://github.com/kerberos-io/machinery kerberos-io

Compile kerberos

    cd kerberos-io && mkdir build && cd build
    cmake .. && make && make check

Give rights to config files

    chmod -R 777 ../config

<a name="start-kerberos-on-boot-archlinux"></a>
#### Auto start

Create service file for kerberos

    nano /etc/systemd/system/kerberos.service

Copy and paste the configuration to the kerberos.service 

    [Unit]
    Description=Kerberos.io Video Surveillance
    
    [Service]
    Type=oneshot
    ExecStart=/home/kerberos-io/bin/kerberos

    [Install]
    WantedBy=multi-user.target

Enable the service to start on boot

    systemctl enable kerberos.service