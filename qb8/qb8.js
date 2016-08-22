$(function(){
  updateValues();
  initButtons();
});


function updateValues(){
  $.ajax({
    url: '/api/srv-value.php?sid=Sensors&sensor=LS1&measure=light',
    success: function(data){
      val=data;
      $("#light .value span").text(val);
      if(val>15) ico="light-ok.png"; else ico="light-ko.png";
      $("#light img").attr("src","ico/"+ico);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Sensors&sensor=HL01&measure=moisture',
    success: function(data){
      val=data;
      $("#moisture .value span").text(val);
      if(val>40) ico="moisture-ok.png"; else ico="moisture-ko.png";
      $("#moisture img").attr("src","ico/"+ico);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Sensors&sensor=DHT11&measure=humidity',
    success: function(data){
      val=data;
      $("#humidity .value span").text(val);
      if(val>40) ico="humidity-ok.png"; else ico="humidity-ko.png";
      $("#humidity img").attr("src","ico/"+ico);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Sensors&sensor=DHT11&measure=temperature',
    success: function(data){
      val=data;
      $("#temperature .value span").text(val);
      if(val>25) ico="temperature-ok.png"; else ico="temperature-ko.png";
      $("#temperature img").attr("src","ico/"+ico);
    }
  });

  $.ajax({
    url: '/api/srv-value.php?sid=Relays&sensor=R1&measure=REL_STATUS',
    success: function(data){
      el_id="R1";
      val=data;
      if(val==1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Relays&sensor=R2&measure=REL_STATUS',
    success: function(data){
      el_id="R2";
      val=data;
      if(val==1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Relays&sensor=R3&measure=REL_STATUS',
    success: function(data){
      el_id="R3";
      val=data;
      if(val==1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Relays&sensor=R4&measure=REL_STATUS',
    success: function(data){
      el_id="R4";
      val=data;
      if(val==1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Relays&sensor=R5&measure=REL_STATUS',
    success: function(data){
      el_id="R5";
      val=data;
      if(val==1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });
  $.ajax({
    url: '/api/srv-value.php?sid=Relays&sensor=R6&measure=REL_STATUS',
    success: function(data){
      el_id="R6";
      val=data;
      if(val==1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });

  $.ajax({
    url: '/api/srv-sys-cmd.php?cmd=grep%20"RGB1_ALL"%20/home/sensei/sensei/sensei-server/dev/Sensors/sensei_commands.log%20%20|%20tail%20-1',
    success: function(data){
      el_id="RGB_GROW";
      val=data;
      if(val.indexOf("RGB1_ALL 255 50 255") != -1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });

  $.ajax({
    url: '/api/srv-sys-cmd.php?cmd=grep%20"RGB1_ALL"%20/home/sensei/sensei/sensei-server/dev/Sensors/sensei_commands.log%20%20|%20tail%20-1',
    success: function(data){
      el_id="RGB_WHITE";
      val=data;
      if(val.indexOf("RGB1_ALL 255 255 255") != -1)
        new_src=$("#"+el_id+" .ico").attr("src").replace("-off","-on")
      else {
        new_src=$("#"+el_id+" .ico").attr("src").replace("-on","-off")
      }
      $("#"+el_id+" .ico").attr("src",new_src);
    }
  });

  window.setTimeout(updateValues,1000);
}




function initButtons(){

  $("#R1").on("click", function(){
    on= $("#R1 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 1")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 1")
    }
  });

  $("#R2").on("click", function(){
    on= $("#R2 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 2")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 2")
    }
  });

  $("#R3").on("click", function(){
    on= $("#R3 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 3")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 3")
    }
  });

  $("#R4").on("click", function(){
    on= $("#R4 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 4")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 4")
    }
  });

  $("#R5").on("click", function(){
    on= $("#R5 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 5")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 5")
    }
  });

  $("#R6").on("click", function(){
    on= $("#R6 .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_OFF 6")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Relays&cmd=REL_ON 6")
    }
  });


  $("#RGB_GROW").on("click", function(){
    on= $("#RGB_GROW .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL 255 50 255")
    }
  });


  $("#RGB_WHITE").on("click", function(){
    on= $("#RGB_WHITE .ico").attr("src").indexOf("-on")>=0;
    if(on){
      $.ajax("/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL")
    } else {
      $.ajax("/api/srv-dev-cmd.php?sid=Sensors&cmd=RGB1_ALL 255 255 255")
    }
  });


}
