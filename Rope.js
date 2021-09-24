class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.1,
            length: 250
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.pointB=pointB
    }
    fly(){
        this.rope.bodyA=null
    }
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push()
        strokeWeight(4);
        stroke("brown")
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop()
    }
} 
}