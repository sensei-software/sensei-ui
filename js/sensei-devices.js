$(function(){
		var devsCont;
});

var devices = null;

$.ajax({
	url: "/api/srv-dev-info.php",
	success: function(data){
		var jsonDec = data;
		devices = jsonDec.devices;
		devsCont = $(document.createElement("DIV")).attr("id","devices");
		cicleDev();
		$(".device").on("click",function(){
			$(".device").removeClass("active");
			$(this).addClass("active");
		});
	}
});

function cicleDev(){
	$("#container").append(devsCont);
	for (i=0; i<devices.length; i++){
		var devPort = devices[i].port;
		var device = devices[i].device;
		var devName = device.Name;
		var devModel = device.Model;
		var devCmds = device.commands;
		var divCont = $(document.createElement("DIV")).addClass("device");
		var Dport = $(document.createElement("DIV"));
		var Dmodel = $(document.createElement("DIV")).addClass("model "+devModel);
		var Dname = $(document.createElement("DIV")).addClass("name "+devName);
		var a = $(document.createElement("a"));
		var listSel = $(document.createElement("SELECT")).addClass("commands");
		var txtarea = $(document.createElement("INPUT")).attr("type","text");
		var send = $(document.createElement("INPUT")).attr({type:"button", value: "Emit"});
		if(devPort === "No serial device attached" ){
			$(Dport).addClass("no port");
		}else{
			$(Dport).addClass("port "+devPort);
		}
		$(devsCont).append(divCont);
		$(divCont).append(Dport);
		$(Dport).append(devPort);
		$(Dport).append("<br>");

		$(divCont).append(Dmodel);
		$(Dmodel).append(devModel);
		$(Dmodel).append("<br>");

		$(divCont).append(Dname);
		$(Dname).append(a);

		if(devModel.indexOf("ReAct")>=0){
			$(a).attr("href","sensei-relay.php?dev="+devName);
		} else {
			$(a).attr("href","#");
		}
		$(a).append(devName);

		$(divCont).append(listSel);
		$(divCont).append("<input class=\"par\" type=\"text\" placeholder=\"Attributes\">");
		$(divCont).append(send);
		for (devCmd in devCmds){
			var nCmd = devCmds[devCmd];
			var option = $(document.createElement("OPTION")).attr("id","cmd:"+nCmd);
			//var a = $(document.createElement("A")).attr("href","#");
			$(listSel).append(option);
			//$(option).append(a);
			//$(a).append(devCmds[devCmd]+"<br>");
			$(option).append(nCmd);
		}
		$(".par").keypress(function (e) {
			var key = e.which;
			if(key == 13)  // the enter key code
				{
					$(send).click();
			}
		});
		$(send).on("click",function(){
			$("#devOut").toggleClass("loading");
			var c=$(this).parent().find(".commands").val();
			var p=$(this).parent().find(".par").val();
			var s=$(this).parent().find(".name a").text();
				$.ajax({
				url: "/api/srv-dev-cmd.php?sid="+s+"&cmd="+c+" "+p,
				success: function(data){
					var jsonDec = data;
					$("#devOut").text(data);
					 $(".loading").toggleClass("loading");
				}
			});
		});
		console.log("Port:"+devPort+" - Name:"+devName+" - Model:"+devModel);
	}
}
