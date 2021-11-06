var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup=new Group();
  climbersGroup=new Group();
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;
invisibleBlockGroup=new Group();
spookySound.loop();

}

function draw() {
  background(200);
  if(gameState=="play"){


    
  
  
  if(tower.y > 400){
      tower.y = 300
    }
    SpawnDoors()    

if(keyDown("left_arrow")){
  
  ghost.x=ghost.x-3;


}
if(keyDown("right_arrow")){
  
  ghost.x=ghost.x+3;


}

if(keyDown("space")){
  
  ghost.velocityY=-5;


}
ghost.velocityY=ghost.velocityY+0.6


if(climbersGroup.isTouching(ghost)){

ghost.velocityY=0


}
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){

    ghost.destroy();
    gameState="end"
  }



drawSprites();
}
if(gameState=="end"){
  fill("yellow");
  stroke("yellow");
  textSize(30);
  textFont("Times New Roman")
  text(" 😯 Game-Over 😯 ",230,250)

}


}
function SpawnDoors(){
if(frameCount%240===0){
door=createSprite(200,-50);
door.addImage("door",doorImg);
door.x=Math.round(random(120,400));
door.velocityY=1;
door.lifetime=750;
doorsGroup.add(door);

climber=createSprite(200,10);
climber.addImage("climber",climberImg);
climber.x=door.x;
climber.velocityY=1;
climber.lifetime=750;
climbersGroup.add(climber);

ghost.depth=door.depth
ghost.depth+=1

invisibleBlock=createSprite(200,15);
invisibleBlock.x=door.x;
invisibleBlock.width=climber.width;
invisibleBlock.velocityY=1;
invisibleBlock.lifetime=750;
invisibleBlock.debug=true;
invisibleBlock.height=2


invisibleBlockGroup.add(climber);



}



}