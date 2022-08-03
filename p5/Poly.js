function polygon(x, y, rad, npoints) {
    let angleP = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angleP) {
      let sx = x + cos(a) * rad;
      let sy = y + sin(a) * rad;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

function Poly(x, y, sides, r, cham, photo) {
    let options = {
        friction: 0,
        restitution: 0,
        chamfer:{ radius: cham }
    };
    this.body = Bodies.polygon(x, y, sides, r, options);
    this.r = r;
    World.add(world, this.body);
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        strokeWeight(1);
        stroke(167, 101, 247);
        translate(pos.x, pos.y);
        rotate(angle + 1.9*PI);
        //polygon(0, 0, r, sides);
        imageMode(CENTER);
        image(photo, -r/18, -r/18, r*1.75, r*1.75);
        pop();
    };
}
// + 0.2*PI
