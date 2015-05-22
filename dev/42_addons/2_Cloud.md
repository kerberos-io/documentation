# Cloud

Once Kerberos is installed on the Raspberry Pi, the machinery and webinterface are available. A user can browse to the IP address (e.g. http://192.168.0.13) of the Raspberry Pi to configure the machinery and view the events that were taken by the machinery. To browse to the Raspberry Pi, a user has to be in the same internal network as where the Raspberry Pi is located; otherwise the webpage wouldn't be accessible. To make the Raspberry Pi accessible for the public, you will need to do some additional configurations on your router.

Another solution would be to use the cloud service that Kerberos is offering; A user pays a monthly fee to use the Kerberos cloud service. The events that are triggered by the machinery will be sent to our service, and are accessible by using the Kerberos cloud application. You can attach multiple Kerberos instances to the cloud service with only one license.

## Video

<iframe src="https://player.vimeo.com/video/121532472?autoplay=0&color=943633#t=13m32s" style="width:100%; height: 400px;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## How it works?

Kerberos is using AWS S3 to store their images. When the machinery detected something, it will save an image to disk, and maybe trigger some other IO devices. In its turn the filewatcher, Grunt, will pick up those new files and push them to the appropriate S3 bucket, by using your credentials; the credentials you've received from the cloud application, have only permissions to write and list objects to/from your bucket.

When the file (image) is stored in the bucket, AWS Lambda will do some validation and post processing. Lambda will check if the file is realy an image, if the size is not to big, and do some post processing like facerecognition. If the image is valid, the image will be copied to our production bucket, and additional information is stored in dynamoDB.

The cloud application is attached to the production bucket, so only images that are verified will show up in the cloud application. When a user accesses the cloud application, the images from the production bucket are listed. Images that are loaded in the browser will be signed, for a specific time, before they are actually rendered. The signing will expire after 100 seconds.

## Install from source

If you installed Kerberos from the image, you don't need to follow this tutorial as the service is installed natively.

    cd /home

Create a new directory

    mkdir cloud && cd cloud

Checkout sync repository

    git clone https://github.com/kerberos-io/sync-s3 .

Install node plugins

    npm install
    npm install -g grunt-cli
    npm install -g forever

## Auto-start grunt

Create service file for cloud

    nano /etc/systemd/system/cloud.service

Copy and paste the configuration to the cloud.service 

    [Unit]
    Description=Sync kerberos.io events

    [Service]
    Type=oneshot
    ExecStart= /usr/bin/forever /usr/bin/grunt --gruntfile /home/cloud/Gruntfile.js sync --force &

    [Install]
    WantedBy=multi-user.target

Enable the service to start on boot

    systemctl enable cloud.service