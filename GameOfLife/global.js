function Vector2D(X,Y){
	return{
		x:X,
		y:Y
	};
}
function Vector3D(X,Y,Z){
	return{
		x:X,
		y:Y,
		z:Z
	};
}
function Array2D(Dimensions,BasicValue){
	var a = new Array();	
	for(let i=0;i<Dimensions.x;i++){
		a.push([]);
		for(let j=0;j<Dimensions.y;j++)
			a[i].push(BasicValue);
	}
	return a;
}

function copyArray2D(Array){
	var a = [];	
	for(let i=0;i<Array.length;i++){
		a.push([]);
		for(let j=0;j<Array[i].length;j++)
			a[i].push(Array[i][j]);
	}
	return a;
}

function Field(){
	return{
		Vector2D: Point(0,0),
		Estate: 0
	}
}

function rand( min, max ){
    min = parseInt( min, 10 );
    max = parseInt( max, 10 );
    if ( min > max ){
        var tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

function Suma(Arr){
	var suma = 0;
	for(w=0;w<Arr.length;w++)
		suma += Arr[w];
	return suma;
}

function iK(T,i){
	var U = new Array(T.length);
	var temp;
	var r = "";
	for(q = 0;q<T.length;q++){
		U[q] = T[q];
	}
	for(q=0;q<i;q++){
		temp = U[U.length-1];
		U[U.length-1] = Suma(U)%10;
		for(p=0;p<U.length-2;p++){
			U[p] = U[p+1];
		}
		U[U.length-2] = temp;
		r = r + U[U.length-1];
	}
	return r;
}

function M(rot,znakow,pow){
	var an = new Array(rot);
	for(i=0;i<rot;i++){
		an[i] = rand(1,9); 
	}
	for(t=1;t<=pow;t++){
		console.log(iK(an,znakow));
		for(i=0;i<rot;i++){
			an[i] = rand(1,9); 
		}
	}
}

function stringToSet(s){
	x = []
	for(i=0;i<s.length;i++){
		x.push(Number(s[i]))
	}
	return x
}

function inSet(n,sett){
	for(i=0;i<sett.length;i++)
		if(n==sett[i]) 
			return true
	return false
}