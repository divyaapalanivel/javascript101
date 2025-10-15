// Even or Odd

// Problem Description:
// Write a function that checks if a given number is even or odd.
// Return "Even" if the number is even, and "Odd" if the number is odd.

// Examples:
// evenOrOdd(4);     // Returns: "Even"
// evenOrOdd(7);     // Returns: "Odd"
// evenOrOdd(0);     // Returns: "Even"
// evenOrOdd(-2);    // Returns: "Even"
// evenOrOdd(-5);    // Returns: "Odd"

// Requirements:
// - The function should accept one number parameter
// - Return the string "Even" or "Odd"
// - Handle positive, negative, and zero values

// Hints:
// - Use the modulo operator (%) to check divisibility by 2
// - A number is even if number % 2 === 0

function evenOrOdd(number) {
     if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Test Cases
console.log(evenOrOdd(4));     // Expected: "Even"
console.log(evenOrOdd(7));     // Expected: "Odd"
console.log(evenOrOdd(0));     // Expected: "Even"
console.log(evenOrOdd(-2));    // Expected: "Even"
console.log(evenOrOdd(-5));    // Expected: "Odd"