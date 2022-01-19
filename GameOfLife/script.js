let Space = [200,200];
let ActivePoint = [0,0];
let View = 200;
let Size = 600/View;
let Step = 1;
let Generation = 0;
var CellSpace;
var lastCellSpace
var L = []
var D = []
setInterval(update, 100)

function start(){
	let cl = ""
	let Game = "GameOfLife </br>";
	
	CellSpace = new Array(Space[0]);

	for (i = 0; i < CellSpace.length; i++) {
		CellSpace[i] = new Array(Space[1]);
		for(j = 0;j < CellSpace[i].length; j++){
			CellSpace[i][j] = 0;
		}
	}
	console.log("GameOfLife: Initialize Life Space")
	
	for(i=0;i<View;i++){
		for(j=0;j<View;j++){
			if(CellSpace[ActivePoint[0]+i][ActivePoint[1]+j] == 0) cl = "offC";
			else cl = "onC"
			Game += '<div id="i'+i+'j'+j+'" style="width:'+Size+'px;height:'+Size+'px" class="'+cl+'" onclick="set('+i+','+j+');"></div>';
		}
		Game += '<div style="clear:both;"></div>';
	}
	document.getElementById("GameOfLife").innerHTML = Game;
	console.log("GameOfLife: Created")
}
function stringToSet(s){
	x = []
	for(i=0;i<s.length;i++){
		x.push(Number(s[i]))
	}
	return x
}

function update(){
	if(document.getElementById("Life").checked == true){
		L = stringToSet(document.getElementById("L").value)
		D = stringToSet(document.getElementById("D").value)
		lifeSpace()
		console.log("GameOfLife: "+Generation+" gen")
		Generation++;
	}
}

function changeArea(){
	Space = [Number(document.getElementById("x").value), Number(document.getElementById("y").value)];
	start();
}

function changeCamera(){
	View = Number(document.getElementById("Fov").value);
	Size = 600/View;
	Step = Number(document.getElementById("Step").value);
	start();
}

function inSet(n,sett){
	for(i=0;i<sett.length;i++){
		if(n==sett[i]) return true
	}
	return false
}

function set(i,j){
	let id = 'i'+i+'j'+j;
	if(document.getElementById(id).className == "offC"){
		CellSpace[ActivePoint[0]+i][ActivePoint[1]+j] = 1
		document.getElementById(id).className = "onC";
	}
	else{
		CellSpace[ActivePoint[0]+i][ActivePoint[1]+j] = 0
		document.getElementById(id).className = "offC";
	}
}

function lifeCell(i,j){
	let lifeNei = 0
	if(i > 0){
		lifeNei += lastCellSpace[i-1][j]
		if(j > 0){
			lifeNei += lastCellSpace[i-1][j-1]
		}
		if(j<Space[1]-1){
			lifeNei += lastCellSpace[i-1][j+1]
		}
	}
	
	if(i<Space[0]-1){
		lifeNei += lastCellSpace[i+1][j]
		if(j > 0){
			lifeNei += lastCellSpace[i+1][j-1]
		}
		if(j<Space[1]-1){
			lifeNei += lastCellSpace[i+1][j+1]
		}
	}
	
	if(j > 0){
		lifeNei += lastCellSpace[i][j-1]
	}
	if(j<Space[1]-1){
		lifeNei += lastCellSpace[i][j+1]
	}
	if(lastCellSpace[i][j] == 0 && inSet(lifeNei,L) == true){
		CellSpace[i][j] = 1;
	}else if(lastCellSpace[i][j] == 1 && inSet(lifeNei,D) == false){
		CellSpace[i][j] = 0;
	}
}

function lifeSpace(){
	lastCellSpace = new Array(Space[0]);

	for (var i = 0; i < CellSpace.length; i++) {
		lastCellSpace[i] = new Array(Space[1]);
		for(var j = 0;j < CellSpace[i].length; j++){
			lastCellSpace[i][j] = CellSpace[i][j];
		}
	}
	for (var i = 0; i < lastCellSpace.length; i++) {
		for(var j = 0;j < lastCellSpace[i].length; j++){
			lifeCell(i,j)
		}
	}
	draw()
}

function draw(){
	for(i=0;i<View;i++){
		for(j=0;j<View;j++){
			let id = 'i'+i+'j'+j;
			if(CellSpace[ActivePoint[0]+i][ActivePoint[1]+j] == 0) document.getElementById(id).className = "offC";
			else document.getElementById(id).className = "onC";
		}
	}
	console.log("GameOfLife: Draw")
} 

window.addEventListener("keydown", function(e) {
	let x = 0;
	let y = 0;
	let k = false
    //tested in IE/Chrome/Firefox
	if(e.keyCode == 38){ //Up
		x = -1*Step;
		k = true
	}
	if(e.keyCode == 39){ //Right
		y = Step;
		k = true
	}
	if(e.keyCode == 40){ //Down
		x = Step;
		k = true
	}
	if(e.keyCode == 37){ //left
		y = -1*Step;
		k = true
	}
	if(ActivePoint[0]+x+View<=Space[0] && ActivePoint[1]+y+View<=Space[1] && k){
		ActivePoint[0] += x;
		ActivePoint[1] += y;
		draw();
	}
  })