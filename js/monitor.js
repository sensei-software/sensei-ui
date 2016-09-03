$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
			 return null;
		}
		else{
			 return results[1] || 0;
		}
}
function setCookie(key, value) {
				var expires = new Date();
				expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
				document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
		}

function getCookie(key) {
		var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
		return keyValue ? keyValue[2] : null;
}

$(function(){
	var bgClose = $("<div id=\"close\"></div>");
	var hidBlock= $("<div id=\"hidBlock\"></div>");
	$("body").append(hidBlock);
	$(hidBlock).append(bgClose);

	$("#btnGraphShow").on("click",function(){
		var savedMonitor=$.urlParam("m");
		var pageUrl="/sensei-graph.php";
		var aggr=$("#selAggr").val();
		var s=$("#txtFilter").val();
		var n=$("#txtTitle").val();
		var j=$("#chkCollapse").attr('checked') ? 1 : 0;
		var f=$("#chkFill").attr('checked') ? 1 : 0;
		var q=$("#selLast").val();
		var t=$("#selType").val();
		var r=$("#selRefr").val();
		var url=pageUrl+"?title="+n+"&filter="+s+"&single="+j+"&fill="+f+"&last="+q+"&type="+t+"&unit="+aggr+"&r="+r;

		// save into cookie
		setCookie(savedMonitor+"_aggr",aggr);
		setCookie(savedMonitor+"_n",n);
		setCookie(savedMonitor+"_s",s);
		setCookie(savedMonitor+"_j",j);
		setCookie(savedMonitor+"_q",q);
		setCookie(savedMonitor+"_t",t);
		setCookie(savedMonitor+"_r",r);
		setCookie(savedMonitor+"_f",f);

		$("#frameOut").attr("src",url);
		$("#filterPnl").removeClass("open");
		$("#hidBlock").append(bgClose);
	});
	$("#txtTitle, #txtFilter").keypress(function (e) {
		var key = e.which;
		if(key == 13)  // the enter key code
			{
				$('#btnGraphShow').click();
		}
	});

	// load from cookie
	var savedMonitor=$.urlParam("m");
	var aggr=getCookie(savedMonitor+"_aggr");
	if(!aggr){
		// initial values
		aggr="m";
		setCookie(savedMonitor+"_aggr","s");
		setCookie(savedMonitor+"_s","");
		setCookie(savedMonitor+"_j",1);
		setCookie(savedMonitor+"_q",6);
		setCookie(savedMonitor+"_t","spline");
		setCookie(savedMonitor+"_r","60");
		setCookie(savedMonitor+"_f",1);
		setCookie(savedMonitor+"_n","");
	}
	var s=getCookie(savedMonitor+"_s");
	var j=getCookie(savedMonitor+"_j");
	var q=getCookie(savedMonitor+"_q");
	var t=getCookie(savedMonitor+"_t");
	var r=getCookie(savedMonitor+"_r");
	var f=getCookie(savedMonitor+"_f");
	var n=getCookie(savedMonitor+"_n");

	$("#selAggr").val(aggr);
	$("#txtFilter").val(s);
	$("#txtTitle").val(n);
	if (j!="0") $("#chkCollapse").attr('checked',true); else $("#chkCollapse").attr('checked',false);
	if (f!="0") $("#chkFill").attr('checked',true); else $("#chkFill").attr('checked',false);
	$("#selLast").val(q);
	$("#selType").val(t);
	$("#selRefr").val(r);

	$('#btnGraphShow').click();

	$("#zoom").on("click",function(){
		window.parent.location.href=window.location.href;
	});

	$("#togglePnl").on("click",function(){
		var filterPnl = $("#filterPnl").hasClass("open");
		if(filterPnl){
			$("#filterPnl").removeClass("open");
			$("#hidBlock").append(bgClose);
		}else{
			$("#filterPnl").addClass("open");
			$("body").append(bgClose);
		}
	});
	$("#close").on("click",function(){
		$("#filterPnl").removeClass("open");
		$("#hidBlock").append(bgClose);
	});

});
