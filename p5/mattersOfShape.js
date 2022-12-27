const wh = window.innerHeight*0.7,
      ww = window.innerWidth*0.7;

// module aliases
let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;
    
let engine, world, nameblock, nameimg, daniblock, daniimg, smiley, smallsmiley, workblock, playimg, playblock,workimg, iam, mConstarint,hi;
let balls = [];
let walls = [];

function preload() {
  smiley = loadImage("./p5play/../assets/Smiley.png");
  smallsmiley = loadImage("./p5play/../assets/smallsmileyp.png");
  iam = loadImage("./p5play/../assets/iam.png");
  workimg = loadImage("./p5play/../assets/workst.png");
  playimg = loadImage("./p5play/../assets/play.png");
  hi = loadImage("./p5play/../assets/hisvg.svg");
  nameimg = loadImage("./p5play/../assets/nameC.png");
  daniimg = loadImage("./p5play/../assets/namDaniC.png");
}

function setup() {
  pixelDensity();
  let canvas = createCanvas(ww,wh);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  balls.push( new Babe(70, 170, 50, hi));
  balls.push( new Babe(500, 100, 50, smiley));
  // balls.push(new Babe(360, 340, 16, iam, 1))
  balls.push(new Babe(500, 460, 16, iam))
  balls.push(new Babe(310, 140, 16, iam))
  // balls.push(new Babe(310, 172, 16, iam))
  // balls.push(new Babe(310, 204, 16, iam))
  
//   for (let i = 0; i < 5; i++){
//     balls.push(new Babe(300 - (i+30) * 4, 205 + (i+20) * 5, 16, iam))
//  }
  workblock = new Poly(200, 400, 3, 80, 0, workimg);
  playblock = new Poly(320, 370, 5, 75, 0, playimg);
  nameblock = new Chaf(170, 270, 300, 50, 0, nameimg);
  daniblock = new Chaf(350, 95, 180, 50, 0, daniimg);
  walls.push(new Boundary( width/2, height+10, width, 20, 0));
  walls.push(new Boundary( -10, height/2, height, 20, PI/2));
  walls.push(new Boundary( width+10, height/2, height, 20, PI/2));
  walls.push(new Boundary( width/2, -10, width, 20, 0));

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {  
    mouse: canvasmouse
  }
  mConstarint = MouseConstraint.create(engine, options);
  World.add(world, mConstarint)
};

function mouseClicked(){
  balls.push(new Babe(mouseX, mouseY, 16, iam))
}

  
function draw() {
background(96, 7, 205);
for (let i = 0; i < balls.length; i++){
   balls[i].show();
}
for (let i = 0; i < walls.length; i++){
  walls[i].show();
}
nameblock.show();
workblock.show();
playblock.show();
daniblock.show();
//fakeblock.show();
push();
imageMode(CENTER);
image(smallsmiley, mouseX, mouseY, 30, 30);
pop();

};

