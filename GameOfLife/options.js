function changeArea(){
	offTime()
	Area.Space = Vector2D(Number(document.getElementById("x").value), Number(document.getElementById("y").value));
	Area.CellSpace = Array2D(Area.Space,0);
	logGame("Change Area");
	createVision();
	onTime();
}

function changeCamera(){
	offTime();
	Camera.Position = Vector2D(5,5);
	Camera.Range = Number(document.getElementById("Fov").value);
	Camera.Size = 600/Number(document.getElementById("Fov").value);
	Camera.StepMovement = Number(document.getElementById("Step").value);
	logGame("Change Camera");
	createVision();
	onTime();
}