// Anagram Checker

// Problem Description:
// Write a function that checks if two strings are anagrams of each other.
// An anagram is a word or phrase formed by rearranging the letters of another.
// Ignore spaces, punctuation, and case.

// Examples:
// isAnagram("listen", "silent");           // Returns: true
// isAnagram("hello", "world");             // Returns: false
// isAnagram("The Eyes", "They See");       // Returns: true
// isAnagram("Dormitory", "Dirty room");    // Returns: true
// isAnagram("abc", "def");                 // Returns: false

// Requirements:
// - The function should accept two string parameters
// - Return true if they are anagrams, false otherwise
// - Ignore spaces, punctuation, and case
// - Only consider alphanumeric characters

// Hints:
// - Convert both strings to lowercase
// - Remove all non-alphanumeric characters
// - Sort the characters and compare
// - Or count the frequency of each character in both strings
// - You can use split(), sort(), and join()

function isAnagram(str1, str2) {
    // Your code here
}

// Test Cases
console.log(isAnagram("listen", "silent"));           // Expected: true
console.log(isAnagram("hello", "world"));             // Expected: false
console.log(isAnagram("The Eyes", "They See"));       // Expected: true
console.log(isAnagram("Dormitory", "Dirty room"));    // Expected: true
console.log(isAnagram("abc", "def"));                 // Expected: false
console.log(isAnagram("Astronomer", "Moon starer"));  // Expected: true