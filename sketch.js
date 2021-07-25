
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
 var ball_option={
	 isStatic:false,
	 restitute:0.3,
	 friction:0,
	 density:1.2
	 
	 
 }
	//Create the Bodies Here.
	matter.bodies.circle(x,y,radius,[options],[maxSides]);
    world.add(ball, this.Body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  wall.display();
  ground.obj.display();
  leftSide.display();

  function keyPressed(){
	  if (keyCode===UP_ARROW);
	  Matter.Body.ApplyForce(ball,700,20);
  }
  drawSprites();
 
}



