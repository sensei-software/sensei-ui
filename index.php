<?php require "config.php" ?>
<!DOCTYPE>
<HTML>
	<HEAD>
		<TITLE>Sensei</TITLE>
		<LINK rel="stylesheet" href="/css/style.css" type="text/css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
		<script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
		<script src="/js/jquery-ui.js" type="text/javascript"></script>
		<script src="/js/index.js" type="text/javascript"></script>
	</HEAD>
	<BODY class="main">
		<div id="container">
			<div id="menu">
				<img align="left" id="logo" src="im/sensei.png" class="logo">
				<div id="accordion">
					<h3>Control Panel</h3>
					<div>
						<UL>
							<LI><a target="frameOut" href="/dashboard.php">Dashboard</a></LI>
							<LI><a target="frameOut" href="/monitor.php">Monitor</a></LI>
							<LI><a target="frameOut"  href="/sensei-devices.php">Devices</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=Rules">Reactions</a></LI>
							<LI><a target="frameOut"  href="/minicron/">Minicron</a></LI>
						</ul>
					</div>
					<h3>System </h3>
					<div>
						<ul>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=CronTab">CronTab</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiPs&r=1">Sensei processes</a></LI>
							<LI><a target="frameOut"href="/alias-cmd.php?alias=TaskManager&r=1">Task Manager</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=CpuLoad&r=10">CPU Load AVG</a></LI>
							<LI><a target="frameOut"href="/alias-cmd.php?alias=DiskFree">Disk Free</a></LI>
						</ul>
					</div>
					<h3>USB Ports</h3>
					<div>
						<ul>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiPorts&r=5">Sensei Ports</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=CheckUsbEMI&r=2">Check USB EMI</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=PortDisconnect&r=5">USB disconnections</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=PortConnect&r=5">USB connections</a></LI>
						</ul>
					</div>
					<h3>Value & logs</h3>
					<div>
						<ul>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=ComingValues&r=5">Coming values</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=LastValues&r=10">Last 10s vals</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiLog&r=2">Sensei Log</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiErrors&r=2">Sensei Err Log</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=MinicronLog&r=2">Minicron Log</a></LI>
						</ul>
					</div>
					<h3>Commands</h3>
					<div>
						<ul>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiStart" onclick="return confirm('sicuro?')">START Sensei</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiStop" onclick="return confirm('sicuro?')">STOP Sensei</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiDiscover" onclick="return confirm('sicuro?')">Sensei Discover</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SenseiRestart" onclick="return confirm('sicuro?')">Restart Sensei</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=MinicronRestart" onclick="return confirm('sicuro?')">Restart Minicron</a></LI>
						</UL>
					</div>
					<h3>Admin</h3>
					<div>
						<ul>
							<LI><a target="frameOut" href="/sensei-re-init.php" onclick="return confirm('sicuro?')">RE-INIT Sensei</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SystemReboot" onclick="return confirm('sicuro?')">System Reboot</a></LI>
							<LI><a target="frameOut" href="/alias-cmd.php?alias=SystemShutdown" onclick="return confirm('sicuro?')">System Shutdown</a></LI>
						</UL>
					</div>

				</div>
			</div>
			<div id="winOut">
				<iframe name="frameOut" frameBorder="0" width="100%" height="100%" src="/sensei-devices.php"></iframe>
			</div>
		</div>
	</BODY>
</HTML>
