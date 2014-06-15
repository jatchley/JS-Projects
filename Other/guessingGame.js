// Write a program where the user chooses a number between 1 and 1000.  Then the program guesses that number in 10 attempts or less.


// Uncomment whichever method you want to use. This is the number the computer will attempt to guess.
// var input = prompt("Pick a number between 1 and 1000:");
var input = 499;

// The range of numbers the computer will guess between.
var high = 1000;
var low = 0;

// First guess.
var guess = Math.round(((high + low) / 2));

// Attempts remaining.
var tries = 0;

// The computer guesses here.
 while (tries < 10 && guess != input) {
	if (guess > input) {
		high = guess;
		console.log("The computer guesses: " + guess);
		tries ++;
	} else if (guess < input) {
		low = guess;
		console.log("The computer guesses: " + guess);
		tries ++;
	} 
	guess = Math.round(((high + low) / 2));
};

// Logs the result of the game to the console.
if (guess === input) {
console.log("The computer guessed " + guess + " and it was correct! It took the computer " + tries + " tries to guess your number.");
} else { 
	console.log("The computer was unable to guess your number. The last guess was " + guess);
}