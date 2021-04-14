class Iron{
    constructor(x,y){
      var options={
          'density' : 30.0,
          'friction': 3.0,
          'restitution' : 0.8
      };
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world,this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = this.x;
      //pos.y = this.y;
     
       
      // it saves the current drawing style and transformations
      push();
     // to specify the change in X and Y positions
      translate(pos.x,pos.y);
     // to control the brodness of stroke or boundry
      strokeWeight(3);
     // colour of boundry
      stroke('black');
     // main colour of object
      fill('grey');
     // modifies the location by corners, center and more
      rectMode(CENTER);
     // make rectangle (x,y,width,height)
      rect(0,0,this.width,this.height);
     // it restores the current drawing style and transformations
      pop();
    };
  };