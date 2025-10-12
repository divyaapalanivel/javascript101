// Palindrome Checker

// Problem Description:
// Write a function that checks if a given word or phrase is a palindrome.
// A palindrome is a word that reads the same forwards and backwards.
// The function should ignore spaces, punctuation, and case.

// Examples:
// isPalindrome("racecar");                        // Returns: true
// isPalindrome("hello");                          // Returns: false
// isPalindrome("A man a plan a canal Panama");    // Returns: true
// isPalindrome("race a car");                     // Returns: false
// isPalindrome("Was it a car or a cat I saw");    // Returns: true

// Requirements:
// - The function should accept one string parameter
// - Return true if the string is a palindrome, false otherwise
// - Ignore spaces, punctuation, and case
// - Only consider alphanumeric characters

// Hints:
// - Convert the string to lowercase
// - Remove all non-alphanumeric characters using regex or filter
// - Compare the cleaned string with its reverse
// - You can use replace() with a regex pattern /[^a-z0-9]/g

function isPalindrome(str) {
    // Your code here
}

// Test Cases
console.log(isPalindrome("racecar"));                        // Expected: true
console.log(isPalindrome("hello"));                          // Expected: false
console.log(isPalindrome("A man a plan a canal Panama"));    // Expected: true
console.log(isPalindrome("race a car"));                     // Expected: false
console.log(isPalindrome("Was it a car or a cat I saw"));    // Expected: true