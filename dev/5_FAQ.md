# FAQ

The FAQ, Frequently Asked Questions, page contains **technical solutions** for common problems concerning the installation of Kerberos. This page does **NOT** contain non-technical questions and answers; The Raspberry Pi doesn't turn on, I don't have WIFI access, etc. Therefore you can access our [**knowledge base**](https://kerberosio.zendesk.com).

* [How to expand SD card root partition](#expand-sd-card)
    * [Arch Linux](#expand-sd-card-archlinux)
* [How to backup SD card](#backup-sd-card)
* [How to setup WIFI connection on Raspberry Pi](#setup-wifi)
* [How to enable Raspberry Pi Camera Module](#how-to-enable-camera-module)
    * [Arch Linux](#how-to-enable-camera-module-archlinux)
* [Clean up disk and memory space](#clean-up-disk)

<a name="expand-sd-card"></a>
## How to expand SD card root partition

<a name="expand-sd-card-archlinux"></a>
### Arch Linux (Raspberry Pi A, B, B+)

After logging in you view the status of filesystem (the output can be different):

    [root@alarmpi build]# df -h
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/root       1.7G  1.6G     0 100% /
    devtmpfs        214M     0  214M   0% /dev
    tmpfs           218M     0  218M   0% /dev/shm
    tmpfs           218M  312K  218M   1% /run
    tmpfs           218M     0  218M   0% /sys/fs/cgroup
    tmpfs           218M     0  218M   0% /tmp
    /dev/mmcblk0p1   90M   27M   64M  30% /boot
    tmpfs            44M     0   44M   0% /run/user/0

Using the command fdisk will edit the filesystem /dev/mmcblk0:

    [root@alarmpi ~]# fdisk /dev/mmcblk0
    Welcome to fdisk (util-linux 2.23.1).
    Changes will remain in memory only, until you decide to write them.
    Be careful before using the write command.
     
    Command (m for help):

    List the information and delete partition 2:

    Command (m for help): p

    Disk /dev/mmcblk0: 7.2 GiB, 7746879488 bytes, 15130624 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0x417ee54b

    Device         Boot  Start     End Sectors  Size Id Type
    /dev/mmcblk0p1        2048  186367  184320   90M  c W95 FAT32 (LBA)
    /dev/mmcblk0p2      186368 3667967 3481600  1.7G  5 Extended
    /dev/mmcblk0p5      188416 3667967 3479552  1.7G 83 Linux

    Command (m for help): d
    Partition number (1,2,5, default 5): 5

    Partition 5 has been deleted.

    Command (m for help): 

    Command (m for help): d
    Partition number (1,2,5, default 5): 2

    Partition 2 has been deleted.

    Command (m for help): 

Create a new extended partition a logical volume:

    Command (m for help): n
    Partition type:
       p   primary (1 primary, 0 extended, 3 free)
       e   extended
    Select (default p): e
    Partition number (2-4, default 2): 2
    First sector (186368-15564799, default 186368): (press enter)
    Using default value 186368
    Last sector, +sectors or +size(186368 - 15564799, default 15564799): (press enter)
    Using default value 15564799
    Partition 2 of type Extended and of size 7.3 GiB is set
     
    Command (m for help): n
    Partition type:
       p   primary (1 primary, 1 extended, 2 free)
       l   logical (numbered from 5)
    Select (default p): l
    Adding logical partition 5
    First sector (188416-15564799, default 188416):
    Using default value 188416
    Last sector, +sectors or +(188416-15564799, default 15564799):
    Using default value 15564799
    Partition 5 of type Linux and of size 7.3 GiB is set

Check whether top block starts in the same place as the original (start)

    Command (m for help): p
 
    Disk /dev/mmcblk0: 7969 MB, 7969177600 bytes, 15564800 sectors
    Units = sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disk label type: dos
    Disk identifier: 0x00057540
     
            Device Boot      Start         End      Blocks   Id  System
    /dev/mmcblk0p1            2048      186367       92160    c  W95 FAT32 (LBA)
    /dev/mmcblk0p2          186368    15564799     7689216    5  Extended
    /dev/mmcblk0p5          188416    15564799     7688192   83  Linux
     
    Command (m for help):

If it starts again (in this case on 186368 p2 a 188416 p5) write changes and reboot.

    Command (m for help): w
    The partition table has been altered!
     
    Calling ioctl() to re-read partition table.
     
    WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
    The kernel still uses the old table. The new table will be used at
    the next reboot or after you run partprobe(8) or kpartx(8)
    Syncing disks.
    [root@alarmpi ~]# reboot

After booting the system we online enlarge root partitions

    [root@alarmpi ~]# resize2fs /dev/mmcblk0p5
    resize2fs 1.42.8 (20-Jun-2013)
    Filesystem at /dev/mmcblk0p5 is mounted on /; on-line resizing required
    old_desc_blocks = 1, new_desc_blocks = 1
    The filesystem on /dev/mmcblk0p5 is now 1922048 blocks long.

Check and it is done :-)
    
    [root@alarmpi ~]# df -h
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/root       7.3G  447M  6.5G   7% /
    devtmpfs         83M     0   83M   0% /dev
    tmpfs           231M     0  231M   0% /dev/shm
    tmpfs           231M  236K  231M   1% /run
    tmpfs           231M     0  231M   0% /sys/fs/cgroup
    tmpfs           231M     0  231M   0% /tmp
    /dev/mmcblk0p1   90M   24M   67M  27% /boot

### Arch Linux (Raspberry Pi 2)

After logging in you view the status of filesystem (the output can be different):

    [root@alarmpi ~]# df -h
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/root       3.2G  2.8G  161M  95% /
    devtmpfs        427M     0  427M   0% /dev
    tmpfs           431M     0  431M   0% /dev/shm
    tmpfs           431M  392K  431M   1% /run
    tmpfs           431M     0  431M   0% /sys/fs/cgroup
    tmpfs           431M     0  431M   0% /tmp
    /dev/mmcblk0p1  100M   18M   83M  18% /boot
    tmpfs            87M     0   87M   0% /run/user/0

Using the command fdisk will edit the filesystem /dev/mmcblk0:

    [root@alarmpi ~]# fdisk /dev/mmcblk0
    Welcome to fdisk (util-linux 2.23.1).
    Changes will remain in memory only, until you decide to write them.
    Be careful before using the write command.
     
    Command (m for help):

    List the information and delete partition 2:

    Command (m for help): p

    Disk /dev/mmcblk0: 7.2 GiB, 7746879488 bytes, 15130624 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0x4bce3dec

    Device         Boot  Start     End Sectors  Size Id Type
    /dev/mmcblk0p1        2048  206847  204800  100M  c W95 FAT32 (LBA)
    /dev/mmcblk0p2      206848 7000000 6793153  3.2G 83 Linux

    Command (m for help): d
    Partition number (1,2,5, default 5): 2

    Partition 2 has been deleted.

    Command (m for help): 

Create a new extended partition a logical volume:

    Command (m for help): n
    Partition type:
       p   primary (1 primary, 0 extended, 3 free)
       e   extended
    Select (default p): p
    Partition number (2-4, default 2): 
    First sector (206848-15130623, default 206848): 
    Last sector, +sectors or +size{K,M,G,T,P} (206848-15130623, default 15130623): 

    Created a new partition 2 of type 'Linux' and of size 7.1 GiB.

Check whether top block starts in the same place as the original (start)

    Command (m for help): p
 
    Disk /dev/mmcblk0: 7.2 GiB, 7746879488 bytes, 15130624 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: dos
    Disk identifier: 0x4bce3dec

    Device         Boot  Start      End  Sectors  Size Id Type
    /dev/mmcblk0p1        2048   206847   204800  100M  c W95 FAT32 (LBA)
    /dev/mmcblk0p2      206848 15130623 14923776  7.1G 83 Linux
     
    Command (m for help):

If it starts again (in this case on 186368 p2 a 188416 p5) write changes and reboot.

    Command (m for help): w
    The partition table has been altered!
     
    Calling ioctl() to re-read partition table.
     
    WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
    The kernel still uses the old table. The new table will be used at
    the next reboot or after you run partprobe(8) or kpartx(8)
    Syncing disks.
    [root@alarmpi ~]# reboot

After booting the system we online enlarge root partitions

    [root@alarmpi ~]# resize2fs /dev/mmcblk0p2
    resize2fs 1.42.12 (29-Aug-2014)
    Filesystem at /dev/mmcblk0p2 is mounted on /; on-line resizing required
    old_desc_blocks = 1, new_desc_blocks = 1
    The filesystem on /dev/mmcblk0p2 is now 1865472 (4k) blocks long.

Check and it is done :-)
    
    [root@alarmpi ~]# df -h
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/root       7.0G  2.8G  3.9G  43% /
    devtmpfs        427M     0  427M   0% /dev
    tmpfs           431M     0  431M   0% /dev/shm
    tmpfs           431M  392K  431M   1% /run
    tmpfs           431M     0  431M   0% /sys/fs/cgroup
    tmpfs           431M     0  431M   0% /tmp
    /dev/mmcblk0p1  100M   18M   83M  18% /boot
    tmpfs            87M     0   87M   0% /run/user/0

<a name="backup-sd-card"></a>
## How to backup SD card

You can backup your SD card, by typing following command in your terminal. This can be helpful, if you want to restore it later; for example when your SD card is broken.

    sudo dd if=/dev/disk2 of=~/Desktop/kerberos-io.img bs=1m

<a name="setup-wifi"></a>
## How to setup WIFI connection

### Installed Kerberos.io from image

When kerberos is installed with the image, you can edit the wireless.conf file on the SD card. Insert the SD card in your workstation and open the file **/boot/wireless.conf**. You will see a similar config like below, edit the ESSID property with the name of your WIFI connection and the property Key with the WIFI password.

    Description='A simple WPA encrypted wireless connection'

    Interface=wlan0
    Connection=wireless
    Security=wpa
    ESSID='network-name'
    Key='plain-text-password'

    IP=static
    Address='192.168.0.x/24'
    Gateway='192.168.0.1'
    DNS=('192.168.0.1')

    # Uncomment this if your ssid is hidden
    #Hidden=yes


### Installed Kerberos.io from source

#### Archlinux

We will use the netctl tool for this. First copy the wireless-wpa example from the examples directory to the boot directory. 

    cp /etc/netctl/examples/wireless-wpa /boot/wireless.conf

Make a symbol link to the netctl homedirectory and activate the netctl profile, so the WIFI connection will be made on boot up.

    ln -s /boot/wireless.conf /etc/netctl/wlan
    systemctl enable netctl-auto @wlan0.service

Edit the **/boot/wireless.conf** file with your WIFI credentials, please note that moving the wireless.conf to the /boot directory also makes us possible to change the credentials directly from the SD card itself. So you don't need to turn on the Raspberry Pi if you want to change the credentials.

The last step is to disable power management: edit the config file,
    
    nano /etc/modprobe.d/8192cu.conf

and copy-paste the line below.
        
    options 8192cu rtw_power_mgnt=0 rtw_enusbss=0

Arch Linux shows strange behaviour when enabling WLAN. For some reason, cron will be triggered every minute and will consume a lot of CPU power. This problem has something to do with the timeserver ntpd. A simple fix to avoid this issue is to install the fake hardware clock. First you will need to install fake-hwclock.

    pacman -S fake-hwclock 

Enable fake-hwclock on startup.

    systemctl enable fake-hwclock fake-hwclock-save.timer
    systemctl start fake-hwclock 

Install timeserver client

    pacman -S ntp

Enable ntp on startup

    systemctl enable ntpd.service

<a name="how-to-enable-camera-module"></a>
## How to enable Raspberry Pi Camera Module 

<a name="how-to-enable-camera-module-archlinux"></a>
### Arch Linux

To enable the camera module, you will need to add these lines to your /boot/config.txt. Note that this is already done when you've installed Kerberos by transferring image.

    gpu_mem=128
    start_file=start_x.elf
    fixup_file=fixup_x.dat
    disable_camera_led=1

<a name="clean-up-disk"></a>
## Clean up disk and memory space

The SD card of your Raspberry Pi, has limited space, therefore we need some process to clean up the images taken by the machinery.

    mkdir /home/bash
    nano /home/bash/run.sh

Copy paste the bash script

    #!/bin/bash

    ################################################################
    # Check if memory is more than 70%, if so refresh nodejs scripts
    ##
    if [[ $(free | grep Mem | awk -F' ' '{ print $3/$2*100 }') > 70.0 ]];
    then
            /usr/bin/forever restartall ;
    fi;

    #############################################
    # Only keep images of last 3 days on sd-card.
    ##
    find /home/kerberos-web/public/capture/ -type f -name '*.jpg' -mtime +1 -exec rm {} \;

    ##############################################################
    # Check if disk size is more than 95%, if so remove some files
    # from the capture directory.
    ##
    if [[ $(df -h | grep /dev/root | awk -F' ' '{ print $5/1 }' | tr ['%'] ["0"]) -gt 95 ]];
    then
            rm -f $( ls -d -1tr /home/kerberos-web/public/capture/* | head -n 500);
    fi;

Give rights to bash script

    chmod +x /home/bash/run.sh
    chmod 755 /home/bash/run.sh

Start cronjob that will run this bash script

    crontab -e

Add following line

    */10 * * * * /bin/sh /home/bash/run.sh 