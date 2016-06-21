<?php
	header('Content-Type: text/html; charset=utf-8');
	require_once("config.php");
?>
<html>
	<head>
		<LINK rel="stylesheet" href="/css/style.css" type="text/css">
		<LINK rel="stylesheet" href="/css/monitor.css" type="text/css">
		<script src="/js/jquery-1.7.1.min.js" type="text/javascript"></script>
		<script src="/js/monitor.js" type="text/javascript"></script>
	</head>
	<body>
		<a id="togglePnl" href="#" class="panelsBtns"></a>
		<a id="zoom" href="#"> </a>
		<table height="10%" id="filterPnl">
				<td>
					<div class="tblElem">
						<label id="name">name</label>
						<input type="text" id="txtTitle" size="10" placeholder="Name"></input>
				  </div>
					<div class="tblElem">
						<label id="filter">filter</label>
						<input type="text" id="txtFilter" size="10" placeholder="Filter"></input>
				  </div>
					<div class="tblElem">
				    <label>aggr</label>
						<select id="selAggr">
							<option value="s">second</option>
							<option value="s5">5s</option>
							<option value="s10">10s</option>
							<option value="m">minute</option>
							<option value="m10">10m</option>
							<option value="h" selected="selected">hour</option>
				    </select>
				  </div>
					<div class="tblElem">
				    <label>last</label>
						<select id="selLast">
				    	<option value="1">1</option>
				    	<option value="2">2</option>
				    	<option value="6">6</option>
				    	<option value="12">12</option>
							<option value="24">24</option>
							<option value="30">24</option>
							<option value="48">48</option>
							<option value="60" selected="selected">60</option>
							<option value="120">120</option>
							<option value="360">360</option>
							<option value="720">720</option>
							<option value="1440">1440</option>
							<option value="10000" selected="selected">10000</option>
				    </select>
				  </div>
					<div class="tblElem">
				    <label>type</label>
						<select id="selType">
							<option value="column">column</option>
							<option value="line">line</option>
							<option value="spline" selected="selected">spline</option>
							<option value="area">area</option>
							<option value="pie">pie</option>
				    </select>
				  </div>
					<div class="tblElem">
				    <label>refresh</label>
						<select id="selRefr">
							<option value="1">1</option>
				    	<option value="2">2</option>
				    	<option value="5">5</option>
				    	<option value="10">10</option>
				    	<option value="30">30</option>
							<option value="60" selected="selected">60</option>
							<option value="300">300</option>
							<option value="600">600</option>
				    </select>
				  </div>
					<div class="tblElem checkCont">
				    <label id="single">single</label>
						<input type="checkbox" id="chkCollapse" checked="checked" class="check"></input>
				    <label id="fill">fill</label>
						<input type="checkbox" id="chkFill" checked="checked" class="check"></input>
				  </div>
					<a href="#" id="btnGraphShow">GO</a>
				</td>
		</table>
		<iframe id="frameOut" frameBorder="0" width="100%" height="99%" src=""></iframe>
