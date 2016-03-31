/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

x+y = z
√x = a 
√y = b
Find pytagorean triplest before 1000
*/

var cuadrados = [];
var triplet = [];
var thousand = [];
for(i=1; i<1000; i++){
	var square = Math.pow(i,2);
	cuadrados.push(square);	
}


for(i=0; i<cuadrados.length; i++){
	var current = cuadrados[i];
	for(e=1; e<cuadrados.length; e++){
		var sum = cuadrados[e];
		if(i<e){
			for(h=1; h<cuadrados.length; h++){
				var compare = cuadrados[h];
				if(current + sum == compare){
					var primero = Math.sqrt(current),
						segundo = Math.sqrt(sum),
						tercero =Math.sqrt(compare);
					triplet.push([primero, segundo, tercero]);
					if(primero+segundo+tercero == 1000){
						thousand.push(primero,segundo,tercero);
					}
				}

			}
		}
		
	}
}


result = thousand[0]* thousand[1] * thousand[2];
console.log(result);

