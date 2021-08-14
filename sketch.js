var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,AppleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  var num = Math.round(random(1,2));
if (frameCount % 80 == 0){
  if (num == 1){
CreateApples();
  }
else {
  CreateLeaves();
}
}
  drawSprites();
}

function CreateApples(){
apple = createSprite(random(50,350),40,10,10);
apple.scale = 0.1;
apple.addImage(AppleImg);
apple.velocityY = 3;
apple.lifetime = 200;
}
function CreateLeaves(){
  leaf  = createSprite(random(200,500),40,10,10);
  leaf.scale = 0.1;
  leaf.addImage(leafImg);
  leaf.velocityY = 3;
  leaf.lifetime = 200;
}