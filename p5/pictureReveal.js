const width = document.getElementById('container').offsetWidth;
const height = document.getElementById('container').offsetHeight;

function setup() {
    let cnv = createCanvas(width, height);
   cnv.parent('container');
    background(233);
     img = loadImage('https://assets.codepen.io/t-1/juli-kosolapova-pZ-XFIrJMtE-unsplash.jpg');
  }
  
  function draw() {
    blendMode(BLEND);
    background(233);
    fill(0)
    ellipse(mouseX, mouseY, 150, 150);
    noFill()
    ellipse(mouseX, mouseY, 170, 170);
    blendMode(LIGHTEST);
    image(img, 0, 0);
  }
  