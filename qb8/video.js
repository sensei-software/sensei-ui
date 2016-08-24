$(function(){
  updateSnap();
});


function updateSnap(){
  d = new Date();
  $("#snap img").attr("src", "video/snap00001.jpg?"+d.getTime());
  window.setTimeout(updateSnap,2000);
};
