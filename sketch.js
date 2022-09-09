
const Engine = Matter.Engine;//mecanismo
const Word = Matter.World;//mundo
const Bodies = Matter.Body;//objeto
const Body = matter.Body;



//Crie um namespace (espaço de nomes) para Mecanismo
//Crie um namespace (espaço de nomes) para Mundo
//Crie um namespace (espaço de nomes) para Corpos
//Crie um namespace (espaço de nomes) para Corpo


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


//crie o mecanismo
  //Adicione mundo ao mecanismo
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   
   

   


{

}
  
}
  
  
//crie o solo
//adicione ao mundo

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectancle(100,400,400,20,ground_options);
   World.add(world,ball);

  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);



function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);

  console.log(ground.position.y);

  //escreva uma função de retângulo para exibir o solo.
 


  
  
}

