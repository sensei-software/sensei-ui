$(function(){
  $("#snap img").on('load', function() {
    $("#snap img").attr("data-loading","false");
  })
  $("#snap img").attr("data-loading","false");
  updateSnap();

});


function updateSnap(){
  if($("#snap").hasClass("visible")){
    d = new Date();
    if($("#snap img").attr("data-loading")=="false"){
      $("#snap img").attr("data-loading","true");
      $("#snap img").attr("src", "video/snap00001.jpg?"+d.getTime());
    }
  }
  window.setTimeout(updateSnap,4000);
};
