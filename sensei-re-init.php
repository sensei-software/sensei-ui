<?php
	header('Content-Type: text/html; charset=utf-8');
	ini_set('memory_limit', '56M');
	ini_set('max_execution_time', 180);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="refresh" content="<?php echo $_GET["r"] ?>">
		<LINK rel="stylesheet" href="/css/style.css" type="text/css">
		<script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
	</head>
<body>
	<div id="container">
				<h2>Sensei Re-Init</h2>

<?php
	mb_internal_encoding("UTF-8");

	include_once(dirname(__FILE__)."/config.php");
	include_once(dirname(__FILE__)."/lib/db.php");
	include_once(dirname(__FILE__)."/lib/functions.php");
	include_once(dirname(__FILE__)."/lib/rendering.php");

	$sid=gGet("sid");
	$cmd=gGet("cmd");

?>
		<table width="90%" height="100%" style="margin-top:10px;z-index:99;position:absolute">
			<tr>
				<th>Output</th>
			</tr>
			<tr>
				<td height="100%">
					<textarea style="width:100%;height:100%">
<?php

	echo shell_exec("$SENSEI_PATH/bin/sensei-kill-all");
	echo shell_exec("$SENSEI_PATH/bin/sensei-reset-env");
	echo shell_exec("$SENSEI_PATH/bin/sensei-db-command-file $SENSEI_PATH/res/db/run/purge_all.sql");
	echo shell_exec("$SENSEI_PATH/bin/sensei-daemon -c  > /dev/null 2>/dev/null  &");
?>
					</textarea>
			</tr>
		</table>
		</div>
	</body>
</html>
