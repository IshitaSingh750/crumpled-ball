var ground;
var dustbinImg,dustbinSprite;
var paperImg,paperSprite;
var log1Sprite,log2Sprite,log3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 650, 800, 10);
	
	dustbinSprite = new Bin(600, 580, 150, 150);

	paperSprite = new Paper(100,200,70);
	
	log1Sprite=new Log(700, 650, 200, 20);

	log2Sprite=new Log(600, 610, 20, 100);  

	log3Sprite=new Log(800, 610, 20, 100);
 

	Engine.run(engine);
 

}


function draw() {
  rectMode(CENTER);
  background(225);
  
  ground.display();
  paperSprite.display();
  dustbinSprite.display();
  log1Sprite.display();
  log2Sprite.display();
  log3Sprite.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperSprite.body,paperSprite.body.position, {x:300, y: -600});
	}
}

