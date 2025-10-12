// Flatten Nested Array

// Problem Description:
// Write a function that converts a nested array (array of arrays) into a single
// flat array containing all the elements.

// Examples:
// flattenArray([1, [2, 3], 4]);                  // Returns: [1, 2, 3, 4]
// flattenArray([1, [2, [3, 4]], 5]);             // Returns: [1, 2, 3, 4, 5]
// flattenArray([[1, 2], [3, 4], [5]]);           // Returns: [1, 2, 3, 4, 5]
// flattenArray([1, 2, 3]);                       // Returns: [1, 2, 3]
// flattenArray([]);                              // Returns: []

// Requirements:
// - The function should accept a nested array as parameter
// - Return a single flat array with all elements
// - Should work with any level of nesting
// - Maintain the order of elements

// Hints:
// - You can use the flat() method with Infinity depth
// - Or use recursion to check each element
// - Consider using reduce() with concat()
// - Check if an element is an array using Array.isArray()

function flattenArray(arr) {
    // Your code here
}

// Test Cases
console.log(flattenArray([1, [2, 3], 4]));                  // Expected: [1, 2, 3, 4]
console.log(flattenArray([1, [2, [3, 4]], 5]));             // Expected: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2], [3, 4], [5]]));           // Expected: [1, 2, 3, 4, 5]
console.log(flattenArray([1, 2, 3]));                       // Expected: [1, 2, 3]
console.log(flattenArray([]));                              // Expected: []