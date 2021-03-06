<!DOCTYPE>
<HTML>
	<HEAD>
		<TITLE>Sensei QB8</TITLE>
		<LINK rel="stylesheet" href="/css/style.css" type="text/css">
    <LINK rel="stylesheet" href="style.css" type="text/css">
		<link rel="stylesheet" href="/css/jquery-ui.css">
		<script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
		<script src="/js/jquery-ui.js" type="text/javascript"></script>
		<script src="/js/index.js" type="text/javascript"></script>
		<script src="qb8.js" type="text/javascript"></script>
		<script src="video.js" type="text/javascript"></script>
		<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
		<meta name="mobile-web-app-capable" content="yes">
		<link rel="icon" href="favicon.ico" />

	</HEAD>
	<BODY class="main">
		<div id="container">
			<div id="left">
					<?php include "menu.html" ?>
					<div class="info" id="date">
						<i class="fa fa-clock-o" aria-hidden="true" title="CLOCK">	</i>
						<span class="value">--</span>
					</div>
					<div class="info" id="users">
						<a target="_blank" href="http://qb8/sensei-graph.php?title=&filter=clients&single=1&fill=0&last=60&type=column&unit=m&r=60">
						<i class="fa fa-user" aria-hidden="true" title="CLIENTS"></i></a>
						<span class="value">--</span>
					</div>
					<div class="info" id="cpuload">
						<a target="_blank" href="http://qb8/sensei-graph.php?title=&filter=cpu%20load&single=1&fill=0&last=60&type=spline&unit=h&r=60"><i class="fa fa-server" aria-hidden="true" title="CPU_LOAD"></i></a>
						<span class="value">--</span>
					</div>
			</div>

		  <div id="content">
        <div class="element" id="light">
					<a href="#" class="close">X</a>
          <img class="ico" src="ico/light.png">
          <h4>Light</h4>
          <div class="value"><span>--</span> <b>%</b></div>
					<div class="ext_value">Ext. <b>is</b> <span>--</span></div>
					<div style="clear: both;"></div>
					<div class="graph">
						<iframe  src="/sensei-graph.php?title=&filter=light&single=1&fill=0&last=60&type=area&unit=s&r=5"></iframe>
					</div>
					<div class="graph graph2">
						<iframe  src="/sensei-graph.php?title=&filter=light,is_day*100&single=1&fill=1&last=72&type=spline&unit=h&r=600"></iframe>
						<div style="clear: both;"></div>
					</div>
        </div>
        <div class="element" id="moisture">
					<a href="#"  class="close">X</a>
          <img class="ico" src="ico/moisture.png">
          <h4>Moisture</h4>
          <div class="value"><span>--</span> <b>%</b></div>
					<div class="ext_value"><b>Watered</b> <span>--</span></div>
					<div style="clear: both;"></div>
					<div class="graph">
						<iframe  src="/sensei-graph.php?title=&filter=moist&single=1&fill=0&last=600&type=area&unit=s5&r=10"></iframe>
					</div>
					<div class="graph">
						<iframe  src="/sensei-graph.php?title=&filter=moist&single=1&fill=1&last=72&type=spline&unit=h&r=600"></iframe>
						<div style="clear: both;"></div>
					</div>
        </div>
        <div class="element" id="humidity">
					<a href="#"  class="close">X</a>
          <img class="ico" src="ico/humidity.png">
          <h4>Humidity</h4>
          <div class="value"><span>--</span> <b>%</b></div>
					<div class="ext_value">Ext. <span>--</span> <b>%</b></div>
					<div style="clear: both;"></div>
					<div class="graph">
						<iframe  src="/sensei-graph.php?title=&filter=dht11 humidity&single=1&fill=0&last=600&type=area&unit=s5&r=10"></iframe>
					</div>
					<div class="graph graph2">
						<iframe  src="/sensei-graph.php?title=&filter=humidity&single=1&fill=1&last=72&type=spline&unit=h&r=600"></iframe>
						<div style="clear: both;"></div>
					</div>
        </div>
        <div class="element" id="temperature">
					<a href="#" class="close">X</a>
          <img class="ico" src="ico/temperature.png">
          <h4>Temperature</h4>
          <div class="value"><span>--</span> <b>C</b></div>
					<div class="ext_value">Ext. <span>--</span> <b>C</b></div>
					<div style="clear: both;"></div>
					<div class="graph">
						<iframe  src="/sensei-graph.php?title=&filter=DHT11 temp&single=1&fill=0&last=600&type=area&unit=s5&r=10"></iframe>
					</div>
					<div class="graph graph2">
						<iframe  src="/sensei-graph.php?title=&filter=dht11 temp, weather temp&single=1&fill=1&last=72&type=spline&unit=h&r=600"></iframe>
						<div style="clear: both;"></div>
					</div>
        </div>
				<div style="clear: both;"></div>
				<div class="buttons">
					<div class="button" id="R1">
						<img class="ico" src="ico/lamp-off.png">
	          <h4>Light 1</h4>
					</div>
					<!-- <div class="button" id="R2">
						<img class="ico" src="ico/lamp-off.png">
	          <h4>Light 2</h4>
					</div> -->
					<div class="button" id="R3">
						<img class="ico" src="ico/fan-off.png">
	          <h4>Fan OUT</h4>
					</div>
					<div class="button" id="R4">
						<img class="ico" src="ico/fan-off.png">
	          <h4>Fan IN</h4>
					</div>
					<div class="button" id="R6">
						<img class="ico" src="ico/humidifier-off.png">
	          <h4>Humidifer</h4>
					</div>
					<div class="button" id="R5">
						<img class="ico" src="ico/pump-off.png">
	          <h4>Pump</h4>
					</div>
					<div class="button" id="RGB_GREEN">
						<img class="ico" src="ico/rgb-off.png">
						<h4>RGB green</h4>
					</div>
					<div class="button" id="RGB_GROW">
						<img class="ico" src="ico/rgb-off.png">
						<h4>RGB grow</h4>
					</div>
					<div class="button" id="RGB_WHITE">
						<img class="ico" src="ico/rgb-off.png">
						<h4>RGB white</h4>
					</div>
				</div>
			<div id	="logline" onclick="$(this).toggleClass('zoom')">
				<a href="#"  class="close">X</a>
			</div>
				<div style="clear: both;"></div>
				<div id="snap">
					<img src="#"  onclick="$(this).parent().toggleClass('visible')">
					<div id="takesnap"><a href="/api/srv-sys-cmd.php?cmd=/home/sensei/video/snapshot.sh" target="hidden">
						<i class="fa fa-camera" aria-hidden="true"></i>
						</a></div>
				</div>
      </div>
    </div>
		<iframe id="hidden" name="hidden" src="">
	</BODY>
</HTML>
