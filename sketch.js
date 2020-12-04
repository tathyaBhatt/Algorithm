var fixedSprite, movingSprite;
function setup() {
  createCanvas(800,400);
  fixedSprite = createSprite(400, 200, 50, 50);
  movingSprite = createSprite(500, 100, 50, 50);
  fixedSprite.shapeColor="blue";
  movingSprite.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
 movingSprite.y = mouseY;
 movingSprite.x = mouseX;
if(movingSprite.x - fixedSprite.x < movingSprite.width/2 + fixedSprite.width/2
   &&  fixedSprite.x - movingSprite.x <  movingSprite.width/2 + fixedSprite.width/2
   &&  fixedSprite.x - movingSprite.x <  movingSprite.height/2 + fixedSprite.height/2
   && movingSprite.x - fixedSprite.x < movingSprite.height/2 + fixedSprite.height/2
   ){
movingSprite.shapeColor = "brown";
fixedSprite.shapeColor = "yellow";
}
else{
  fixedSprite.shapeColor="blue";
  movingSprite.shapeColor = "red";
}
console.log(movingSprite.x-fixedSprite.x);

  drawSprites();
}