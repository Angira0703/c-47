class Slots {
    constructor(x, y, w, h){
     var options={
        isStatic: true,
    
     }

     this.body = Bodies.rectangle(x, y, w, h, options)
     this.w = w
     this.h = h
     World.add(world, this.body)
    }

    display(){
        var slotpos = this.body.position
        rectMode(CENTER);
        fill("black")
        rect(slotpos.x, slotpos.y, this.w, this.h)
    }

}