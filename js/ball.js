class Ball {
    constructor(x, y, r){
        var options = {
         isStatic: false,
         restitution: 0.6,

        }

        this.r = r;
        
        this.body = Bodies.circle(x, y, this.r, options)
        this.color = color(random(0, 255),random(0, 255),random(0, 255))
        World.add(world, this.body)
    }

    show(){
        var ballpos = this.body.position
        var angle = this.body.angle

        push()
         translate(ballpos.x, ballpos.y)
         rotate(angle)
         ellipseMode(RADIUS)
         fill(this.color)
         stroke(this.color)
         ellipse(0,0, this.r, this.r)
        pop()
    }
}