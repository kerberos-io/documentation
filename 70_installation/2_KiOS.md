#KiOS

* [Easy Installation](#installer)
* [Advanced Installation](#advanced)
	* [Download the .img](#download)
	* [Flash the .img to a SD card](#flash)
	* [Network configuration](#network)
* [Power on the Raspberry Pi](#poweron)
* [Access the Raspberry Pi with SSH](#access)

## Introduction 

[KiOS](https://github.com/kerberos-io/kios) (Kerberos.io Operating System) is our own **custom linux OS**, which runs Kerberos.io out-of-the-box. KiOS is **installed like every other OS** for the Raspberry Pi, you need to flash the OS (.img) to a SD card. If you want to get Kerberos.io up and running at a short time frame, this is the **most simple** and **basic** installation procedure.

You can install KiOS by using our **own installer**, which gives you a nice GUI that will handle the flashing for you, or you can do the flashing **yourself** by using your terminal or another GUI.

<button id="installer-btn" class="btn" style="width: 49%; height: 50px; background-color: #943633; font-size: 16px; color: #fff; outline: 0;">Easy installation</button> 
<button id="advanced-btn" class="btn" style="width: 49%; height: 50px; background-color: #ddd; font-size: 16px; color: #fff; outline: 0;">Advanced installation</button> 

<div id="installer">
	<h2>Easy Installation</h2>
	
	 <p>
        Installing <b>Kerberos.io</b> to your IoT device, has never been so easy. By using our <b>cross-platform</b> installer, you can run a <b>fully configured</b> video surveillance system within <b>3 minutes</b>. Indeed, we also think that's awesome!
    </p>

	<img src="/images/kios-install.gif" style="border-radius: 0; margin: 0; width: 100%;"/>

	<div id="bottom-download" class="btn-group" style="margin: 20px 0; width: 100%">
        <a class="current-version btn btn-success btn-lg" style="color: #fff; margin-bottom: 5px;font-size: 18px; width: 90%;" data-track-id="jumbotron button" role="button"></a>
                        <button type="button" class="btn btn-success btn-lg dropdown-toggle" style="font-size: 18px; width: 10%;"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="caret"></span>
                            <span class="sr-only">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu" style="width:100%; margin: 0; padding:0"></ul>
                    </div>

	<p>By using the KiOS installer, you'll get <b>an easy to use GUI</b> which allows you to configure and flash KiOS to your SD card. Just download the installer, select a version, specify your network configurations, select your SD card and press the flash button; it can't be easier.</p>
	     
	    <script type="text/javascript">
		    require([_jsBase + 'main.js'], function(common)
		    {
		        require(["jquery", "//kerberos.io/etcher-versions.js", "//kerberos.io/sniffer.min.js"], function($)
		        {
		            $(function()
		            {
		            	$("#advanced-btn").click(function(){
		            		$("#installer-btn").css({"background-color":"#ddd"});
		            		$("#advanced-btn").css({"background-color":"#943633"});
		            		$("#installer").hide();
		            		$("#advanced").show();
		            	})

		            	$("#installer-btn").click(function(){
		            		$("#installer-btn").css({"background-color":"#943633"});
		            		$("#advanced-btn").css({"background-color":"#ddd"});
		            		$("#advanced").hide();
		            		$("#installer").show();
		            	})

						// Specify current version
			            var platform = window.Sniff.os.name;
			            if(platform === "win")
			            {
			                platform += "64";
			            }
			            else if (platform !== "osx")
			            {
			                platform = "linux64";
			            }

						var currentVersion = $.grep(versions, function(el){
						    return el.os == platform;
						});

						if(currentVersion.length > 0)
						$(".current-version").html(currentVersion[0].long_name);
						$(".current-version").attr('href', currentVersion[0].href);

						// Fill dropdowns
						var dropdown = $(".dropdown-menu");
						for(var i = 0; i < versions.length; i++)
						{
						    dropdown.append('<li><a href="' + versions[i].href + '">' + versions[i].name + '</a></li>');
						}
		            });
		        });
		    });
		</script>
</div>
<div id="advanced" style="display: none;">
	<h2>Advanced Installation</h2>

	If you prefer **the hard way**, you can also flash **Kerberos.io** to your SD card manually. So it's not a problem if you don't want to use the KiOS installer. It goes as follows: download the KiOS .img yourself, flash it to your SD card with your terminal and edit some configuration files in the boot directory.<br/><br/>

	<iframe src="https://player.vimeo.com/video/164054497?autoplay=0&color=943633" style="width:100%; height: 400px;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

	<a name="download"></a>
	<h2>1. Download the .img</h2>

	All releases are stored on the KiOS <a href="https://github.com/kerberos-io/kios"><b>Github repository</b></a>, each release contains several images (for every Raspberry Pi version a different image is created). It's important to download the correct image; installing an image for another Raspberry Pi version will not work. After downloading, make sure to unzip the release.

	<a href="https://github.com/kerberos-io/kios/releases"><img alt="Download KiOS" src="2_kerberos-image.png"/></a>

	<a name="flash"></a>
	<h2>2. Flash the .img to a SD card</h2>

	Ensure that you have inserted the SD card, that you wish to clone, into the SD card reader. If you dont have an internal SD card reader, you will need to plug in an external SD card reader via a USB socket.

	<h3>OSX</h3>

	<ul>
	<li>Download and install <a href="https://mega.co.nz/#!PZc2HTTQ!eD9dtFpoKnbZqP1hkvrv43_Pvc9xadMVxRP2K-M8n88">RPi-sd card builder v1.2</a>.</li>
	<li>Run the app.</li>
	<li>Select the kios-x-y.img.</li>
	<li>Select your SD card.</li>
	<li>Insert your password, as the program will need administrator privileges.</li>
	<li>The system will start transferring the image to your SD card.</li>
	<li>A confirmation is shown that the transferred is completed and SD card unmounted.</li>
	</ul>

	<h3>Windows</h3>

	<ul>
	<li>Download and install <a href="http://sourceforge.net/projects/win32diskimager/files/latest/download">Win32DiskImager</a>.</li>
	<li>Select the KiOS image and the drive letter of the SD card.</li>
	</ul>

	<h3>Linux</h3>

	<h4>Format SD card</h4>

	Select SD card and delete all partitions with gparted

	<pre><code>gparted</code></pre>

	To format the SD card, enter the following command:

	<pre><code>sudo mkdosfs -F 16 -v /dev/sdb -I</code></pre>

	<h4>Transfer image to your SD card</h4>

	In Terminal, enter the following command ensuring that you identify the correct destination disc.

	<pre><code>sudo dd if="kios-x-y.img" of=/dev/sdb bs=2M</code></pre>

	<a name="network"></a>
	<h2>3. Network configuration</h2>

	After the image has been transferred, you can plug the SD card in to your Raspberry Pi and everything will work magically. By default the KiOS image will require an ethernet connection and use DHCP to give you a dynamic IP-address. However if you want to have a <b>static IP-address</b> or/and use a <b>wireless connection</b>, you'll need to do a small configuration. Insert the SD card into your working station and open the SD card, you'll see two files <b>static_ip.conf</b> and <b>wireless.conf</b>.

	<h3>Static IP-address</h3>

	Open and edit the file <b>static_ip.conf</b>.

	<pre><code>#####################################################################
# Enter the IP-address you want to have, followed by the subnet mask
# e.g. 192.168.0.10/24

static_ip=""

#####################################################################
# Enter the Gateway and DNS, this will be your router in most cases
# e.g. 192.168.0.1

static_gw=""
static_dns=""</code></pre>

	<h3>Wireless connection</h3>

	Open and edit the file <b>wireless.conf</b>. Fill-in your WIFI credentials: <b>SSID</b> the name of your wireles network, and <b>PSK</b> the password of your wireless network.

	<pre><code>update_config=1
ctrl_interface=/var/run/wpa_supplicant

network={
	scan_ssid=1
	ssid=""
	psk=""
}</code></pre>
</div>

<a name="poweron"></a>
<h2>Power on the Raspberry Pi</h2>

When the installation is completed, you can <b>plug the SD card</b> into your Raspberry Pi. From this point KiOS will boot the kernel and re-partition your SD-card; Please note that the first time you boot KiOS it can take about 2 mins before the system is operational. When KiOS is ready you can <b>open your favorite browser</b> and type in the IP address of your Raspberry Pi. This will open the Kerberos.io login page, which you can <b>access</b> with the username: <b>root</b> and password: <b>root</b>.

![Login page kerberos.io webinterface](1_how-to-access.png)

<a name="access"></a>
<h2>Access the Raspberry Pi with SSH</h2>

To use Kerberos.io you only need access to the webinterface, however you can also <b>access the system with SSH</b>.

<pre><code>Cedrics-Mac-mini:build cedricverst$ ssh root@192.168.0.12
Welcome to kios-79e30bbb!
[root@kios-79e30bbb ~]# </code></pre>

Note that by default no root password is set, you can define a password in the <b>/data/etc/kios.conf</b> file.

<pre><code>[root@kios-79e30bbb ~]# nano /data/etc/kios.conf
[root@kios-79e30bbb ~]# reboot</code></pre>

Add your password, save the file and reboot the system. 