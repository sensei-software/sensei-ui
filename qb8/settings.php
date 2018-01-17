<!DOCTYPE>
<HTML>
	<HEAD>
		<TITLE>Sensei QB8 - Settings</TITLE>
		<LINK rel="stylesheet" href="/css/style.css" type="text/css">
    <LINK rel="stylesheet" href="style.css" type="text/css">
		<link rel="stylesheet" href="/css/jquery-ui.css">
		<script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
		<script src="/js/jquery-ui.js" type="text/javascript"></script>
		<script src="/js/index.js" type="text/javascript"></script>
		<script src="settings.js" type="text/javascript"></script>

		<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">

	</HEAD>
	<BODY class="main">
		<div id="container">
			<div id="left">
				<?php include "menu.html" ?>
			</div>
		  <div id="content">
				<div id="settings" >
					<h1>Settings</h1>
					<div class="daynight element">
						<img class="icon" src="ico/daynight.png">
						<div class="day">
							Day starts at: &nbsp;
							<select id="day_start" name="day_start" class="time-hour">
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
							</select>
						</div>
						<br>
						<div class="night">
							Night starts at:
							<select id="night_start" name="night_start" class="time-hour">
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
							</select>
						</div>
						<div style="clear: both;"></div>
						<br>
					</div>
					<div class="cam element">
						<div>
							<i class="fa fa-camera" aria-hidden="true"></i>
							Snapshot freq. &nbsp;&nbsp; <input id="snap_freq" type="text" class="text" value="-"> min<br>
						</div>
						<div>
							<i class="fa fa-video-camera" aria-hidden="true"></i>
							Timelapse freq. &nbsp;&nbsp; <input id="timelapse_freq" type="text" class="text" value="-"> min<br>
						</div>
					</div>
					<div class="element" id="settings_light">
	          <img class="ico" src="ico/light.png">
	          <h4>Light</h4>
						<div>
							<img class="settings_icon" style="opacity: 0.3" src="ico/daynight.png">
							@DAY &nbsp;&nbsp;&nbsp; &gt;&nbsp;<input id="light_day" type="text" class="text" value="-"> %<br>
							@NIGHT &lt;&nbsp;<input id="light_night" type="text" class="text" value="-"> %
						</div>
						<hr>
						<div>
							<img class="settings_icon" src="ico/rgb-off.png">
							GROW &nbsp;&nbsp;# <input id="rgb_grow" type="text" style="width: 5.2em" class="text" disabled value="255 50 255"><br>
							GREEN &nbsp;# <input id="rgb_green" type="text" style="width: 5.2em" class="text" disabled value="0 25 0"><br>
						</div>

						<div style="clear: both;"></div>
	        </div>
					<div class="element" id="settings_humidity">
						<img class="ico" src="ico/humidity.png">
						<h4>Humidity</h4>
						<div>
							<img class="settings_icon"  style="opacity: 0.3" src="ico/daynight.png" >
							@DAY &nbsp;&nbsp;&nbsp; &gt;&nbsp;<input id="humidity_day" type="text" class="text" value="-"> %<br>
							@NIGHT &gt;&nbsp;<input id="humidity_night" type="text" class="text" value="-"> %
						</div>
						<hr>
						<div>
							<img class="settings_icon" src="ico/humidifier-off.png">
							Tollerance <input id="humidifier_tollerance" type="text" class="text" disabled value="0"> %<br>
							Stop fan <input id="humidifier_stopfan" style="margin-top: 0.5em" type="checkbox" disabled class="text"><br>
						</div>

						<div style="clear: both;"></div>
					</div>
	        <div class="element" id="settings_moisture">
	          <img class="ico" src="ico/moisture.png">
	          <h4>Moisture</h4>
						<div>
							<img class="settings_icon"  style="opacity: 0.3" src="ico/daynight.png" >
							@DAY &nbsp;&nbsp;&nbsp; &gt;&nbsp;<input id="moisture_day" type="text" class="text" value="-"> %<br>
							@NIGHT &gt;&nbsp;<input id="moisture_night" type="text" class="text" value="-"> %
						</div>
						<hr>
						<div>
								<img class="settings_icon" src="ico/pump-off.png">
							N cycles &nbsp;&nbsp;&nbsp;&nbsp;
							<select id="pump_cycles" name="pump_cycles" class="time-hour">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
							 / day<br>
							Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id="pump_secs" name="pump_secs" type="text" class="text" value="-"> sec<br>
						</div>
						<div style="clear: both;"></div>
	        </div>
	        <div class="element" id="settings_temperature">
	          <img class="ico" src="ico/temperature.png">
	          <h4>Temperature</h4>
						<div>
							<img class="settings_icon"  style="opacity: 0.3" src="ico/daynight.png" >
							@DAY &nbsp;&nbsp;&nbsp; &lt;&nbsp;<input id="temperature_day" type="text" class="text" value="-"> °C<br>
							@NIGHT &lt;&nbsp;<input id="temperature_night" type="text" class="text" value="-"> °C
						</div>
						<hr>
						<div>
							<img class="settings_icon" src="ico/fan-off.png">
							Frequency &nbsp;&nbsp; <input id="fan_freq" type="text" class="text" value="-"> min<br>
							Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input id="fan_secs" type="text" class="text" value="-"> sec<br>
						</div>
						<div style="clear: both;"></div>
					</div>
				<br>
      	<div style="clear: both;"></div>
				<input type="button" class="btn" id="save" value="Save settings" onclick="saveSettings()" >
				<div style="clear: both;"></div>
				<br>
			</div>
			<div style="clear: both;"></div>
    </div>
		<iframe id="hidden" name="hidden" src="">
	</BODY>
</HTML>
