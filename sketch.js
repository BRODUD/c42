
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0, ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  monkey = createSprite(100,450,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.138372999;

  ground = createSprite(500,490,1000,10)
  ground.shapeColor = "black"
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background(220);
 if (keyDown("space")){
   monkey.velocityY = -12
 }
   monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground); 
  console.log(frameCount);
   text(mouseX+","+mouseY,mouseX, mouseY)
  if (monkey.isTouching(FoodGroup)){
    score = score+1
    FoodGroup.destroyEach();
  }
  Banana();
  Rock();
  text("SCORE : "+score,360,20);
  if (monkey.isTouching(obstacleGroup)){
    FoodGroup.setLifetimeEach(0);
    obstacleGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
  }
  
  drawSprites();
  
}

function Banana(){
  if (frameCount%80===0){
  banana = createSprite(500,120);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.168683859938699;
  banana.velocityX = -7;
    banana.lifeime = 80;
    FoodGroup.add(banana);
  }
}

function Rock(){
  if (frameCount%300===0){
  obstacle = createSprite(430,445,10,10);
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.2
  obstacle.velocityX = -7
  obstacle.lifetime = 100 
    obstacleGroup.add(obstacle);
  }
}


