function start(){
	createVision();
	logGame("Created window");
	logOnUpdate();
	onTime();
	logStart();
	return true;
}

function update(){
	if(document.getElementById("Life").checked == true){
		Rules.x = stringToSet(document.getElementById("L").value)
		Rules.y = stringToSet(document.getElementById("D").value)
		lifeSpace()
		logGame(Area.Generation+" gen")
		document.getElementById("Generation").innerHTML = Area.Generation+'';
		Area.Generation++;
	}
}

var Time = {
	rate:500
};
function onTime(){
	Time.interval = setInterval(function(){update()},Time.rate);
}

function offTime(){
	if(Time.interval!=null)clearInterval(Time.interval);
}
