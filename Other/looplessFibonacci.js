// Calculate the 35th Fibonacci number (9,227,465) without using an array or a loop.

var firstNum = 0;
var secondNum = 1;
var answer = firstNum + secondNum;

// The attempt
function sequence(target) {
	if (target < 1) {
		console.log(null);
	} else {
		console.log(answer);
		secondNum = firstNum;
		firstNum = answer;
		answer = firstNum + secondNum;
		target--;
		sequence(target);
	} 

}

sequence(35);
