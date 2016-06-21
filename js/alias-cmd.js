$(function(){
	LoadParFromUrl();
	initHandlers();
	ExecCmd();
});


var CommandRunning=0;
var cmdPath = "";
var command = "";
var cmdName = "";
var r 		= "";

function LoadParFromUrl(){
	cmdPath = QueryString.path;
//	command = decodeURIComponent(QueryString.cmd);
	cmdName = decodeURIComponent(QueryString.alias);
	command = cmdName;
	r 		= QueryString.r;

	$("#cmdPath").text(cmdPath);
	$("#cmdText").val(command);
	$("#cmdName").text(cmdName);
	$("#cmdInterval").val(r);


}
function LoadParFromInputs(){
	cmdPath = $("#cmdPath").text();
	command = $("#cmdText").val();
	cmdName = $("#cmdName").text();
	r 		= $("#cmdInterval").val();
}

function ExecCmd(){
	if(!CommandRunning){
		CommandRunning=1;
		$("#textOutput").toggleClass("loading");
		$.ajax({
			url: "/api/srv-alias-cmd.php?alias="+encodeURIComponent(cmdName)+"&r="+r,
			success: function (data){
				CommandRunning=0;
				$("#textOutput").text(data);
				$("#textOutput").toggleClass("loading");
			},
			error: function(){
				CommandRunning=0;
				$("#textOutput").toggleClass("error");
			}
		});
	}
	if(r) window.setTimeout(ExecCmd,r*1000);
}

function RefreshCmd(){
	LoadParFromInputs();
	ExecCmd();
	return false;
}
function initHandlers(){
	var textCmd = $("#cmdText").hasClass("disabled");
	$("#cmdText").prop("readonly", true).addClass("disabled");
	if (!textCmd){
		$("#cmdText").on("focusout", function() {
			$("#cmdText").prop("readonly", true).addClass("disabled");
		});
	}
	$("#cmdBtn").on("click", RefreshCmd);
	$("#cmdText").on("dblclick", function(){
		$("#cmdText").prop("readonly", false).removeClass("disabled");
	});
	$("#cmdText, #cmdInterval").on("keypress", function(e) {
	    if(e.which == 13){ //tasto ENTER
			$("#cmdText").prop("readonly", true).addClass("disabled");
			RefreshCmd();
	    }
	});
}
