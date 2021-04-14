class Hammer{
  constructor(x,y){
    var options={
        'density' : 4.0,
        'friction': 1.0,
        'restitution' : 0.5
    };
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 150;
    this.height = 40;
    World.add(world,this.body);
  };
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
     
    // it saves the current drawing style and transformations
    push();
   // to specify the change in X and Y positions
    translate(pos.x,pos.y);
   // to control the brodness of stroke or boundry
    strokeWeight(3);
   // colour of boundry
    stroke('white');
   // main colour of object
    fill('orange');
   // modifies the location by corners, center and more
    rectMode(CENTER);
   // make rectangle (x,y,width,height)
    rect(0,0,this.width,this.height);
   // it restores the current drawing style and transformations
    pop();
  };
};