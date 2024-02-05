// BACKGROUND ANIMATION
function bgAnimate() {
  $('.background').animate({
    'background-position-x': '+=2px'
 }, 100, 'linear');
window.setTimeout(function() { bgAnimate() }, 100);  
}

bgAnimate();

// ROCK ANIMATION

var rockCount = 0;
var rocks = new Array(
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock1.png' />",
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock2.png' />",
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock2.png' />",
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock3.png' />",
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock4.png' />",
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock5.png' />",
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock6.png' />",
 "<img class='rock rock1' src='http://hubka.pl/project/gokutributepage/rock7.png' />"
 );

function rockAnimate(){
 
 var windowWidth = $( window ).width();
 var randomRock = Math.floor((Math.random() * rocks.length) + 1);
 var randomSize = Math.floor((Math.random() * windowWidth/10) + 20);
 var randomPosition = Math.floor((Math.random() * (windowWidth-(randomSize))) + 1);
 var randomRotation = Math.floor((Math.random() * 360) + 1);
 
 var zIndex;

 if(randomSize<windowWidth/10){
   zIndex = 0;
 }else{
   zIndex = 2;
 }
 var randomSpeed = Math.floor((100*randomSize)+500);
 $("html").append(rocks[randomRock]);

 $(".rock").last().css({
   "width": randomSize+"px",
   "left": randomPosition+"px",
   "zIndex": zIndex,
   "transform": 'rotate(' + randomRotation + 'deg)'
 }).animate({"top": "-300px" }, randomSpeed, "linear", function(){
   this.remove();
 }  );
}


// POWER BUTTON 

$("#powerButton").click(function(){
 
  if( $("#pbs").width() == 0){
   $("#pbs").css({ width: '+=49px'});
 }else{
    $("#pbs").css({ width: '+=15px'});
 }
   
  $("#pb").stop().animate({"opacity": 1});
 
});
$("#goku img:eq(0)").fadeIn();

// POWER PROGRESS BAR

function progressBar() {
  $("#pbs").css({ width: '-=5px'});
   var progressTimeout =     window.setTimeout(function() { progressBar() }, 70);

 //TRANSFORMATIONS
 if( $("#pbs").width() >= 195)
   
 {
   
   rockCount++;
   if(rockCount%8 == 0){
     rockAnimate();
   }
   $("#redbg").fadeIn(function(){
     $("#normalbg").hide();
   }); 
  
   $("#pbs").css({backgroundColor: "#FFEA0D"}).fadeToggle( "slow", "linear" );
   
   $("#goku img:eq(2)").fadeOut(function(){
     $("#goku img:eq(3)").fadeIn();
   });
   $("#pbs").css({"min-width": "200px", });
   
      $("#superSayian2Lighting").fadeOut(0);
     for(var i=0; i <= 5; i++){
     $("#superSayian3Lighting img:eq("+i+")").delay(i*100).fadeIn(0);
    
     $("#superSayian3Lighting img:eq("+(i-1)+")").delay(i*50).fadeOut(0);
   }
 }
 


 
 else if( $("#pbs").width() >= 150)
 
 {
   $("#pbs").css({backgroundColor: "#FFEA0D"}).fadeToggle( "slow", "linear" );
   $("#pbs").css({backgroundColor: "#FFB60D"});
   $("#pbs").css({"min-width": "150px", });
   
   for(var i=0; i <= 5; i++){
     $("#superSayian2Lighting img:eq("+i+")").delay(i*100).fadeIn(50);
    
     $("#superSayian2Lighting img:eq("+(i-1)+")").delay(i*50).fadeOut(50);
   }
   
 }
 
   else if( $("#pbs").width() >= 100)
 
 {
   
   $("#pbs").css({backgroundColor: "#FFB60D"});
   $("#goku img:eq(1)").fadeOut(function(){
     $("#goku img:eq(2)").fadeIn();
   });
   $("#pbs").css({"min-width": "100px", });
   
 }
 
 else if( $("#pbs").width() >= 50)
 
 {
   
   $("#pbs").css({backgroundColor: "#FF870D"});
   $("#goku img:eq(0)").fadeOut(function(){
     $("#goku img:eq(1)").fadeIn();
   });
   $("#pbs").css({"min-width": "50px", });
   
 }
 
}

progressBar();


// RESIZE GOKU CONTAINER FOR MOBILE
$("#goku").css({"width": ($("#goku img:eq(0)").width())+"px"});