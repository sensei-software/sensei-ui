var srvUrl="/api/srv-graph.php"
srvUrl+=location.search;
//var colors = new Array("#fa0","#a0a","#00f","#444","#0f0","#f00","#0fa");
// "?filter=&single=1&fill=0&last=60&type=spline&unit=s&r=60";
//var srvUrl="srv/data.json";
var updInterval=par("r");
var graphType=par("type");
var graphTitle=par("title");
if(!graphTitle) graphTitle="";
//var updNewPoints=10;

function par(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initChart(){
  Highcharts.setOptions({
      global: {
          useUTC: false
      }
  });
  $('#container').highcharts({
      chart: {
          height: 250,
          type: graphType,
          //animation: Highcharts.svg, // don't animate in old IE
          marginRight: 10,
          events: {
              load: function () {
                console.log("Highchart LOAD");
                  /*
                  loadData(
                    function(series){
                      $('#container').highcharts().series=series;
                      $('#container').highcharts().redraw();
                  });
                  */
                  updateData();
                  setInterval(
                    function () {
                          updateData();
                    },
                  updInterval*1000);
              }
          }
      },
      title: {
          text: graphTitle
      },
      xAxis: {
          type: 'datetime',
          tickPixelInterval: 150
      },
      yAxis: {
          title: {
              text: 'Value'
          },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          formatter: function () {
              return '<b>' + this.series.name + '</b><br/>' +
                  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                  Highcharts.numberFormat(this.y, 2);
          }
      },
      legend: {
          enabled: true
      },
      exporting: {
          enabled: true
      },
      series: []
  });

}


$(document).ready(function () {
  initChart();
});

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}
function formatData(series){
  for ( var j=0; j<series.length; j++){
    var s=series[j];
    for ( var i=0; i<s.data.length; i++){
      var entry=s.data[i];
      var x=new Date(entry[0]);
      var y=entry[1];
      if(y=="")y="0";
      x=x.getTime();
      y= parseFloat(y);
      series[j].data[i][0]=x;
      series[j].data[i][1]=y;
    }
  }
  return series;
}
function loadData(onSuccess, onError){
  console.log("LOAD DATA");
  $.ajax({
    url: srvUrl,
    success: function (res){
      //res = JSON.parse(res);
      if(res.length>0){
        var series=res[0].series;
        console.log(series.length + " SERIES LOADED");
        series=formatData(series);
        if(typeof onSuccess == "function" ) onSuccess(series);
      } else {
        onError("NODATA","Web Service returned no data");
      }
    },
    error: function (status,err){
      if(typeof onError == "function" ) onError(err,status);
    }
  });
}
function updateSerie(serie){
  var g=$('#container').highcharts();
  var data=serie.data;
  var s=findSerie(serie);
  for ( var i=0; i<data.length; i++){
    var entry=data[i];
    var x=entry[0];
    var y=entry[1];
    if(g.series[s].xData.indexOf(x)<0){
      g.series[s].addPoint([x,y], false, true);
      console.log(i + ":" + x + " - " + y);
    }
  }
  g.redraw();
  console.log("SERIE " + serie.name + "UPDATED");
}
function findSerie(s){
  var g=$('#container').highcharts();
  for (var j=0; j<g.series.length;j++){
    if(g.series[j].name==s.name){
      return j;
    }
  }
  return -1;
}
function existsSerie(s){
  return findSerie(s)>=0;
}
function updateData(){
  console.log("UPDATE DATA");
  var g=$('#container').highcharts();
  loadData(
    // onSuccess
    function (series){
      for (var j=0; j<series.length;j++){
        console.log("PROCESSING SERIE: " + series[j].name);
        if(!existsSerie(series[j])){
          console.log("ADDING NEW SERIE " + series[j]);
          g.addSeries(series[j]);
          /*var x = Math.floor((Math.random() * 6) + 0);
          var random = colors[x];
          console.log("random: "+ random);*/


        }
        updateSerie(series[j]);
      }
    },
    // onError
    function(err,status){
      console.log("ERROR :" + err);
      console.log("ERROR_RESP: " + status.responseText);
      //alert(err);
    }
  );

}
