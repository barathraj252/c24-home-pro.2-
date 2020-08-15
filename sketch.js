
var paper,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(70,600,21,20);
	ground = new Ground(400,660,800,30)

	Engine.run(engine);
	box1 = createSprite(600,650,200,20);
	box2 = createSprite(500,595,20,100);
	box3 = createSprite(705,595,20,100);

	box1.shapeColor = color("blue");
	box2.shapeColor = color("blue");
	box3.shapeColor = color("blue");

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();

  drawSprites();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:17,y:-19})

}

}
