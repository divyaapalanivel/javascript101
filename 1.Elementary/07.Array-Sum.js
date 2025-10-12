// Array Sum

// Problem Description:
// Write a function that calculates and returns the sum of all numbers in an array.

// Examples:
// arraySum([1, 2, 3, 4, 5]);          // Returns: 15
// arraySum([10, 20, 30]);             // Returns: 60
// arraySum([-5, 5]);                  // Returns: 0
// arraySum([100]);                    // Returns: 100
// arraySum([2.5, 3.5, 4]);            // Returns: 10

// Requirements:
// - The function should accept an array of numbers
// - Return the sum of all numbers in the array
// - Handle positive, negative, and decimal numbers
// - Handle empty arrays (return 0)

// Hints:
// - Use a loop to add each number to a running total
// - Or use the reduce() array method
// - Initialize your sum variable to 0

function arraySum(numbers) {
    // Your code here
}

// Test Cases
console.log(arraySum([1, 2, 3, 4, 5]));          // Expected: 15
console.log(arraySum([10, 20, 30]));             // Expected: 60
console.log(arraySum([-5, 5]));                  // Expected: 0
console.log(arraySum([100]));                    // Expected: 100
console.log(arraySum([2.5, 3.5, 4]));            // Expected: 10
console.log(arraySum([]));                       // Expected: 0