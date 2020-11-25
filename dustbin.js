class Dustbin{
	constructor(x, y, width, height){
		var options = {
			// isStatic: true,
			friction: 0.8,
			density: 0.8
		}

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.image = loadImage("dustbingreen.png");
		// this.image.scale = 0.01;
		this.body = Bodies.rectangle(x, y, width, height, options);
		
	}
	display(){
		var pos = this.body.position;
		push ()
		translate (pos.x, pos.y);
		imageMode(CENTER);
		image(this.image, 0, 0, width, height);
		// image.scale = 0.01;
		pop ()
	}
}