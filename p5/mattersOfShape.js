const wh = window.innerHeight*0.7,
    ww = window.innerWidth*0.7;

// module aliases
let Engine = Matter.Engine,
   // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
    
// create an engine
let engine, world, smiley;
let balls = [];
let walls = [];

function setup() {
  let canvas = createCanvas(ww,wh);
  smiley = loadImage("../assets/Smiley.png");
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  balls.push( new Babe(200, 100, 50));
  balls.push( new Babe(140, 150, 50));
  balls.push( new Babe(220, 350, 50));
  walls.push(new Boundary( width/2, height, width, 20, 0));
  walls.push(new Boundary( 0, height/2, height, 20, PI/2));
  walls.push(new Boundary( width, height/2, height, 20, PI/2));
};
function mousePressed(){
  balls.push(new Babe(mouseX, mouseY, 50))
}

  
function draw() {
background(96, 7, 205);
for (let i = 0; i < balls.length; i++){
   balls[i].show();
}
for (let i = 0; i < walls.length; i++){
  walls[i].show();
}
// push();
// noStroke();
// fill(167, 101, 247);
// rectMode(CENTER);
// rect(width/2, height, width, 20)
// pop();
};

