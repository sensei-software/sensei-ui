$(function(){
  updateValues();
  initButtons();
  initGraphs();
});

function updateValues(oneshot){
  $.ajax({
    url: '/api/srv-alias-cmd.php?alias=CpuLoad',
    success: function(data){
      val=data.split(" ")[0];
      $("#cpuload .value").text(val);

    }
  });
  $.ajax({
    url: "/api/srv-sys-cmd.php?cmd=date %2B'%25T'",
    success: function(data){
      val=data;
      $("#date .value").text(val);

    }
  });
  $.ajax({
    url: '/api/srv-sys-cmd.php?cmd=tail -n 20 /home/sensei/sensei/sensei-server/logs/sensei.log',
    success: function(data){
      val=data.replace(/\n/g,"<br>",true);
      $("#logline").html(val);

    }
  });

  $.ajax({
    url: '/api/srv-sys-cmd.php?cmd=/home/sensei/sensei/sensei-server/batch/last_relon.sh 5',
    success: function(data){
      val=data.replace(/\n/g,"<br>",true);
      $("#moisture .ext_value span").html(val);

    }
  });

  // VALUES
  $.ajax({
    url: '/api/srv-sys-cmd.php?path=sensei&cmd=sensei-db-values',
    success: function(data){
      re = /Sensors>LS1\s*LIGHT\s*.\s*([\d.]+?)\s+/gi
      val=parseFloat(re.exec(data)[1]).toFixed(1);
      console.log('LIGHT=' + val);
      $("#light .value span").text(val);

      re = /Weather>apixu\s*IS_DAY\s*.\s*([\d.]+?)\s+/gi
      val=parseFloat(re.exec(data)[1]) ? "day" : "night";
      console.log('IS_DAY=' + val);
      $("#light .ext_value span").text(val);

      re = /Sensors>HL01\s*MOISTURE\s*.\s*([\d.]+?)\s+/gi
      val=parseFloat(re.exec(data)[1]).toFixed(1);
      console.log('MOISTURE=' + val);
      $("#moisture .value span").text(val);

      re = /Sensors>DHT11\s*HUMIDITY\s*.\s*([\d.]+?)\s+/gi
      val=parseFloat(re.exec(data)[1]).toFixed(1);
      console.log('HUMIDITY=' + val);
      $("#humidity .value span").text(val);

      re = /Weather>apixu\s*HUMIDITY\s*.\s*([\d.]+?)\s+/gi
      val=parseFloat(re.exec(data)[1]).toFixed(1);
      console.log('HUMIDITY=' + val);
      $("#humidity .ext_value span").text(val);

      re = /Sensors>DHT11\s*TEMPERATURE\s*.\s*([\d.]+?)\s+/gi
      val=parseFloat(re.exec(data)[1]).toFixed(1);
      console.log('TEMPERATURE=' + val);
      $("#temperature .value span").text(val);

      re = /Weather>apixu\s*TEMPERATURE\s*.\s*([\d.]+?)\s+/gi
      val=parseFloat(re.exec(data)[1]).toFixed(1);
      console.log('TEMPERATURE=' + val);
      $("#temperature .ext_value span").text(val);

      // ICONS
      re = /Icons>L4\s*LED_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="0.00";
      console.log('L4=' + val);
      $("#light img").attr("src","ico/light-"+ (val ? "ok" : "ko") + ".png" );

      re = /Icons>L2\s*LED_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="0.00";
      console.log('L2=' + val);
      $("#moisture img").attr("src","ico/moisture-"+ (val ? "ok" : "ko") + ".png" );

      re = /Icons>L3\s*LED_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="0.00";
      console.log('L3=' + val);
      $("#humidity img").attr("src","ico/humidity-"+ (val ? "ok" : "ko") + ".png" );

      re = /Icons>L1\s*LED_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="0.00";
      console.log('L1=' + val);
      $("#temperature img").attr("src","ico/temperature-"+ (val ? "ok" : "ko") + ".png" );


      re = /Relays>R1\s*REL_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="1.00";
      el_id="R1";
      console.log(el_id +'=' + val);
      if(val)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);


      re = /Relays>R3\s*REL_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="1.00";
      el_id="R3";
      console.log(el_id +'=' + val);
      if(val)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);


      re = /Relays>R4\s*REL_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="1.00";
      el_id="R4";
      console.log(el_id +'=' + val);
      if(val)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);


      re = /Relays>R5\s*REL_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="1.00";
      el_id="R5";
      console.log(el_id +'=' + val);
      if(val)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);


      re = /Relays>R6\s*REL_STATUS\s*.\s*([\d.]+?)\s+/gi
      val=re.exec(data)[1]=="1.00";
      el_id="R6";
      console.log(el_id +'=' + val);
      if(val)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);

      re = /Sensors>RGB\s*RED\s*.\s*([\d.]+?)\s+/gi
      r=re.exec(data)[1];
      re = /Sensors>RGB\s*GREEN\s*.\s*([\d.]+?)\s+/gi
      g=re.exec(data)[1];
      re = /Sensors>RGB\s*BLUE\s*.\s*([\d.]+?)\s+/gi
      b=re.exec(data)[1];
      val=Math.floor(r)+" "+Math.floor(g)+" "+Math.floor(b);
      console.log('RGB=' + val);

      el_id=""
      if(val=="0 25 0")
        el_id="RGB_GREEN";
      if(val=="255 50 255")
        el_id="RGB_GROW";
      if(val=="255 255 255")
      el_id="RGB_WHITE";

      if(el_id!="RGB_GREEN") $("#RGB_GREEN .ico").attr("src","ico/rgb-off.png");
      if(el_id!="RGB_GROW") $("#RGB_GROW .ico").attr("src","ico/rgb-off.png");
      if(el_id!="RGB_WHITE") $("#RGB_WHITE .ico").attr("src","ico/rgb-off.png");

      if(el_id){
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on");
        $("#"+el_id+" .ico").attr("src",new_src);
      }
    }
  });

  if (!oneshot) window.setTimeout(updateValues,3000);
}




