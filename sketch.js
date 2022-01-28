var caixa
function setup() {
  createCanvas(400,400);
caixa = createSprite(200,200,70,10)
caixa.shapeColor = "red"


}


function draw() 
{
  background(30);
drawSprites()

if(keyIsDown(UP_ARROW)){
  caixa.y = caixa.y -3
}


if(keyIsDown(DOWN_ARROW)){
  caixa.y = caixa.y +3
}


if(keyIsDown(RIGHT_ARROW)){
  caixa.x = caixa.x +3
}


if(keyIsDown(LEFT_ARROW)){
  caixa.x = caixa.x -3
}   






}




