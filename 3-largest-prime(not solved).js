/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?*/

/*A Prime Number can be divided evenly only by 1 or itself.
And it must be a whole number greater than 1.*/

/*
Entrada: Un número natural n

Salida: El conjunto de números primos anteriores a n (incluyendo n)

    Escriba todos los números naturales desde 2 hasta n
    Para i desde 2 hasta \lfloor \sqrt n\rfloor haga lo siguiente:
        Si i no ha sido marcado entonces:
            Para j desde i hasta n\div i haga lo siguiente:
                Ponga una marca en i\times j
    El resultado es: Todos los números sin marca

*/
function primesbefore(x){
	
	
	var allbeforex = [],
		primes = [];
	
	for(a=2; a<=x; a++){
		allbeforex[a]= true;
		
	}
	
	
	for(b=2; b<=Math.sqrt(x); b++){
		if(allbeforex[b] == true)
			var powof = Math.pow(b,2);
				
			for(c = powof; c<=x; powof+(c++*b) ){
				console.log(c);
				allbeforex[c] = false;
			}
	}
	/*console.log(allbeforex);*/
	
}


primesbefore(5);





/*
var primes = [];

for(i=3; i < 100; i++) {
	var result = isprime(i);
	console.log(result);
	if ( result == true ){
		primes.push(i);
	}	
};

console.log(primes);
*/





