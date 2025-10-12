// Remove Duplicates

// Problem Description:
// Write a function that removes duplicate values from an array and returns a new array
// with only unique values.

// Examples:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5]);           // Returns: [1, 2, 3, 4, 5]
// removeDuplicates(["a", "b", "a", "c", "b"]);       // Returns: ["a", "b", "c"]
// removeDuplicates([1, 1, 1, 1]);                    // Returns: [1]
// removeDuplicates([]);                              // Returns: []
// removeDuplicates([5, 3, 5, 2, 3, 1]);              // Returns: [5, 3, 2, 1]

// Requirements:
// - The function should accept an array as parameter
// - Return a new array with duplicates removed
// - Maintain the order of first occurrence
// - Handle arrays with numbers, strings, or mixed types

// Hints:
// - You can use a Set to automatically remove duplicates
// - Or use filter() with indexOf()
// - Consider using the spread operator [...new Set(array)]

function removeDuplicates(arr) {
    // Your code here
}

// Test Cases
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));           // Expected: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"]));       // Expected: ["a", "b", "c"]
console.log(removeDuplicates([1, 1, 1, 1]));                    // Expected: [1]
console.log(removeDuplicates([]));                              // Expected: []
console.log(removeDuplicates([5, 3, 5, 2, 3, 1]));              // Expected: [5, 3, 2, 1]