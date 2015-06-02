# NAS

By default images are stored on the SD card of the Raspberry Pi, in the folder **/home/kerberos-web/public/capture**. However it's also possible to store the images directly on a NAS (e.g. WD MyBook). To achieve this, you will need to do some minimal modifications to the Kerberos image. 

## Let's get started

First you will need to connect to the Raspberry Pi, you can find a how to **[on our FAQ page](/1.0.0/FAQ#how-to-access-the-pi)**.

Next you will need to **mount the NAS to the filesystem** of your Rapsberry Pi. In order to make a permanent mount you need to **edit** the **fstab file**.

    nano /etc/fstab

Add following line (replace variables **with your own credentials**):

    //ip_address_to_your_nas/directory_on_your_nas /home/kerberos-web/public/capture cifs username=user_on_your_nas,password=password_for_your_nas,iocharset=utf8,file_mode=0777,dir_mode=0777 0 0

Mount the NAS

    mount -a

Check if the mount was **successful**, you should see the already existing content on your referred NAS directory.

    cd /home/kerberos-web/public/capture && ls -l

And *that's it*. From now the machinery will store its images directly on your NAS, and the web interface will visualize them.