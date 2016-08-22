$(function(){
	console.log("page load");
	LoadParFromUrl();
	initStatus();
	initHandlers();
});

var RefreshInterval=10;
var CommandRunning=0;
var dev = "";
var abortRefresh=0;

function redraw(element){
    element = $(element);
    var n = document.createTextNode(' ');
    element.append(n);
    window.setTimeout(function(){$(n).remove()},0);
    return element;
}

function LoadParFromUrl(){
	dev = decodeURIComponent(QueryString.dev);
	console.log("Loading relay panel for "+dev);
}

function ExecCmd(cmd,onSuccess,onError,r,singleRunning){
	console.log("Executing " + cmd + " for " + dev);
	console.log("  r= " + r + " singleRunning= " + singleRunning);
	if(!CommandRunning || !singleRunning){
		CommandRunning=1;
		$.ajax({
			url: "/api/srv-dev-cmd.php?sid="+dev+"&cmd="+encodeURIComponent(cmd),
			success: function (data){
				console.log("SUCCESS Executing " + cmd + " for " + dev);
				CommandRunning=0;
				console.log(data);
				if (typeof onSuccess == "function") onSuccess(data);
			},
			error: function(data){
				console.log("ERROR Executing " + cmd + " for " + dev);
				CommandRunning=0;
				if (typeof onSuccess == "function") onError();
			},
			complete: function(data){
				console.log("COMPLETE Executing " + cmd + " for " + dev);
			},
			timeout: 15000
		});
	} else {
		console.log("Skipping " + cmd + " for " + dev);
	}
	if(r>0) window.setTimeout(function(){ExecCmd(cmd,onSuccess,onError,r,singleRunning)},r*1000);
}

function RefreshStatus(rn){
	console.log("starting refreshing chain");
	cmd="REL_STATUS";
	if(rn) cmd+=" "+rn;
	ExecCmd(cmd,
		onSuccess=function(data){
			if(!abortRefresh){
				listRelay(data);
			} else {
				console.log("Refresh aborted");
			}
		},
		onError=function(){
			console.log("error refreshing");
		},
		(rn ? 0 : RefreshInterval),1 );
}
function initStatus(){
	console.log("init");
	RefreshStatus();
	$("h1").text(dev);
}
function initHandlers(){
}

var relay=new Array();

function parseRelayStatus(data){
	console.log("parsing response");
	var d=data.replace(new RegExp(/^.*\(R(.*)\).*= (\d)$/mgi), "$1 $2");
	d=d.split("\n");
	d=jQuery.grep(d,function(el,i){
		return el.indexOf("#")<0 && el!="";
	});
	for(var i=0; i<d.length; i++){
		var e=d[i].split(" ");
		var r={}; //= new Array();
		r["n"]=e[0];
		r["status"]=e[1];
		r["updated"]=Date.now();
		relay[e[0]]=r;
	}
	console.log("received " + d.length + " statuses");
	return relay;
}
function relCmdClick(){
	var rn=$(this).data("n");
	var rs=$(this).data("value");
	var cmd=rs ? "REL_ON" : "REL_OFF";
	cmd+=" "+rn;
	console.log("Click "+ cmd);
	var el=	$(this).parent().parent()
	el.addClass("loading");
	abortRefresh=1;
	ExecCmd(cmd,
		onSuccess=function(data){
			if(rs=="1"){
				relay[rn][status]=rs;
			} else {
				relay[rn][status]=rs;
			}
			el.addClass("updating");
			console.log("updating");
			redraw(el);
			window.setTimeout(RefreshStatus(rn),2000);
			abortRefresh=0;
		},
		onError=function(){
			alert("ERR");
			abortRefresh=0;
		},
	0);

}
function listRelay(data){
	console.log("list relay");
	parseRelayStatus(data);
	var cnt=$("#container");
	if(cnt.text()=="Loading...")
		cnt.text("");
	var list=cnt.find("ul");
	if(!list.length){
		list=$("<ul>").appendTo(cnt);
		console.log("List created");
	}
	for(n in relay){
		var r=relay[n];
		var status= r["status"]=="0" ? "off" : "on";
		var nstatus= r["status"] =="0" ? "on" : "off";
		var html="";
		var el=cnt.find("li[data-n=\"" + n + "\"]");
		var justInserted=0;
		if(!el.length){
			el=$("<li data-n=\"" + n + "\" data-value=\""+ r["status"] +"\">").appendTo(list);
			console.log("List element " + n + " created");
			justInserted=1;
		}
		if(el.data("value")==r["status"] && !justInserted){
			console.log("list element " + n + " skipped");
		} else {
	    	if(r["status"]=="1"){
					html=""
					+"<span class=\"rel_status_"+status+"\" >"
					+"<a href=\"#\" class=\"rel_cmd\" data-n=\"" + n + "\" data-value=\""+ ( nstatus =="on" ? 1 : 0) + "\">" +status + "||"
					+"</a></span></li>";
					console.log("List element " + n + " updated");
				} else {
					html=""
					+"<span class=\"rel_status_"+status+"\" >"
					+"<a href=\"#\" class=\"rel_cmd\" data-n=\"" + n + "\" data-value=\""+ ( nstatus =="on" ? 1 : 0) + "\">" + status + "||"
					+"</a>" + "</span></li>";
					console.log("List element " + n + " updated");
		   }
	 	  el.html(html);
		  el.removeClass("loading");
		  el.removeClass("updating");
		}
		el.data("value",r["status"]);
	}
	//cnt.text("");
	//cnt.append(list);
	cnt.find(".rel_cmd").off("click",relCmdClick);
	cnt.find(".rel_cmd").on("click",relCmdClick);
	//$("#container").text(JSON.stringify(relay));
}
