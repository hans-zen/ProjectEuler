/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

*/


var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
   var upperLimit = Math.sqrt(n),
	   array = [], 
		output = [];
    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
	 return (output);
};


var million = eratosthenes(2000000);

var result = 0;


for(i=0; i< million.length; i++){
	result += million[i];
}
console.log(result);