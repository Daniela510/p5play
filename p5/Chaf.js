function Chaf(x, y, w, h, cham) {
    let options = {
        friction: 0,
        restitution: 0,
        chamfer: { radius : cham }
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    console.log(this.body);
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        strokeWeight(1);
        stroke(167, 101, 247);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, w, h);
       // image(photo, -r, -r, p5r, p5r);
        pop();
    };
}
