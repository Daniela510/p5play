function Babe(x, y, r, photo, fric) {
    let options;
    if (fric){
        options = {
            friction: 0.1,
            restitution: 0,
            isStatic:true
        };
    } else{
        options = {
            friction: 0.1,
            frictionStatic: 0.1,
            restitution: 0
        };
    }
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    let p5r = this.r * 2 - 2;
    World.add(world, this.body);
    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        strokeWeight(1);
        stroke(167, 101, 247);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(0, 0, p5r);
        image(photo, -r, -r, p5r, p5r);
        pop();
    };
}
