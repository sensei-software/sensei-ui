var interval=20*1000;
		var url= new Array();
		var currUrl;
	
		$(document).ready(function() {
			interval=$("#interval").val()*1000;
			cyclePages();
			$("#frame").load(function(){
				$("#pages a.loading").toggleClass("loading").toggleClass("active");
				$("#frame").css("background","white");
			});
			$("#pages a").on("click",function(el){
				$("#pages a.loading").toggleClass("loading");
				$("#pages a.active").toggleClass("active");
				 $("#frame").css("background","light gray");
				 document.title=$(this).html();
				$(this).toggleClass("loading");
			});
		});
				
		function cyclePages(){			
			reloadIFrame();
			window.setInterval(reloadIFrame, interval);
		}
		
		function nextUrl(){
			currUrl=$("#pages a.active");
			nUrl=$("a.active +a");
			if(currUrl.length)
				currUrl.toggleClass("active");
			if(!nUrl.length)
				nUrl=$($("#pages a")[0]);							
			nUrl.toggleClass("loading");
			return nUrl;
		}
		
		function reloadIFrame() {
			if(!$("#cycle").attr("checked")) return;
			 url=nextUrl();
			 $("#frame").css("background","light gray");
			 window.setTimeout(function(){
				document.title=url.html();
				$("#frame").attr("src",url.attr("href"));					
			},100);
		}	