<!DOCTYPE html>
<html>
	<head>
		<LINK rel="stylesheet" href="/css/style.css" type="text/css">
		<LINK rel="stylesheet" href="/css/sys-cmd.css" type="text/css">
		<script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
		<script src="/js/common.js" type="text/javascript"></script>
		<script src="/js/sys-cmd.js" type="text/javascript"></script>
	</head>
<body>
	<div id="sysContainer">
		<div id="sysTop">
			<h1 id="cmdName">NomeComando</h1>
			<form id="cmdForm" type="submit" class="contenitor">
				<label for="cmdText">Command: </label>
				<input id="cmdText" type="text" value="cmdText"><br>
					<label for="cmdPath">Path: </label>
					<span id="cmdPath">---</span>
				<label for="cmdInterval">Refresh: </label>
				<input id="cmdInterval" type="text" value="r">
				<input id="cmdBtn" type="submit" value="Ricarica">
			</form>
		</div>
		<div id="sysCenter">
			<div id="contOutput">
				<div id="output">
					<br><label for="textOutput">Output: </label><br>
					<textarea id="textOutput"></textarea>
				</div>
			</div>
		</div>
	</div>
	</body>
</html>
