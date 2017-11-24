var PArc = function(id, name){
	this.Id = id;
	this.Name = name;

	this.draw = function(angle){
		push();
		translate(this.X, this.Y);
		rotate(angle);

		stroke(2);
		if (this.Id % 2 == 0)
			fill(255, 255, 255);	
		else 
			fill(0, 0, 0);
			
		arc(0, 0, this.Size, this.Size, -0.5 * this.Angle, 0.5 * this.Angle, PIE);
		fill(255,255,255);
		arc(0, 0, this.Size - 10, this.Size - 10, -0.5 * this.Angle, 0.5 * this.Angle, PIE);

		fill(0,0,120);
		textSize(15);
		text(this.Name, this.Size * 0.2, 0);
		pop();
	}
}