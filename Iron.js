class Iron {
    constructor(x, y,width,height) {
      var options = {
        'restitution':0.8,
        'friction': 3,
        'density':30
      };
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.x = x;
      this.y = y;
      this.width=width;
      this.height=height;
      World.add(world, this.body);
    };
    display(){
      var ironpos = this.body.position;
 
      push();
      translate(ironpos.x, ironpos.y);
      strokeWeight(2);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };