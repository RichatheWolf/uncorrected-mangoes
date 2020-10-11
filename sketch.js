
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	kid = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new tree (1050, 580)
	ground1 = new ground(width/2,600,width,20);
	rock1 = new rock(235,420,30);
	fruit1 = new fruit(910, 167, 35)
	fruit2 = new fruit(1010, 200, 30)
	fruit3 = new fruit(1250, 250, 35)
	fruit4 = new fruit(1170, 90, 30)
	fruit5 = new fruit(1090, 70, 38)
	fruit6 = new fruit(1200, 190, 33)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  textSize(25); 
  text("Press Space to get a second Chance to Play!!",50 ,50); 
  image(kid ,200,340,200,300)
  
  tree1.display()
  ground1.display()
  rock1.display()
  fruit1.display()
  fruit2.display()
  fruit3.display()
  fruit4.display()
  fruit5.display()
  fruit6.display()
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(rock1.body, {x:mouseX, y:mouseY}) }

