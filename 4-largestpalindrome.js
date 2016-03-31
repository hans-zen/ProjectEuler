/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers (100 : 999).

*/
var palindromelist = [];
var nonpalindrome = [];

function palindrome(x){
	var y = x.toString(),
		reversed = y.split("").reverse().join(""),
		num = Number(reversed);
	if(x == num)
		palindromelist.push(num);
	else
		nonpalindrome.push(num);
}


		   
for(i=900; i<1000; i++){
	for(a=900; a <1000; a++){
		palindrome(a*i);
	}
}

function highest ( d ){
    var  high = Math.max.apply( Math, d );
	console.log(high);
};


console.log(palindromelist);

highest(palindromelist);