function initButtons(){

  $("#R1").on("click", function(){
    $(this).addClass("loading");
    on= $("#R1 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 1",
        success: function(){
          updateValues(true);
          $("#R1").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 1",
        success: function(){
          updateValues(true);
          $("#R1").removeClass("loading");
        }
      })
    }
  });

  $("#R2").on("click", function(){
    $(this).addClass("loading");
    on= $("#R2 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 2",
        success: function(){
          updateValues(true);
          $("#R2").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 2",
        success: function(){
          updateValues(true);
          $("#R2").removeClass("loading");
        }
      })
    }
  });

  $("#R3").on("click", function(){
    $(this).addClass("loading");
    on= $("#R3 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 3",
        success: function(){
          updateValues(true);
          $("#R3").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 3",
        success: function(){
          updateValues(true);
          $("#R3").removeClass("loading");
        }
      })
    }
  });

  $("#R4").on("click", function(){
    $(this).addClass("loading");
    on= $("#R4 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 4",
        success: function(){
          updateValues(true);
          $("#R4").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 4",
        success: function(){
          updateValues(true);
          $("#R4").removeClass("loading");
        }
      })
    }
  });

  $("#R5").on("click", function(){
    $(this).addClass("loading");
    on= $("#R5 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 5",
        success: function(){
          updateValues(true);
          $("#R5").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 5",
        success: function(){
          updateValues(true);
          $("#R5").removeClass("loading");
        }
      })
    }
  });

  $("#R6").on("click", function(){
    $(this).addClass("loading");
    on= $("#R6 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 6",
        success: function(){
          updateValues(true);
          $("#R6").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 6",
        success: function(){
          updateValues(true);
          $("#R6").removeClass("loading");
        }
      })
    }
  });


  $("#RGB_GROW").on("click", function(){
    $(this).addClass("loading");
    on= $("#RGB_GROW .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL",
        success: function(){
          updateValues(true);
          $("#RGB_GROW").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL 255 50 255",
        success: function(){
          updateValues(true);
          $("#RGB_GROW").removeClass("loading");
        }
      })
    }
  });

  $("#RGB_GREEN").on("click", function(){
    $(this).addClass("loading");
    on= $("#RGB_GREEN .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL",
        success: function(){
          updateValues(true);
          $("#RGB_GREEN").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL 0 25 0",
        success: function(){
          updateValues(true);
          $("#RGB_GREEN").removeClass("loading");
          // $.ajax('/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_PX 0 255 255 255');
          // $.ajax('/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_PX 99 255 255 255');
        }
      })
    }
  });


  $("#RGB_WHITE").on("click", function(){
    $(this).addClass("loading");
    on= $("#RGB_WHITE .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL",
        success: function(){
          updateValues(true);
          $("#RGB_WHITE").removeClass("loading");
        }
      })
    } else {
      $.ajax({
        url:"/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL 255 255 255",
        success: function(){
          updateValues(true);
          $("#RGB_WHITE").removeClass("loading");
        }
      })
    }
  });


}


function initGraphs(){
  $(".element").on("click",function(){
    $(this).toggleClass("zoom");
  });
}
