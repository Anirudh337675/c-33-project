const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 

var divisions=[];
var particles=[];
var plinkos=[];

var particle;

var turn=0;

var gameState="play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,800,480,10)


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  textSize(20)
  fill("lightgreen")
 text("Score : "+score,20,30);
 fill("white")
 text("500",25,530);
 text("500",105,530);
 text("500",265,530);
 text("500",185,530);

 text("100",345,530);
 text("100",425,530);
 text("100",505,530);

 text("200",585,530);
 text("200",665,530);
 text("200",745,530);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500
        particle=null
        if (turn>=5)gameState="end"
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>301 &&particle.body.position.x <600){
        score=score+100
        particle=null
        if (turn>=5)gameState="end"
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>601 &&particle.body.position.x <900){
        score=score+200
        particle=null
        if (turn>=5)gameState="end"
      }
    }
  }
  if(turn>=5){
    gameState="end"
    textSize(30)
    fill("yellow")
    text("GAME OVER",400,400)
  }

}
function mousePressed(){
  if(gameState!=="end"){
    turn++
    particle=new Particle(mouseX,10,10,10)
  }
}