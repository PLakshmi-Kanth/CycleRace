    //creating sprites
var path,mainCyclist,players;
var pathImg,mainRacerImg1,mainRacerImg2;


var END =0;
var PLAY =1;
var gameState = PLAY;
var oppCyclistsG;
var distance=0;
var sedlect_oppPlayer;
var c,gameOver;
var gameOverImage;

function preload()
  {
  //preloading the animations
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 =    loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  player1Image=loadImage("opponent2.png");
  player2Image=loadImage("opponent4.png");
  player3Image=loadImage("opponent7.png");
  gameOverSound=loadSound("gameover.mp3");
  mainPlayer3Image=loadImage("mainPlayer3.png");
  oppCyclistsImage1=loadImage("opponent3.png");
  gameOverImage=loadImage("gameOver-1.png");
  
  }

function setup()
  {
  
createCanvas(displayWidth,displayHeight-150);
  
  // Moving background
  path=createSprite(displayWidth/2,displayHeight/2-200);
  path.addImage(pathImg);
  path.velocityX = -(6+2*distance/100);

  //creating boy running
  mainCyclist  = createSprite(70,displayHeight-400,20,20);
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  mainCyclist.scale=0.07;
  
  //creating oppCyclistsGroup
  oppCyclistsGroup=new Group();
  
  //creating gameOver sprite
  gameOver=createSprite(750,350,20,20);
  gameOver.addImage("gameOver",gameOverImage);
  gameOver.scale=0.8;
  gameOver.visible=false;  
  }

function draw() 
  {
  background(0);
  
  //adding code to PLAY state 
  if(gameState===PLAY)
  {
   
    

    
      
    
   
   
    mainCyclist.y = World.mouseY;
  
    camera.position.x = mainCyclist.x;
    camera.position.y = mainCyclist.y;

   edges= createEdgeSprites();
   
   distance=distance+Math.round(getFrameRate()/50); 
   
    
   mainCyclist .collide(edges);
 
     
    
  //code to reset the background
  if(path.x < 0 )
  {
     path.x = width/2;
     oppCyclists();
  }
  if(mainCyclist.isTouching(oppCyclistsGroup))
  {
     gameState=0; 
  }
  } else
 
    //adding code to END state
    if(gameState===END)
  {
    gameOver.visible=true;
    textSize(20);
    fill(255);
    text("press Up Arrow to restart th game!",200,300);
    mainCyclist.destroy();
    oppCyclistsGroup.destroyEach();
    oppCyclistsGroup.setVelocityXEach(0);
    path.velocityX=0;
   if(keyDown("UP_ARROW"))
  {
    reset(); 
  }
   
  }
   drawSprites();
   textSize(20);
   fill(255);
   text("Distance: "+ distance,350,30);

  }
  //creating oppCyclists function
function oppCyclists()
  {
 
var                                                      players=createSprite(1100,Math.round(random(50,250))); 
   players.scale=0.06;
var c=Math.round(random(1,4));
   console.log(c);
        if(c==2)
  {
   players.addAnimation("pinkCyclists",player1Image);
  }else if(c==3)
  {
   players.addAnimation("pinkCyclists",player2Image);
  }else{
   players.addAnimation("pinkCyclists",player3Image);
 
  }players.lifetime=170;
   players.velocityX=-(6+1*distance/150);                  oppCyclistsGroup.add(players);
  }   
  //creating reset function
function reset()
  {
   gameState=PLAY;
   gameOver.visible=false;
   distance=0;
   path.velocityX = -(6+2*distance/100);
   mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
   mainCyclist.scale=0.07;

  }










