// Calculate the 35th Fibonacci number (9,227,465) without using an array or a loop.

var count = 0;
var firstNum = 0;
var secondNum = 1;
var answer = firstNum + secondNum;

// The attempt
function sequence(target) {
	if (target <= 1) {
		console.log(1);
	} else if (count < target) {
		console.log(answer);
		secondNum = firstNum;
		firstNum = answer;
		answer = firstNum + secondNum;
		count ++;
	} 

}

sequence(35);

// While loop that works properly
while (count < 35) {
	console.log(answer);
		secondNum = firstNum;
		firstNum = answer;
		answer = firstNum + secondNum;
		count ++;
}