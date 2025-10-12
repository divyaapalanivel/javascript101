// Binary Search

// Problem Description:
// Write a function that implements the binary search algorithm on a sorted array.
// Binary search finds the position of a target value by repeatedly dividing the
// search interval in half. Return the index if found, or -1 if not found.

// Examples:
// binarySearch([1, 3, 5, 7, 9, 11], 7);      // Returns: 3
// binarySearch([1, 3, 5, 7, 9, 11], 1);      // Returns: 0
// binarySearch([1, 3, 5, 7, 9, 11], 11);     // Returns: 5
// binarySearch([1, 3, 5, 7, 9, 11], 4);      // Returns: -1
// binarySearch([2, 4, 6, 8, 10], 8);         // Returns: 3

// Requirements:
// - The function should accept a sorted array and a target value
// - Return the index of the target if found, -1 otherwise
// - The array is already sorted in ascending order
// - Use the binary search algorithm (divide and conquer approach)

// Hints:
// - Start with left = 0 and right = array.length - 1
// - Calculate middle index: Math.floor((left + right) / 2)
// - Compare middle element with target
// - If target < middle, search left half (right = middle - 1)
// - If target > middle, search right half (left = middle + 1)
// - Continue until found or left > right

function binarySearch(arr, target) {
    // Your code here
}

// Test Cases
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));      // Expected: 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 1));      // Expected: 0
console.log(binarySearch([1, 3, 5, 7, 9, 11], 11));     // Expected: 5
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4));      // Expected: -1
console.log(binarySearch([2, 4, 6, 8, 10], 8));         // Expected: 3
console.log(binarySearch([1, 2, 3, 4, 5], 6));          // Expected: -1