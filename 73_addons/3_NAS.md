# NAS

By default images are stored on the SD card of the Raspberry Pi, in the folder **/etc/opt/kerberosio/capture**. However it's also possible to store the images directly on a NAS (e.g. WD MyBook). To achieve this, you will need to do some minimal modifications. 

## Let's get started

You will need to **mount the NAS to the filesystem** of your Rapsberry Pi. In order to make a permanent mount you need to **edit** the **fstab file**. The approach for KiOS is slightly different.

### KiOS

Before you can add your NAS to KiOS, you will need to modify the **/data/etc/os.conf** file. By default the root partition is **read-only**, therefore you will need to change it to **read-write**. To do this you will need to activate **os_debug** option.

    os_debug="true"
    
After you've changed the value to **true**, you need to reboot the system. You will see see that the root partition is now **writeable**, and you're able to modify the fstab file.

    nano /etc/fstab

Add following line (replace variables **with your own credentials**):

    //ip_address_to_your_nas/directory_on_your_nas /data/machinery/capture cifs username=user_on_your_nas,password=password_for_your_nas,iocharset=utf8,file_mode=0777,dir_mode=0777 0 0

Mount the NAS

    mount -a

Check if the mount was **successful**, you should see the already existing content on your referred NAS directory.

    cd /data/machinery/capture && ls -l

### Other 

    nano /etc/fstab

Add following line (replace variables **with your own credentials**):

    //ip_address_to_your_nas/directory_on_your_nas /etc/opt/kerberosio/capture cifs username=user_on_your_nas,password=password_for_your_nas,iocharset=utf8,file_mode=0777,dir_mode=0777 0 0

Mount the NAS

    mount -a

Check if the mount was **successful**, you should see the already existing content on your referred NAS directory.

    cd /etc/opt/kerberosio/capture && ls -l

And *that's it*. From now the machinery will store the images directly on your NAS, and the web interface will visualize them.