var road,girl,bag,bomb,fik,food,food1,gloves,tent,torch,umbrella,water,rope;
var roadImg,girlImg,bagImg,bombImg,fikImg,foodImg,food1Img,glovesImg,tentImg,torchImg,umbrellaImg,waterImg,ropeImg;
var totalPoints = 0;
var bagG,bombG,fikG,foodG,food1G,glovesG,tentG,torchG,umbrellaG,waterG;

var restartButtonImg, gameOverImg;
var restartButton;

//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
    roadImg = loadImage("Road.png");
    girlImg = loadAnimation("girl.gif");
    bagImg = loadImage("bag.png");
    bombImg = loadImage("bomb.png");
    fikImg = loadImage("fik.png");
    foodImg = loadImage("food.png");
    food1Img =loadImage("food1.png");
    ropeImg =loadImage("rope.png");
    tentImg =loadImage("tent.png");
    torchImg =loadImage("torch.png");
    umbrellaImg =loadImage("umbrella.png");
    waterImg =loadImage("water.png");
    glovesImg = loadImage("gloves.png");
  
    restartButtonImg = loadImage("restartbutton.png");
    gameOverImg = loadImage("gameOver.png");
}

function setup(){  
    createCanvas(windowWidth,windowHeight);
    // Moving background
    road=createSprite(width/2,200);
    road.addImage("road",roadImg);
    road.scale=4;
    road.velocityY = 4;

    //creating girl running
    girl = createSprite(width/2,height-50,20,50);
    girl.addAnimation("girl",girlImg);
    girl.scale=0.8;
    girl.depth=road.depth;
    girl.depth=girl.depth+1;
    girl.addImage("gameOver",gameOverImg);
  
    restartButton = createSprite(width/2,height/2 + 80);
    restartButton.scale = 0.5;
    restartButton.addImage("restartButtonImg",restartButtonImg);
    
    

    bagG=new Group();
    bombG=new Group();
    fikG=new Group();
    foodG=new Group();
    food1G=new Group();
    glovesG=new Group();
    tentG=new Group();
    torchG=new Group();
    umbrellaG=new Group();
    waterG=new Group();
    ropeG=new Group();

    }

