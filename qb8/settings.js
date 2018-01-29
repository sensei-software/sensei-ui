$(function(){
  loadSettings()
});

function loadSettings(){
  $.ajax({
    url:"/api/srv-sys-cmd.php?cmd=crontab -l",
    success: function(data){
      // DAY
      re=/# DAY\/NIGHT\n\d+\s+(\d+?)\s/
      val=re.exec(data)[1];
      $("#day_start").val(val)
      // NIGHT
      re=/# DAY\/NIGHT\n[^\n]+\n\d+\s+(\d+?)\s/
      val=re.exec(data)[1];
      $("#night_start").val(val)
      // FAN
      re=/# FANS\n\*\/(\d+?)\s/
      val=re.exec(data)[1];
      $("#fan_freq").val(val)
      re=/# FANS\n[^\n]+sleep (\d+?)\s/
      val=re.exec(data)[1];
      $("#fan_secs").val(val)
      // PUMP
      re=/# PUMP\n\d+\s\d+-(\d+?)\s/
      val=re.exec(data)[1];
      $("#pump_cycles").val(val)
      re=/# PUMP\n[^\n]+sleep (\d+?)\s/
      val=re.exec(data)[1];
      $("#pump_secs").val(val)
      // CAM
      re=/# VIDEO\n\*\/(\d+?)\s/
      val=re.exec(data)[1];
      $("#snap_freq").val(val)
      re=/# VIDEO\n[^\n]+\n\*\/(\d+?)\s/
      val=re.exec(data)[1];
      $("#timelapse_freq").val(val)
    }
  });

  $.ajax({
    url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-light.day.*",
    success: function(data){
      $("#light_day").val(data)
    }
  });
  $.ajax({
    url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-light.night.*",
    success: function(data){
      $("#light_night").val(data)
    }
  });

  $.ajax({
    url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-humidity.day.*",
    success: function(data){
      $("#humidity_day").val(data)
    }
  });
  $.ajax({
    url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-humidity.night.*",
    success: function(data){
      $("#humidity_night").val(data)
    }
  });


    $.ajax({
      url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-moisture.day.*",
      success: function(data){
        $("#moisture_day").val(data)
      }
    });
    $.ajax({
      url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-moisture.night.*",
      success: function(data){
        $("#moisture_night").val(data)
      }
    });


        $.ajax({
          url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-temp.day.*",
          success: function(data){
            $("#temperature_day").val(data)
          }
        });
        $.ajax({
          url:"/api/srv-sys-cmd.php?cmd=grep -oP '(?<=THRESHOLD=\\\")\\d%2B' /home/sensei/sensei-server/conf/rules/check-temp.night.*",
          success: function(data){
            $("#temperature_night").val(data)
          }
        });

}


function saveSettings(){
  $("#save").val("Saving crontab...");
  r=$("#save").offsetHeight;
  $("#save").toggle().toggle();
  day_start=$("#day_start").val();
  night_start=$("#night_start").val();
  fan_freq=$("#fan_freq").val();
  fan_secs=$("#fan_secs").val();
  pump_cycles=$("#pump_cycles").val();
  pump_secs=$("#pump_secs").val();
  snap_freq=$("#snap_freq").val();
  timelapse_freq=$("#timelapse_freq").val();

  cmd="/home/sensei/sensei-ui/qb8/save_crons.sh "+day_start+ " " +night_start+" "+fan_freq+" "+fan_secs+" "+pump_cycles+" "+pump_secs+" "+snap_freq+" "+timelapse_freq;
  $.ajax({
    url:"/api/srv-sys-cmd.php?cmd="+encodeURIComponent(cmd),
    async: false });

  $("#save").val("Saving rules...");
  r=$("#save").offsetHeight;
  $("#save").toggle().toggle();
  light_day=$("#light_day").val();
  light_night=$("#light_night").val();
  humidity_day=$("#humidity_day").val();
  humidity_night=$("#humidity_night").val();
  moisture_day=$("#moisture_day").val();
  moisture_night=$("#moisture_night").val();
  temperature_day=$("#temperature_day").val();
  temperature_night=$("#temperature_night").val();
  cmd="/home/sensei/sensei-ui/qb8/save_rules.sh "+light_day+ " " +light_night+" "+humidity_day+" "+humidity_night+" "+moisture_day+ " " +moisture_night+" "+temperature_day+" "+temperature_night;
  $.ajax({
    url:"/api/srv-sys-cmd.php?cmd="+encodeURIComponent(cmd),
    async: false });


  $("#save").attr("value","Save settings");

}
