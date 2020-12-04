function setup() {
  createCanvas(800,400);
still = createSprite(400, 200, 50, 50);
still.shapeColor = "blue"
still.debug = true
moving = createSprite(200, 200, 50, 50);
moving.shapeColor = "blue"
moving.debug = true
}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX
  moving.y = World.mouseY
  if(moving.x - still.x < moving.width / 2 + still.width/2 && still.x - moving.x < moving.width / 2 + still.width/2 &&
    moving.y - still.y < moving.height / 2 + still.height/2 && still.y - moving.y < moving.height / 2 + still.height/2  ){
  moving.shapeColor = "red"
  }
  else{moving.shapeColor = "blue"}
  

  drawSprites();
}