var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn =1;

//var PLAY;
var END;

var count = 0;

var gameState = "start"; 
var gameState = "end";

function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80)
   {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
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

for(var i=0, turn=0; i < 5; i++, turn++)
    {
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     console.log(turn);
    } 

    
}
 


function draw() {
  background("black");
  textSize(30)
  text("Score : "+score,20,30);

  var count=0;
  //var turn=5;

  text("500", 15, 650);
  text("500", 95, 650);
  text("500", 175, 650);
  text("500", 255, 650);
  text("100", 330, 650);
  text("100", 410, 650);
  text("100", 490, 650);
  text("200", 575, 650);
  text("200", 655, 650);
  text("200", 735, 650);

  Engine.update(engine);
  
  ground.display();




   for (var i = 0; i < plinkos.length; i++) 
   {
     plinkos[i].display();
     
   }
   
   for(var i=0; i <= 5; i++)
   { 
  //  console.log(turn);
   if(particles[i]!=null)
   {
      particles[i].display();
       
       if (particles[i].body.position.y>760)
       {
             if (particles[i].body.position.x < 300) 
             {
                 score=score+500;      
                 particles[i]=null;
                 if ( count>= 5)
                 {
                   gameState ="end";
                   textSize(90);
                  text("GameOver", 150, 300);
                }                           
             }


             else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 ) 
             {
                   score = score + 100;
                   particles[i]=null;
                   if ( count>= 5)
                 {
                   gameState ="end";
                   textSize(90);
                  text("GameOver", 150, 300);
                }

             }
             else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 )
             {
                   score = score + 200;
                   particles[i]=null;
                   if ( count>= 5)
                 {
                   gameState ="end";
                   textSize(90);
                  text("GameOver", 150, 300);
                }

             }      
            
       }
 count++;
     }
    }
   for (var k = 0; k < divisions.length; k++)
   {
     divisions[k].display();
   } 
   
  }


  function mousePressed(){
    if(gameState !== "END"){
      count++;
      particles = new Particle(mouseX, 10, 10);
    }
  }

