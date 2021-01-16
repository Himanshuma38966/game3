
//creating variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var dino ,dino_running;
var banana ,bananaImage, bananaGroup,obstacle, obstacleImage,obstacleGroup;
var score=0;
var  ground_Img
var sound


function preload()
{
  ground_Img =loadImage("back2.png")
 dino_running =loadAnimation("dino1.png","dino2.png","dino3.png","dino4.png","dino5.png");
  
bananaImage = loadImage("meat.png");
obstacleImage = loadImage("cascuta.png.png")
sound = loadSound("videoplayback.mp3")
}



function setup() {
  createCanvas(1000, 400);
  
   ground=createSprite(400,355,10000,10)
   ground.visible=false
 
  
  dino=createSprite(100,200,500,5)
  dino.addAnimation("moving",dino_running);
  dino.scale=2;
//  monkey.debug=true
  //monkey.setCollider("rectangle",0,0,20,50)
   bananaGroup=new Group ();     
  obstacleGroup=new Group ();
}




function draw() {
  background(ground_Img);
  dino.velocityY = dino.velocityY + 0.8
  textSize(40)
  textStyle(ITALIC);
  text("score"+score ,300,300)
  
 //making monkey jump when space is pressed
if( gameState===PLAY){
   if(dino.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
     score=score+1
     sound.play();
   }
   
 if(keyDown("space"))
  {
    dino.velocityY=-12
   
  }
 spawnbanana();
spawnobstacle();
   
 
  
    
    
   



 if(dino.isTouching(obstacleGroup))  {
   
   gameState=END
  }
  dino.collide(ground);
  drawSprites()
}

   if (gameState === END) {
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  
     ground.velocityX = 0;
        dino.velocityY = 0
  
   }
}
       
                                  

  
   function spawnbanana(){
if (World.frameCount%200===0){
banana=createSprite(100,200,10,5000); 
banana.x = 900
  banana.setlifetime=150;
  banana.velocityX=-3
banana.addImage( bananaImage );
  banana.scale=0.20     
  bananaGroup.add(banana);
}  
}  
  
 function spawnobstacle (){
if (World.frameCount%160===0){
obstacle=createSprite(500,280,300,2);
obstacle.setlifetime=150;
obstacle.y = 250
obstacle.x = 900
obstacle.velocityX=-3
obstacle.addImage( obstacleImage);
obstacle.scale=0.50
obstacleGroup.add(obstacle);
obstacle.scale=0.10
}  
    
}  
  
 
  































































