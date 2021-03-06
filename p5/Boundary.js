
function Boundary(x, y, w, h, a) {
    let options = {
        isStatic: true,
        angle: a,
        friction: 0.1,
        restitution: 0
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
     World.add(world, this.body);
    this.show = function(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      noStroke();
      fill(167, 101, 247);
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);
      pop();
    }
  }