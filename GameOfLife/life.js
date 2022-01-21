function NeigboursRow(i,j,center){
	var n = 0
	if(!center) n += lastCellSpace[i][j];
	if(j > 0) n += lastCellSpace[i][j-1];
	if(j<Area.Space.y-1) n += lastCellSpace[i][j+1];
	return n
}

function NeigboursCell(i, j){
	var n = 0;
	if(i > 0){
		n += NeigboursRow(i-1, j, false);
	}
	
	if(i<Area.Space.x-1){
		n += NeigboursRow(i+1, j, false);
	}
	
	n += NeigboursRow(i, j, true);
	
	return n
}

function lifeCell(i,j){
	var n = NeigboursCell(i, j);
	if(lastCellSpace[i][j] == 0 && inSet(n,Rules.x)) Area.CellSpace[i][j] = 1;
	else if(lastCellSpace[i][j] == 1 && !inSet(n,Rules.y)) Area.CellSpace[i][j] = 0;
}

function lifeSpace(){
	lastCellSpace = copyArray2D(Area.CellSpace);
	for (var i = 0; i < lastCellSpace.length; i++) 
		for(var j = 0;j < lastCellSpace[i].length; j++)
			lifeCell(i,j);
		
	draw();
}