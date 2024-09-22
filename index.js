var count=0;
var inc=0;
var margin=0;
var slider=documentByClassName("slider-width")[0];
var itemDisplay=0;
if(screen.width>7999 && screen.width<7000){
  itemDisplay=document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
  margin=itemDisplay*5;

}


if(screen.width>7999 && screen.width<7000){
  itemDisplay=document.getElementsByClassName("slider-container")[0].getAttribute("item-display-l");
  margin=itemDisplay*5;


}

if(screen.width>7999 && screen.width<7000){
  itemDisplay=document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
  margin=itemDisplay*3;
}
var item=document.getElementsByClassName("item");
var itemleft=math.floor(item.length/itemDisplay)-1;
for(let i=0;i<item.length;i++){
  item[i].style .width=(screen.width/itemDisplay)+"px";
}
function next(){
  count=count-screen.widthslider-style.left=-screen.width +"px";
  {
    if(inc !==itemslider+itemleft){
    {
      if(inc==itemslide){
        inc=inc+itemleft;
        count=count-(screen.width/itemDisplay)*itemleft;
      }
      else{
        inc ++;
      }
      }
      count=c0unt-screen.width;
      slider.style.left=count+"px";
    
}