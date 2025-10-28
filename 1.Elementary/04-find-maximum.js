// Find Maximum

// Problem Description:
// Write a function that finds and returns the largest number in an array of numbers.

// Examples:
// findMaximum([1, 5, 3, 9, 2]);        // Returns: 9
// findMaximum([10, 20, 5, 30]);        // Returns: 30
// findMaximum([-5, -1, -10, -3]);      // Returns: -1
// findMaximum([42]);                   // Returns: 42
// findMaximum([100, 99, 101, 98]);     // Returns: 101

// Requirements:
// - The function should accept an array of numbers
// - Return the largest number in the array
// - Handle positive, negative numbers and single element arrays

// Hints:
// - You can use Math.max() with the spread operator
// - Or loop through the array keeping track of the maximum value
// - Consider using array methods like reduce()

function findMaximum(numbers) {
    return Math.max(...numbers);
}

// Test Cases
console.log(findMaximum([1, 5, 3, 9, 2]));        // Expected: 9
console.log(findMaximum([10, 20, 5, 30]));        // Expected: 30
console.log(findMaximum([-5, -1, -10, -3]));      // Expected: -1
console.log(findMaximum([42]));                   // Expected: 42
console.log(findMaximum([100, 99, 101, 98]));     // Expected: 101
