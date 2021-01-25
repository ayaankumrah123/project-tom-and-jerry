var tom,tom1,tom2
var jerry,jerry1,jerry2
var background,together
function preload() {    
     bg=loadImage("images/garden.png")  
     tom1=loadAnimation("images/tomOne.png")  
     tom2=loadAnimation("images/tomTwo.png","images/tomThree.png")  
     tom3=loadAnimation("images/tomFour.png")  
     jerry1=loadAnimation("images/jerryOne.png")  
     jerry2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")  
     jerry3=loadAnimation("images/jerryFour.png")  
}

function setup(){
    createCanvas(1000,800);
tom=createSprite(870,600);
tom.velocityX=0;
tom.addAnimation("tomLastImage", tomImg3);
tom.addAnimation("tomSleeping",tom1);
tom.x =300;
tom.scale=0.2
tom.changeAnimation("tomLastImage")


jerry=createSprite(200,600);
jerry.addAnimation("jerryStanding",jerry1);
jerry.addAnimation("jerryLastImage", jerryImg3)
tjerry.scale=0.15
jerry.changeAnimation("jerryLastImage");
}

function draw() {

    background(bg);
    
    if(tom.x-jerry.y<(tom.width-jerry.width))

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
tom.velocityX =-5
tom.addAnimation("tomRunning",tom2)
tom.changeAnimation("tomRunning")
}
if(keyCode === RIGHT_ARROW){
  jerry.velocityX =-5
  jerry.addAnimation("jerryRunning",jerry2)
  jerry.changeAnimation("jerryRunning")
  }
  //For moving and changing animation write code here
  tom.changeAnimation("tomRunning")
  jerry.changeAnimation("jerryRunning")
}
