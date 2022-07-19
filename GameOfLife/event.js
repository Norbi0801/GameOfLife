window.addEventListener("keydown", function(e) {
	let x = 0;
	let y = 0;
	let k = false;
    //tested in IE/Chrome/Firefox
	if(e.keyCode == 38){ //Up
		x = -1*Area.StepMovement;
		k = true;
	}
	if(e.keyCode == 39){ //Right
		y = Area.StepMovement;
		k = true;
	}
	if(e.keyCode == 40){ //Down
		x = Area.StepMovement;
		k = true;
	}
	if(e.keyCode == 37){ //left
		y = -1*Area.StepMovement;
		k = true;
	}
	if(Camera.Position.x+x>0 && Camera.Position.y+y>0 &&Camera.Position.x+x+Camera.Range.x<=Area.Space.x && Camera.Position.y+y+Camera.Range.y<=Area.Space.y && k ){
		Camera.Position.x += x;
		Camera.Position.y += y;
		draw();
	}
});