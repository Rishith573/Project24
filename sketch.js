
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 550, 10);
	ground = new Ground(400, 600, 800, 10);
	dustbin1 = new Dustbin(500, 545, 20, 100);
	dustbin2 = new Dustbin(590, 585, 200, 20);
	dustbin3 = new Dustbin(700, 545, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  drawSprites();

  paper.display();
  ground.display();
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:15, y:-15})
	}
}

