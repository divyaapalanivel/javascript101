// Factorial Calculator

// Problem Description:
// Write a function that calculates the factorial of a given number.
// The factorial of n (written as n!) is the product of all positive integers
// less than or equal to n.
// For example: 5! = 5 × 4 × 3 × 2 × 1 = 120

// Examples:
// factorial(5);    // Returns: 120
// factorial(0);    // Returns: 1
// factorial(1);    // Returns: 1
// factorial(3);    // Returns: 6
// factorial(7);    // Returns: 5040

// Requirements:
// - The function should accept one number parameter
// - Return the factorial of that number
// - Handle the special case: 0! = 1
// - Assume input is a non-negative integer

// Hints:
// - Use a loop to multiply numbers from 1 to n
// - Or use recursion: n! = n × (n-1)!
// - Remember that 0! = 1 by definition
// - Start with result = 1 and multiply by each number

function factorial(n) {
    // Your code here
}

// Test Cases
console.log(factorial(5));    // Expected: 120
console.log(factorial(0));    // Expected: 1
console.log(factorial(1));    // Expected: 1
console.log(factorial(3));    // Expected: 6
console.log(factorial(7));    // Expected: 5040