//Reverse a String – Enter a string and the program will reverse it and print it out.

function reverse(string) {
	return string.split("").reverse().join("");
};

// Test case.
console.log(reverse("Hello world!"));