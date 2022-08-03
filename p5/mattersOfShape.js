//import Babe from "./Babe";
const wh = window.innerHeight*0.7,
    ww = window.innerWidth*0.7;

// module aliases
let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Mouse = Matter.Mouse;
    MouseConstraint = Matter.MouseConstraint;
    
let engine, world, nameblock, smiley, iam, mConstarint,hi;
let balls = [];
let walls = [];

function setup() {
  let canvas = createCanvas(ww,wh);
  smiley = loadImage("../assets/Smiley.png");
  iam = loadImage("../assets/iam.png");
  hi = loadImage("../assets/hisvg.svg");
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  balls.push( new Babe(200, 100, 50, smiley));
  balls.push( new Babe(140, 150, 50,  smiley));
  balls.push( new Babe(220, 350, 50, hi));
  for (let i = 0; i < 15; i++){
    balls.push(new Babe(300 - (i+30) * 4, 15 + (i+20) * 5, 16, iam))
 }
  nameblock = new Chaf(400, 30, 400, 70, 30);
  walls.push(new Boundary( width/2, height, width, 20, 0));
  walls.push(new Boundary( 0, height/2, height, 20, PI/2));
  walls.push(new Boundary( width, height/2, height, 20, PI/2));
  walls.push(new Boundary( width/2, 0, width, 20, 0));
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {  
    mouse: canvasmouse
  }
  mConstarint = MouseConstraint.create(engine, options);
  World.add(world, mConstarint)
};
function mouseDragged(){
  balls.push(new Babe(mouseX, mouseY, 5, iam))
}

  
function draw() {
background(96, 7, 205);
for (let i = 0; i < balls.length; i++){
   balls[i].show();
}
for (let i = 0; i < walls.length; i++){
  walls[i].show();
}
//nameblock.show();
};

