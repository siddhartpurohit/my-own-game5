var player
var background1img;
var background2img;
var camp1;
var camp2;
var camp1img;
var camp2img;
var line;
 var playerImg                         
 var enemy;             
 var  enemyImg;
 
var arrow;
var arrowImg;



var gameState="game2";
 var game1= 1;
 var game2 = 0;
 var game9 = 2;
 var game3 = 3;
 var game4 = 4;
var backgroundable;
var backgroundtable;
var enemyGroup,enemyGroup1,enemyGroup2,enemyGroup3,enemyGroup4;
var ammoimg;
var tank1;
var tank2;
var tank3;
var tank4;
var tankimg;
var ammo;
var ammoGroup;
var ammoGroup1;
var ammoGroup2;
var ammoGroup3;
var ammo4;
var ammo5;
var ammo6;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var enemy10;
var enemyGroup5;
var enemyGroup6;
var enemy14;
function preload(){
background1img = loadImage("gf.jpg");
camp1img = loadImage("camp.png");
camp2img = loadImage("camp.png");
playerImg = loadImage("clip.png");
enemyImg = loadImage("dacu.png");
backgroundable = loadImage("war.jpg")
ammoimg = loadImage("ff.png");
tankimg = loadImage("rj.png");
backgroundtable = loadImage("grass.jpg");
}
function setup(){ 
    createCanvas(1900,1000);
  
    
    line = createSprite(640,500,20,1000);
    line.shapeColor = "black"
    player = createSprite(400,600,50,50)
    player.addImage(playerImg);
    player.scale = 0.1
    enemyGroup = createGroup(); 
    enemyGroup1 = createGroup();
    enemyGroup2 = createGroup();
    enemyGroup3 = createGroup();
    enemyGroup4 = createGroup();
    ammoGroup1 = createGroup();
    ammoGroup2 = createGroup();
    ammoGroup3 = createGroup();
    ammoGroup = createGroup();
     tank1 = createSprite(1750,250,50,50);
     tank1.addImage(tankimg);
     tank1.scale = 0.24;
     tank2 = createSprite(1750,500,50,50);
     tank2.addImage(tankimg);
     tank2.scale = 0.24;
     tank3 = createSprite(1750,750,50,50);
     tank3.addImage(tankimg);
     tank3.scale = 0.24;
    
       
     
     
    
}


function draw(){
    
    if(gameState==="game4"){
        background(backgroundable);
        fill("red");
        textSize(50);
        text("story:this is the time the war is happening in all over the world",100,100);
        text("a soldier team fighrting in the war the soldier all soldiers dead",100,250);
        text("a only soldier left in the war but the other soldier team is attacking",100,400);
        text("on the only soldier help the soldier to kill all the other soldier team ",100,550)
        text("i know you can kill all the soldiers just do it enjoy the ",100,700);
        text("Press D to enter the game");
        if(keyDown("d")){
            gameState="game2";
        }
    }

        if(gameState==="game2"){
            background(background1img)
          

           
       if(frameCount%1880===0){
           gameState="game9";
       }
           if(enemyGroup1.x >580){
            gameState = "game9";
        }
        if(enemyGroup2.x >580){
            gameState = "game9";
        }
        if(enemyGroup3.x >580){
            gameState = "game9";
        }
        if(enemyGroup4.x >580){
            gameState = "game9";
        }
        if(enemyGroup.x>580){
            gameState = "game9";
        }
            if(keyDown("RIGHT_ARROW")&&(player.position.x<580)){
              player.x = player.x+7
            }
            if(keyDown("LEFT_ARROW")&&(player.position.x>80)){
                player.x = player.x-7
            }
                if(keyDown("DOWN_ARROW")&&(player.position.y<920)){
                player.y = player.y+7
                }
                if(keyDown("UP_ARROW")&&(player.position.y>80)){
                player.y = player.y-7
                }
                tank1.visible = true;
        tank2.visible = true;
        tank3.visible = true;
        player.visible = true;
        line.visible = true;
               spawnEnemy();
                spawnAmmo();
            if(ammoGroup.isTouching(enemyGroup1)){
                gameState="game3";
            }
             if(ammoGroup.isTouching(enemyGroup)){

                 enemyGroup.destroyEach();
    
             }
             if(ammoGroup.isTouching(enemyGroup1)){
                enemyGroup1.destroyEach();
    
            }
            if(ammoGroup.isTouching(enemyGroup2)){
                enemyGroup2.destroyEach();
    
            }
            if(ammoGroup.isTouching(enemyGroup3)){
                enemyGroup3.destroyEach();
    
            }
             
                if(enemyGroup.isTouching(player)){
                    gameState = "game9";
                }
                if(enemyGroup1.isTouching(player)){
                    gameState = "game9";
                }
                if(enemyGroup2.isTouching(player)){
                    gameState = "game9";
                }
                if(enemyGroup3.isTouching(player)){
                    gameState = "game9";
                }
                if(enemyGroup4.isTouching(player)){
                    gameState = "game9";
                }
                if(ammoGroup.isTouching(enemyGroup4)){
                    enemyGroup4.destroyEach();
                }
                
             if(ammoGroup1.isTouching(player)){
                 gameState="game9";
             }
             
         
            
             if (keyDown("space"))
             {
               createAmmo();
               
             }
        }
        if(gameState==="game3"){
            background(backgroundable);
            enemyGroup.destroyEach();
            enemyGroup1.destroyEach();
            enemyGroup2.destroyEach();
            enemyGroup3.destroyEach();
            enemyGroup4.destroyEach();
           ammoGroup.destroyEach();
           ammoGroup1.destroyEach();
           ammoGroup2.destroyEach();
           ammoGroup3.destroyEach();
           tank1.visible = false;
           tank2.visible = false;
           tank3.visible = false;
           player.visible = false;
           line.visible = false;
           fill("yellow");
           textSize(50);
           text("yes you doned the game  avcourse you are a pro the  game ended  here,",100,200);
           text("you helped the soldier to survive and killed the whole team of soldiers ",100,400);
           text("thats awesome how you killed all the oppponets thats great if you want ",100,600);
           text("to see the story of the game just Click  Enter to see the story behind the game",100,800);
         
       
         if(keyDown("Enter")){
             gameState= "game4";
         }
        }
        if(gameState==="game9"){
            background(backgroundable);
            fill("yellow");
            textSize(50);
            text("OK we all know that there is almost no chance of winning but we have some hopes to you ,",100,200);
            text("dont panic just refresh page it is just like time machine just go in past,",100,400);
            text("and do beat them all we all know you do better this time enjoy the game ",100,600);

            enemyGroup.destroyEach();
            enemyGroup1.destroyEach();
            enemyGroup2.destroyEach();
            enemyGroup3.destroyEach();
            enemyGroup4.destroyEach();
           ammoGroup.destroyEach();
           ammoGroup1.destroyEach();
           ammoGroup2.destroyEach();
           ammoGroup3.destroyEach();
           tank1.visible = false;
           tank2.visible = false;
           tank3.visible = false;
           player.visible = false;
           line.visible = false;
        }
       
       console.log(frameCount);
    drawSprites();

    
}         


