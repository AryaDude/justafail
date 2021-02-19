
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	stone = new Rock(160,500,20);
	chain = new Fling(stone.body,{x:160, y:500});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  chain.display();
  
  drawSprites();
 
}



window