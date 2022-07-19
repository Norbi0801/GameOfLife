//Start Varables
w = 1000;//document.getElementById("GameOfLife").width
h = 500;//document.getElementById("GameOfLife").height

let Area = {
	Space: Vector2D(h/5,w/5),
	CellSpace: Array2D(Vector2D(h/5,w/5),0),
	Generation:0
};
let Camera = {
	Position:Vector2D(0,0),
	Range:Vector2D(h/5,w/5),
	Size:5,
	StepMovement:1
};

Rules = Vector2D([],[])



