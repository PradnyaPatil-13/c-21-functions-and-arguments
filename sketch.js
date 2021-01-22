var fixedRect,movingRect;

function setup() {

  createCanvas(800,400);

  fixedRect= createSprite(700, 200, 50, 300);
  movingRect= createSprite(400, 200, 80, 30);

  box1 = createSprite(100,100,20,20);
  box1.velocityX = 3;

  box2 = createSprite(100,200,20,20);
  box2.velocityX = 3;

}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  
  //to detect collision, calling function with parameter
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else{
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }

  //calling the function bounceoff
  collide(fixedRect,box2)
  bounceOff(fixedRect,box1)
  drawSprites();
}

