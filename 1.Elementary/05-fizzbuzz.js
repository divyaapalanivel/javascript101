// FizzBuzz

// Problem Description:
// Write a function that prints numbers from 1 to n.
// But for multiples of 3, print "Fizz" instead of the number,
// and for multiples of 5, print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// Examples:
// fizzBuzz(15);
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

// Requirements:
// - The function should accept one number parameter (n)
// - Print numbers from 1 to n
// - Replace multiples of 3 with "Fizz"
// - Replace multiples of 5 with "Buzz"
// - Replace multiples of both 3 and 5 with "FizzBuzz"
// - Each output should be on a new line

// Hints:
// - Use a loop from 1 to n
// - Check divisibility by 15 first (for FizzBuzz)
// - Then check divisibility by 3 and 5
// - Use the modulo operator (%) to check divisibility
// - Use console.log() to print each value

function fizzBuzz(n) {
    // Your code here
}

// Test Cases
fizzBuzz(15);   // Should print 1 through 15 with Fizz/Buzz/FizzBuzz replacements
console.log("---");
fizzBuzz(5);    // Should print: 1, 2, Fizz, 4, Buzz