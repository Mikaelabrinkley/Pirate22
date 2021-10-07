class Cannons{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height - height;
        this.angle = angle;
        this.cannonBase = loadImage("assets/cannonBase.png")
        this.cannonTop = loadImage("assets/canon.png")
    }
    display(){
        //cannon top
        push();
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER);
        image (this.cannonTop, 0, 0, this.width, this.height);
        pop();
    
        //cannon bottom
        image (this.cannonBase,70,20,200,200)
        noFill();
        stroke("black")
    }
}