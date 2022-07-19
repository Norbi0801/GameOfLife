function setOposite(i,j){
	let id = 'i'+i+'j'+j;
	if(document.getElementById(id).className == "offC"){
		Area.CellSpace[Camera.Position.x+i][Camera.Position.y+j] = 1;
		document.getElementById(id).className = "onC";
	}
	else{
		Area.CellSpace[Camera.Position.x+i][Camera.Position.y+j] = 0;
		document.getElementById(id).className = "offC";
	}
}

function draw(){
	for(i=0;i<Camera.Range.x;i++){
		for(j=0;j<Camera.Range.y;j++){
			let id = 'i'+i+'j'+j;
			if(Area.CellSpace[Camera.Position.x+i][Camera.Position.y+j] == 0) document.getElementById(id).className = "offC";
			else document.getElementById(id).className = "onC";
		}
	}
	logGame("Draw")
} 

function createVision(){
	let AreaScript = "GameOfLife </br>";
	for(i=0;i<Camera.Range.x;i++){
		for(j=0;j<Camera.Range.y;j++)
			AreaScript += '<div id="i'+i+'j'+j+'" style="width:'+Camera.Size+'px;height:'+Camera.Size+'px" class="offC" onclick="setOposite('+i+','+j+');"></div>';
		AreaScript += '<div style="clear:both;"></div>'
	}
	document.getElementById("GameOfLife").innerHTML = AreaScript;
}