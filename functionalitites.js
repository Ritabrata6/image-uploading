function upload(){
  var imgcanvas=document.getElementById("d1");
  var fileinput= document.getElementById("img");
  var image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
