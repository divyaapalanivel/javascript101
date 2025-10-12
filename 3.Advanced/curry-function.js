// Curry Function

// Problem Description:
// Write a function that transforms a function with multiple arguments into a
// sequence of functions, each taking a single argument.
// For example: f(a, b, c) becomes f(a)(b)(c)

// Examples:
// function add(a, b, c) { return a + b + c; }
// const curriedAdd = curry(add);
// curriedAdd(1)(2)(3);     // Returns: 6
// curriedAdd(1, 2)(3);     // Returns: 6
// curriedAdd(1)(2, 3);     // Returns: 6

// Requirements:
// - The function should accept a function as parameter
// - Return a curried version of that function
// - Should work with any number of arguments
// - Should allow partial application (multiple args at once)

// Hints:
// - Use closures to store previously provided arguments
// - Check if enough arguments have been collected
// - Use the length property of the function to know how many args it expects
// - Use rest parameters (...args) to collect arguments
// - Use spread operator to pass collected arguments

function curry(func) {
    // Your code here
}

// Test Cases
function add(a, b, c) {
    return a + b + c;
}

function multiply(a, b, c, d) {
    return a * b * c * d;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));        // Expected: 6
console.log(curriedAdd(1, 2)(3));        // Expected: 6
console.log(curriedAdd(1)(2, 3));        // Expected: 6

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)(5));     // Expected: 120
console.log(curriedMultiply(2, 3)(4, 5));     // Expected: 120