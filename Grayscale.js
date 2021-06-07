  var image;
function upload(){
  var imgcanvas=document.getElementById("d1");
  var fileinput= document.getElementById("img");
  image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
function dogray(){
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    pixel.setRed(avg);
  }
  var imgcanvas=document.getElementById("d1");
  image.drawTo(imgcanvas);
}
