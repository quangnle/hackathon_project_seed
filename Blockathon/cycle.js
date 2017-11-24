var Cycle = function(x, y, size){
	this.Arcs = [];
	this.X = x,
	this.Y = y;
	this.Size = size;

	this.init = function(){
		var nArcs = this.Arcs.length;
		var stepAngle = 360 / nArcs;
		for (var i = 0; i < this.Arcs.length; i++){
			this.Arcs[i].Size = size;
			this.Arcs[i].Angle = stepAngle;
		}
	}

	this.draw = function(angle) {
		var nArcs = this.Arcs.length;
		var stepAngle = 360 / nArcs;

		push();
		translate(this.X, this.Y);
		rotate(angle);
		for (var i = 0; i < this.Arcs.length; i++){
			this.Arcs[i].draw(angle + stepAngle * i);
		}
		pop();
		push();
		translate(this.X + this.Size / 2, this.Y);
		fill(120,120,120);		
		arc(0, 0, 50, 50, -15, 15, PIE);
		pop();
	}
}