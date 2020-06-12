const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,wall,ground,rect1,rect2;



function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  wall = new Box(330,690,300,500);
  ground = new Ground(400,750,800,50);
  rect1 = new Wall(100,600,100,400);
 rect2 = new Rect(560,600,100,400);
 square1 = new Sq(50,380,20,20);
 square2 = new Sq(145,380,20,20);
 square3 = new Sq(510,390,20,20);
 square4 = new Sq(600,390,20,20);
}

function draw() {
  background("black");  
  Engine.update(engine);

  wall.display();
  text("x:y "+mouseX+" "+mouseY,mouseX,mouseY)
  ground.display();
  rect1.display();
  rect2.display();
  square1.display();
  square2.display();
  square3.display();
  square4.display();
}
