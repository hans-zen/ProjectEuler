valores = [];


function collatz(x){
	var count = x;
	var chain = [];
	while (count != 1){
		if(count%2 == 0){
			count /= 2;
			chain.push(count);
		}
		else{
			count = (3*count)+ 1;
			chain.push(count);
		}
	}
	
	valores.push(chain.length);
	
}


function collatztill(y){
	for(i=800000; i<=y; i++){
		collatz(i);
	}
}

collatztill(900000);



Array.max = function( array ){
    return Math.max.apply( Math, array );
};

var highest = Array.max(valores);
console.log(highest);
console.log(valores.indexOf(highest));