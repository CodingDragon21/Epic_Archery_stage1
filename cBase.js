class ComputerBase{
    constructor(x,y,width,height){
        var options = {
         isStatic: true
        }
        this.image = loadImage("assets/base2.png")
        this.body = Bodies.rectangle(x,y,width, height, options)
        this.width = width
        this.height = height
        this.x = x 
        this.y = y 

        World.add(world, this.body)
}
show(){
    var pos  = this.body.position
    push()
    imageMode(CENTER)
    translate(pos.x , pos.y)
    rotate(this.body.angle)
    image(this.image,0,0,this.width, this.height)
   
   
    pop()
}
    }