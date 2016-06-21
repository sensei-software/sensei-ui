$(function(){
	sendCmd();
});


function sendCmd(){
	var gCmd = QueryString.cmd;
	var gSid = QueryString.sid;

	$.ajax({
		url: "/api/srv-direct-dev-cmd.php?cmd="+gCmd+"&sid="+gSid,
		success: function(data){
			var textarea = $(document.createElement("textarea"));
			$("#container").append(textarea);
			$(textarea).append(data);
		}
	});
}
