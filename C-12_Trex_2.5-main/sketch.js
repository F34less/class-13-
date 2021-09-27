var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImg;
var obstacle1Img, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img, obstacle6Img
var score = 0



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImg = loadImage("cloud.png")
  groundImage = loadImage("ground2.png");
  obstacle1Img = loadImage("obstacle1.png")
  obstacle2Img = loadImage("obstacle2.png")
  obstacle3Img = loadImage("obstacle3.png")
  obstacle4Img = loadImage("obstacle4.png")
  obstacle5Img = loadImage("obstacle5.png")
  obstacle6Img = loadImage("obstacle6.png")
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  text("score:::"+score, 500, 50)
  score = score +Math.round(frameCount /60)
  //console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  //spawning a obstacles
  spawnObsatacles();
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  
 // write your code here 
 if (frameCount %60 ===0){
 var clouds = createSprite(600, 100, 40, 10)
 clouds.addImage(cloudImg)
  clouds.velocityX  = -3
  clouds.y = Math.round(random(10, 60))
  clouds.scale = 0.4
  //console.log(trex.depth)
 // console.log(clouds.depth)
 clouds.depth = trex.depth;
 trex.depth = trex.depth+1
 }

 
}

function spawnObsatacles(){

if (frameCount %60 ===0){
  var obstacles = createSprite(600, 165, 10, 40)
  obstacles.velocityX = -6
var rand = Math.round(random (1, 6))

switch(rand ){
case 1:
  obstacles.addImage(obstacle1Img);
  break ;

  case 2:
  obstacles.addImage(obstacle2Img);
  break ;

  case 3:
  obstacles.addImage(obstacle3Img);
  break ;

  case 4:
  obstacles.addImage(obstacle4Img);
  break ;

  case 5:
  obstacles.addImage(obstacle5Img);
  break ;

  case 6:
  obstacles.addImage(obstacle6Img);
  break ;

}
obstacles.scale = 0.5
obstacles.lifetime = 100
}



}

