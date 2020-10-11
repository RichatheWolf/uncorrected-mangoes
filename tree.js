class tree{
    constructor(x,y){
        this.x = x
        this.y = y
        this.image = loadImage("Plucking mangoes/tree.png")
        this.bottombody = Bodies.rectangle(this.x, this.y, 450, 10,{isStatic: true})
        this.leftbody = Bodies.rectangle(0, this.y - 300, 10, 600,{isStatic: false})
        this.rightbody = Bodies.rectangle(this.x + 225, this.y - 300, 10, 600,{isStatic: false})
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)

    }
    display(){
        var pos = this.bottombody.position
        push()
        translate(pos.x, pos.y + 10)
        fill("white")
        imageMode(CENTER)
        image(this.image, 0, -300, 450, 600)
        pop()
    }
}