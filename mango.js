class fruit{
    constructor(x,y,r){
        var fruitOptions = {
            isStatic: true,
            restitution:0,
            friction: 1
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("Plucking mangoes/mango.png")
        this.body = Bodies.circle(this.x, this.y, this.r/2, fruitOptions)
        World.add(world,this.body)
        

    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y + 10)
        fill("white")
        imageMode(CENTER)
        ellipseMode(RADIUS)
        image(this.image, 0, 0, this.r * 2, this.r*2)
        pop()
    }
}