function spawnEnemy(){
    if(frameCount%200===0&&(frameCount<1600)){
        var enemy1 = createSprite(1550,140,50,50);
        enemy1.addImage(enemyImg);
        enemy1.scale =0.08;
        enemy1.velocityX = -4;
        enemy1.lifetime = 2500;
    

    enemyGroup.add(enemy1);
    }
   
 
    
    if(frameCount%1800===0&&(frameCount<2000)){
        var enemy2 = createSprite(800,450,50,50);
        enemy2.addImage(enemyImg);
        enemy2.scale =0.08;
        enemy2.velocityX = -4;
        enemy2.lifetime = 22000;
       
    enemyGroup1.add(enemy2);
    }
    if(frameCount%200===0&&(frameCount<1600)){
        var enemy3 = createSprite(1550,360,50,50);
        enemy3.addImage(enemyImg);
        enemy3.scale =0.08;
        enemy3.velocityX = -4;
        enemy3.lifetime = 2500;
       
    enemyGroup2.add(enemy3);
    }
    if(frameCount%200===0&&(frameCount<1600)){
        var enemy4 = createSprite(1550,580,50,50);
        enemy4.addImage(enemyImg);
        enemy4.scale =0.08;
        enemy4.velocityX = -4;
        enemy4.lifetime = 2500;
       
    enemyGroup3.add(enemy4);
    }
    if(frameCount%200===0&&(frameCount<1200)){
        var enemy5 = createSprite(1550,800,50,50);
        enemy5.addImage(enemyImg);
        enemy5.scale =0.08;
        enemy5.velocityX = -4;
        enemy5.lifetime = 2500;
       
    enemyGroup4.add(enemy5);
    }
}

   function createAmmo(){
     ammo = createSprite(100,100,920,50);
     ammo.addImage(ammoimg);
     ammo.x = player.x;
     ammo.y = player.y;
     ammo.velocityX = +22;
     ammo.scale = 0.02;
     ammo.lifetime = 2500;
     ammoGroup.add(ammo)
     return ammo
     
   }
      
    
    function spawnAmmo(){
        if(frameCount%120===0&&frameCount<1800){
            var ammo1 = createSprite(1700,700,50,50);
            ammo1.addImage(ammoimg);
            ammo1.scale = 0.02;
            ammo1.velocityX = -22;
            ammo1.lifetime = 2500;
            ammoGroup1.add(ammo1);
    
        }
        if(frameCount%160===0&&frameCount<1800){
            var ammo2 = createSprite(1700,450,50,50);
            ammo2.addImage(ammoimg);
            ammo2.scale = 0.02;
            ammo2.velocityX = -22;
            ammo2.lifetime = 2500;
            ammoGroup1.add(ammo2);

    }

    if(frameCount%80===0&&frameCount<1800){
        var ammo3 = createSprite(1700,200,50,50);
        ammo3.addImage(ammoimg);
        ammo3.scale = 0.02;
        ammo3.velocityX = -22;
        ammo3.lifetime = 2500;
        ammoGroup1.add(ammo3);


    }

}

