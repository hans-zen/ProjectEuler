/*
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var squarearray = [],
	wholearray = [],
	wholesum = 0,
	sqsum = 0;

for(i=0;i<=100; i++){
	var cuadrado = Math.pow(i,2);
	wholearray.push(i);
	squarearray.push(cuadrado);
}

for(b=0; b < squarearray.length; b++){
	sqsum += squarearray[b];
	wholesum += wholearray[b];
}

var squarewholesum = Math.pow(wholesum,2);

console.log(squarewholesum - sqsum);
