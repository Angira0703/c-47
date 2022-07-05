class Pin {
    constructor(x, y){
        var options = {
         isStatic: true,
         restitution: 1
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options)
        World.add(world, this.body)
    }

    display(){
        var pinpos = this.body.position
        var angle = this.body.angle

        push()
         translate(pinpos.x, pinpos.y)
         rotate(angle)
         imageMode(CENTER)
         fill("black")
         ellipse(0,0, this.r, this.r)
        pop()
    }
}