function draw() {
    background(0);
    
    if(gameState===PLAY){ 
       // console.log("hi");
        girl.x = World.mouseX;
        restartButton.visible=false;

        edges= createEdgeSprites();
        girl.collide(edges);
        //console.log(road.y)

        //code to reset the background
        if(road.y > height ){
        road.y = height/2;
        }

        createBag();
        createBomb();
        createFik();
        createFood();
        createFood1();
        createGloves();
        createTent();
        createTorch();
        createUmbrella();
        createWater();
        createRope();

        if (bagG.isTouching(girl)) {
            bagG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (fikG.isTouching(girl)) {
            fikG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (foodG.isTouching(girl)) {
            foodG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (food1G.isTouching(girl)) {
            food1G.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (glovesG.isTouching(girl)) {
            glovesG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (tentG.isTouching(girl)) {
            tentG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (torchG.isTouching(girl)) {
            torchG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (umbrellaG.isTouching(girl)) {
            umbrellaG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (waterG.isTouching(girl)) {
            waterG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if (ropeG.isTouching(girl)) {
            ropeG.destroyEach();
            totalPoints=totalPoints + 8;
        }
        else if(bombG.isTouching(girl)) {
            // textSize(40);
            // fill("teal");
            // //text("Game Over!",width/2,height/2);
            gameState = END;
        }
        else if(totalPoints>150){
            
            // gameState = END;
        }
                    
    }else if(gameState === END){
        bagG.destroyEach();
        bombG.destroyEach();
        fikG.destroyEach();
        foodG.destroyEach();
        food1G.destroyEach();
        tentG.destroyEach();
        torchG.destroyEach();
        glovesG.destroyEach();
        waterG.destroyEach();
        umbrellaG.destroyEach();
        ropeG.destroyEach();
        
        bagG.setVelocityYEach(0);
        bombG.setVelocityYEach(0);
        tentG.setVelocityYEach(0);
        torchG.setVelocityYEach(0);
        ropeG.setVelocityYEach(0);
        foodG.setVelocityYEach(0);
        food1G.setVelocityYEach(0);
        fikG.setVelocityYEach(0);
        waterG.setVelocityYEach(0);
        umbrellaG.setVelocityYEach(0);
        glovesG.setVelocityYEach(0);

        road.velocityY=0;
        totalPoints=0;
        girl.changeAnimation("gameOver",gameOverImg);
        girl.x = width/2;
        girl.y = height/2-200;
        restartButton.visible = true;
      
        if(mousePressedOver(restartButton)){
          reset();
        }
        
    }

    drawSprites();
    textSize(25);
    textFont("raleway")
    fill("Green");
    text("TOTAL POINTS EARNED : "+ totalPoints,width-345,30);
  }
   
function reset(){
  gameState = PLAY;
  totalPoints = 0;
  girl.x = width/2;
  girl.y = height-50;
  girl.changeAnimation("girl",girlImg);
  road.velocityY = 4;
}
function createBag() {
    if (World.frameCount % 200 == 0) {
        var bag = createSprite(Math.round(random(50, width-50),40, 10, 10));
        bag.addImage("bag", bagImg);
        bag.scale=0.175;
        bag.velocityY = 10;
        bag.lifetime = 300;
        bagG.add(bag);
    }
}

function createFik() {
    if (World.frameCount % 320 == 0) {
        var fik = createSprite(Math.round(random(50, width-50),40, 10, 10));
        fik.addImage("fik",fikImg);
        fik.scale=0.2;
        fik.velocityY = 10;
        fik.lifetime = 300;
        fikG.add(fik);
    }
}

function createFood() {
    if (World.frameCount % 410 == 0) {
        var food = createSprite(Math.round(random(50, width-50),40, 10, 10));
        food.addImage("food",foodImg);
        food.scale=0.175;
        food.velocityY = 10;
        food.lifetime = 300;
        foodG.add(food);
    }
}
function createFood1() {
    if (World.frameCount % 440 == 0) {
        var food1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
        food1.addImage("food1",food1Img);
        food1.scale=0.175;
        food1.velocityY = 10;
        food1.lifetime = 300;
        food1G.add(food1);
    }
}
function createTent() {
    if (World.frameCount % 490 == 0) {
        var tent = createSprite(Math.round(random(50, width-50),40, 10, 10));
        tent.addImage("tent",tentImg);
        tent.scale=0.175;
        tent.velocityY = 10;
        tent.lifetime = 300;
        tentG.add(tent);
    }
}
function createTorch() {
    if (World.frameCount % 510 == 0) {
        var torch = createSprite(Math.round(random(50, width-50),40, 10, 10));
        torch.addImage("torch",torchImg);
        torch.scale=0.175;
        torch.velocityY = 10;
        torch.lifetime = 300;
        torchG.add(torch);
    }
}
function createGloves() {
    if (World.frameCount % 540 == 0) {
        var gloves = createSprite(Math.round(random(50, width-50),40, 10, 10));
        gloves.addImage("gloves",glovesImg);
        gloves.scale=0.175;
        gloves.velocityY = 10;
        gloves.lifetime = 300;
        glovesG.add(gloves);
    }
}
function createRope() {
    if (World.frameCount % 590 == 0) {
        var rope = createSprite(Math.round(random(50, width-50),40, 10, 10));
        rope.addImage("rope",ropeImg);
        rope.scale=0.175;
        rope.velocityY = 10;
        rope.lifetime = 300;
        ropeG.add(rope);
    }
}
function createUmbrella() {
    if (World.frameCount % 600 == 0) {
        var umbrella = createSprite(Math.round(random(50, width-50),40, 10, 10));
        umbrella.addImage("umbrella",umbrellaImg);
        umbrella.scale=0.175;
        umbrella.velocityY = 10;
        umbrella.lifetime = 300;
        umbrellaG.add(umbrella);
    }
}
function createWater() {
    if (World.frameCount % 630 == 0) {
        var water = createSprite(Math.round(random(50, width-50),40, 10, 10));
        water.addImage("water",waterImg);
        water.scale=0.175;
        water.velocityY = 10;
        water.lifetime = 300;
        waterG.add(water);
    }
}

function createBomb(){
    if (World.frameCount % 530 == 0) {
        var bomb = createSprite(Math.round(random(50, width-50),40, 10, 10));
        bomb.addImage(bombImg);
        bomb.scale=0.3;
        bomb.velocityY = 25;
        bomb.lifetime = 300;
        bombG.add(bomb);
    }
}
