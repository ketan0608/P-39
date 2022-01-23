//creating the variable for the game
var ground,groundImage;
var bow,bowimage;
var red,redimage,red2,red3,red4,red5,red6,red7,red21,red22,red23;
var blue,blueimage,blue2,blue3,blue4,blue5,blue6,blue21,blue22;
var green,greenimage,green2,green3,green4,green21;
var pink,pinkimage,pink2,pink3,pink4,pink5,pink21;
var arrow,arrowimage;
var score=0 ;
var arrowgroup,redgroup,bluegroup,greengroup,pinkgroup; 
function preload(){ 
  
  //loading images for the game
  groundImage=loadImage("background0.png"); 
bowimage=loadImage("bow0.png");
  redimage=loadImage("red_balloon0.png");
  blueimage=loadImage("blue_balloon0.png");
  greenimage=loadImage("green_balloon0.png");
  pinkimage=loadImage("pink_balloon0.png");
  arrowimage=loadImage("arrow0.png");
} 
function setup() { 
  
  createCanvas(600,500); 
  
 //creating the background
  ground = createSprite(0,0,600,600);
 ground.addImage(groundImage); 
  ground.scale=2.5;
  
    //greating the group
   arrowgroup = new Group();
   redgroup = new Group();
   bluegroup = new Group();
   greengroup = new Group();
   pinkgroup = new Group();
  
  //creating the bow
  bow = createSprite(550,200,20,20);
  bow.addImage(bowimage);

  }


 function draw() { 
   
   //creating the edges
 createEdgeSprites();      
    
   //giving velocity to the ground
  ground.velocityX=-2;
  
   //creating an infinite scrolling ground
  if (ground.x < 10){
ground.x = ground.width/2;
}
        bow.x = camera.position.x
        bow.y = camera.position.y
    
   //moving the bow with the mouse
bow.y=World.mouseY;
    
  var select_balloon = Math.round(random(1,4));
   
   if(keyDown(DOWN_ARROW)){
     bow.velocityY = -2;
   }
   if(keyDown(UP_ARROW)){
     bow.velocityY = 2;
   } 
   if(keyDown(LEFT_ARROW)){
     bow.velocityX = -2
   }
   if(keyDown(RIGHT_ARROW)){
     bow.velocityX = 2
   }
   
 if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

   //giving the points when the arrow touches red balloon
   if(arrowgroup.isTouching(redgroup)){
      redgroup.destroyEach();
     arrowgroup.destroyEach();
      score = score+1;
      }
   
   //giving the points when the arrow touches blue balloons
  if(arrowgroup.isTouching(bluegroup)){
     bluegroup.destroyEach();
     arrowgroup.destroyEach();
     score = score+2;
     }
   
    //giving the points when the arrow touches pink balloons
  if(arrowgroup.isTouching(pinkgroup)){
     pinkgroup.destroyEach();
     arrowgroup.destroyEach();
     score = score+3;
     }
   
    //giving the points when the arrow touches green balloons
  if(arrowgroup.isTouching(greengroup)){
    greengroup.destroyEach();
     arrowgroup.destroyEach();
     score = score+5;
     }
   
   //calling the create arrow function
       if(keyDown("space")) {
         createArrow();
       }
 
   
   //creating the sprites
  drawSprites(); 
   
   //creating the scoreboard
   textSize(20);
    text("Score: "+ score, 270,50);
   
}

function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redimage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
   redgroup.add(red);
  return red;
 }

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueimage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bluegroup.add(blue);
  return blue;
  }

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenimage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greengroup.add(green);
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkimage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkgroup.add(pink);
  return pink;
}

// Creating  arrows for bow
 function createArrow() {
 arrow= createSprite(100, 100, 60, 10);
   arrow.velocityX=-5;
  arrow.addImage(arrowimage);
  arrow.x = bow.x;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 200;
  arrow.scale = 0.3;
  arrowgroup.add(arrow);
  return arrow;
   
}