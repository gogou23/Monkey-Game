
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup,obstacle, obstacleGroup
var ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 400); 

    
 monkey = createSprite(50,250,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.15;
  
  ground = createSprite(300,310,600,5);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x)
 
  //creating sprite groups
  FoodGroups=createGroup();
  obtacleGroup=createGroup();
}


function draw() {
   background(180);
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 450,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 30,50);
  
  //Jump when space is pressed
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY=-12;
  }
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  //make mokey collide with ground
  monkey.collide(ground);

  //set velocity to ground
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  //spawn food
   food();
  
  //spawn obstacles
  obstacles();
  drawSprites();
}

function food(){
   if (frameCount %80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale=0.10;
  banana.velocityX=-4;
     
     //assign lifetime to the food
     banana.lifeTime=100;
     
     //adding to group
     FoodGroups.add(banana);
   }
}

function obstacles(){
  if (frameCount %300 === 0) {
    obstacle = createSprite(550,280,20,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-4;
  
    //assign lifetime to obstacle
    obstacle.lifeTime=100;
   
}
}




