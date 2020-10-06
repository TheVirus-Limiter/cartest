var wall1
var wall2
var wall3
var Zenia	 
var Tourus
var Cyclap;
var zeniaDF;
var tourusDF;
var cyclapDF;
var Zeniaweight = 2260;
 var Zeniaspeed = 60;
  var Tourusweight = 1522;
   var Tourusspeed = 50;
    var Cyclapweight = 3000;
     var Cyclapspeed = 45;
    

function setup() {
  createCanvas(800,400);
  
Zenia = createSprite(200,200,20,20);
Tourus = createSprite(400,200,20,20);
Cyclap = createSprite(600,200,20,20);
wall1 = createSprite(200,300,30,10);
wall2 = createSprite(400,300,30,10);
wall3 = createSprite(600,300,30,10); 



}


function draw() {
  background(255,255,255);  
  drawSprites();

zeniaDF = 0.5 * Zeniaweight * Zeniaspeed * Zeniaspeed/22500;
tourusDF = 0.5 * Tourusweight * Tourusspeed * Tourusspeed/22500;
cyclapDF = 0.5 * Cyclapweight * Cyclapspeed * Cyclapspeed/22500;
Zenia.collide(wall1);
Tourus.collide(wall2);
Cyclap.collide(wall3);
Cyclap.velocityY = 5;
Tourus.velocityY = 5;
  Zenia.velocityY = 5;

zChek();
Tcheck();
cCheck();

}

function zChek(){
  if (zeniaDF > 180){

    Zenia.shapeColor = "red";
    
    }
    if (zeniaDF < 180 && zeniaDF > 100){
    
      Zenia.shapeColor = "yellow";
      
      }
      
    
    if (zeniaDF < 100){
    
      Zenia.shapeColor = "green";
      
      }
     





}



function Tcheck(){




  if (tourusDF > 180){

    Tourus.shapeColor = "red";
    
    }
    if (tourusDF < 180 && tourusDF > 100){
    
      Tourus.shapeColor = "yellow";
      
      }
      
    
    if (tourusDF < 100){
    
      Tourus.shapeColor = "green";
      
      }
     
}

function cCheck(){



  if (cyclapDF > 180){

    Cyclap.shapeColor = "red";
    
    }
    if (cyclapDF < 180 && cyclapDF > 100){
    
      Cyclap.shapeColor = "yellow";
      
      }
      
    
    if (cyclapDF < 100){
    
      Cyclap.shapeColor = "green";
      
      }



}

