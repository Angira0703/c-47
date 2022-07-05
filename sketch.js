var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;

var engine, world;
var ground;
var pins  = []
var balls = [];
var slots = [];
var divHeight = 150;
var count = 0;
var ball;
var gameState = "start"
var score = 0;

function setup() {
  createCanvas(500, 500);
  engine = Engine.create()
  world = engine.world;
  ground = new Ground(0, 490, 500, 10)


 //slots

 for(var s = 0; s <= width; s += 100){
  slots.push(new Slots(s, height-divHeight/2+5, 10, divHeight-15))
 }

 for(var p = 45; p <= width; p += 50){
  pins.push(new Pin(p, 75))
 }

 for(var p = 19; p <= width; p += 50){
  pins.push(new Pin(p, 135))
 }

 for(var p = 45; p <= width; p += 50){
  pins.push(new Pin(p, 195))
 }

 for(var p = 19; p <= width; p += 50){
  pins.push(new Pin(p, 255))
 }

 
  
}

function draw() {
  background("#ed841a");
 // image();
 textSize(30)

text("Score: "+ score, 380, 35)

  textSize(50)
  text("5", 35, 450)
  text("10", 120, 450)
  text("15", 220, 450)
  text("20", 325, 450)
  text("25", 423, 450)
  
  Engine.update(engine);
  ground.display();

  if (gameState == "end"){
    textSize(30)
    text("Game Over!", 180, 250)
  }
  

  for(var i = 0; i < pins.length; i ++){
    pins[i].display();
  }

  if(ball != null){
    ball.display()
    if(ball.body.position.y > 460){
      if(ball.body.position.x < 100){
       score += 5
       ball = null
       if(count >= 5){gameState = "end"}
      }
      else if(ball.body.position.x < 200 && ball.body.position.x > 101){
      score += 10
      ball = null
      if(count >= 5){gameState = "end"}
      }
      else if(ball.body.position.x < 300 && ball.body.position.x > 201){
        score += 15
        ball = null
        if(count >= 5){gameState = "end"}
      }
      else if(ball.body.position.x < 400 && ball.body.position.x > 301){
        score += 20
        ball = null
        if(count >= 5){gameState = "end"}
      }

      else if(ball.body.position.x < 500 && ball.body.position.x > 401){
        score += 25
        ball = null
        if(count >= 5){gameState = "end"}
      }
    }
  }
  
  


  for(var s = 0; s < slots.length; s ++){
    slots[s].display();
  }

  
}



function mousePressed(){
  if(gameState !== "end"){
    count++
    ball = new Ball(mouseX, 10, 15, 15)
  }
}

