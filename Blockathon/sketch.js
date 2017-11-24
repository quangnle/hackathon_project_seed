var _projects = ["Insurance", "Agriculture", "Supply Chain", "Energy", "Authentication", "Property Rights", "Entertainment", "Loyalty", "Ride Sharing", "Trade Finance"];
var _cycle = new Cycle(550, 250, 400);
var _curAngle = 0;
var _stopAngle = 0;

var _isInsuranceChosen = false;
var _selectedProject = -1;
var _prList = [];

function setup(){
	var canvas = createCanvas(800, 600);
	canvas.parent('sketch-holder');
	for (var i = 0; i < _projects.length; i++){
		var arc = new PArc(i, _projects[i]);
		_cycle.Arcs.push(arc);
	}

	_cycle.init();
}

function draw(){
	angleMode(DEGREES);
	clear();
	_cycle.draw(_curAngle);
	textSize(28);
	fill(0, 120, 120);
	text("Selected projects:", 10, 50);
	
	fill(0, 0, 120);
	textSize(20);
	text("Spin me a lucky project!!!", 450, 30);
	
	textSize(24);
	for	(var i = 0; i < _prList.length; i++){
		fill(0, 0, 120);
		text((i + 1) + ". " +  _projects[_prList[i]], 10, 90 + i * 40);
	}
	
	if( _curAngle >= _stopAngle) {
		_curAngle = _curAngle - 1;
	} else {
		addProject(_selectedProject);
	}
}

function mousePressed(){
	if (!_isInsuranceChosen){
		_isInsuranceChosen = true;
		_stopAngle = -360;
		_selectedProject = 0;
	} else {
		var stepAngle = Math.floor(180 / _projects.length);
		var rndIdx = Math.floor(random(_projects.length));
		_selectedProject = (_selectedProject + rndIdx) % _projects.length;
		_stopAngle = _stopAngle - (360 + rndIdx * stepAngle);
	}
}

function addProject(idx){
	if (idx < 0) return;
	
	var found = false;
	for (var i = 0; i < _prList.length; i++){
		if (_prList[i] == idx) return;
	}
	
	_prList.push(idx);
}