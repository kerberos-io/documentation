# TCP Listener

One of the addons you can use in combination with Kerberos is a TCP Listener. The TCP listener can execute a specific action when it received a TCP packet from Kerberos (TCP Client).

## Examples

### Text-To-Speech

You can use node to build a simple TCP server, this is a lot easier than if we would have to do it in C; but ofcourse that's also possible. A cool feature would be to use the **say.js** library. You can use say.js on OSX/Linux to execute speech to text. So you could send a message from the Kerberos instance to the node TCP server, and on receiving the message you could make your TCP server speak.

For example you can configure the Kerberos TCP client with a message "There's someone at the frontdoor". When Kerberos detects something it will execute the TCP client and send a TCP packet - which includes the message - to the predefined IP address of the TCP server, afterwards the TCP server will use the say.js library to actually say the message. 

<iframe src="//player.vimeo.com/video/122785370?autoplay=0&color=943633" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width:100%; height: 400px;"></iframe>

You could place another Raspberry Pi in your living room, which would run a TCP server with node and with some speakers attached; see the configuration below. But you can also use your local working station, like I've did in the video above.

    cd /home && mkdir tcp-client && cd tcp-client

Install the festival library and voice package

	pacman -S festival festival-english
	pacman -S alsa-utils

Update the festival.scm file, add following lines at the end of the file */usr/share/festival/festival.scm*.

	(Parameter.set 'Audio_Method 'Audio_Command)
	(Parameter.set 'Audio_Command "aplay -q -c 1 -t raw -f s16 -r $SR $FILE")

Don't forget to install say and time first.

	npm install say date-utils

Create a new node file

    nano kerberos-listener.js

and copy-paste the code below

    // Import libraries
    var net = require('net');
    var say = require('say');
    require('date-utils');

    // Variables
    var listenerPort = 1337;
    var time1 = new Date();

    net.createServer(function (socket)
    {
        // Handle incoming messages from the magnet controller.
        socket.once('data', function (data)
        {
            var time2 = new Date();
            var timeBetween = time1.getSecondsBetween(time2);
            if(timeBetween > 30)
            {
                say.speak('Victoria', data);
            }

            time1 = time2;
        });

    }).listen(listenerPort);

    // Put a friendly message on the terminal of the server.
    console.log("Kerberos.io listener running at port 1337\n");

### Auto-start tcp listener

Create a new service file.

    nano /etc/systemd/system/kerberos-listener.service

Copy and paste following configuration in the service file.

    [Unit]
    Description=Kerberos listen for tcp packets
    [Service]
    Type=oneshot
    ExecStart=/usr/bin/node /home/tcp-client/kerberos-listener.js &
    [Install]
    WantedBy=multi-user.target

Activate the service file.

    systemctl enable kerberos-listener.service

### Pushbullet notifications

You can expand the Text-To-Speech feature (described above), with pushbullet notifications. Pushbullet is a free notifcation service, which you can use to send messages to your devices; smartphone, tablet, and/or workingstation. You can download the pushbullet node library with **npm**, and use it in the TCP listener.

    npm install pushbullet

When the library is installed correctly, you can use following code in the TCP listener.

    var PushBullet = require('pushbullet');

    var pusher = new PushBullet('your key');

     pusher.devices(function(error, response)
     {
         var devices = response.devices;
         devices.forEach(function(device)
         {
             pusher.note(device.device_iden, "Kerberos.io: " + data.toString(), data.toString());
         });
     });
