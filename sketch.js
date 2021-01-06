var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;  
  
ground = createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)
bananaGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background ("lightblue");
  if(obstacleGroup.isTouching(monkey)){
   obstacleGroup.setVelocityXEach(0);
   bananaGroup.setVelocityXEach(0);
  bananaGroup.destroyEach();
  score=0;
  }
  drawSprites();
banana();
  obstacle();
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -10;
  
     }
monkey.velocityY = monkey.velocityY + 0.8 ;
monkey.collide(ground);

textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("survival Time :"+ survivalTime, 100,50);
 if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
}

function banana(){
if(frameCount % 60 === 0){
var Banana = createSprite(400,100,40,10);
Banana.y = Math.round(random(120,200));
Banana.addImage(bananaImage);
Banana.scale=0.1;
Banana.Lifetime=100;
Banana.velocityX=-4;
bananaGroup.add(Banana);
}  
}

function obstacle(){
if(frameCount % 300 === 0){
var obstacle = createSprite(500,330,40,10);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;
obstacle.Lifetime=100;
obstacle.velocityX=-4;
obstacleGroup.add(obstacle);
}  
}





