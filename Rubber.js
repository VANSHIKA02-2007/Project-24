class Rubber{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options ={
		'resistution':0.3,
		'friction':5,
		'density':1
	}
		this.body=Bodies.rectangle(x, y, width, height, options)
		this.x=x;
		this.y=y;
		this.width = width;
		this.height = height;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push();
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("white");
			fill("darkblue");
			rect(0, 0, this.width, this.height);
			pop();
	}

}