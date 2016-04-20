# TCP Listener

One of the addons you can use in combination with Kerberos.io is a TCP Listener. The TCP listener can execute a specific action when it received a TCP packet from Kerberos.io (TCP Client).

## Examples

### Text-To-Speech

You can use **nodejs** to build a simple TCP server, this is a lot easier than if we would have to do it in C; but ofcourse that's also possible. A cool feature would be to use the **say.js** library. You can use **say.js** on OSX/Linux to execute speech to text. So you could send a message from the Kerberos.io instance to the node TCP server, and on receiving the message you could make your TCP server speak.

For example you can configure the Kerberos.io TCP client with a message "There's someone at the frontdoor". When Kerberos.io detects something it will execute the TCP client and send a TCP packet - which includes the message - to the predefined IP address of the TCP server, afterwards the TCP server will use the say.js library to actually say the message. 

<iframe src="//player.vimeo.com/video/122785370?autoplay=0&color=943633" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width:100%; height: 400px;"></iframe>

Install npm

	npm install say date-utils

Create a new node file

    nano listener.js

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

Run script

    node listener.js
    
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
