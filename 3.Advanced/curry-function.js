// Curry Function - Solution

function curry(func) {
    return function curried(...args) {
        // If we have enough arguments, call the original function
        if (args.length >= func.length) {
            return func.apply(this, args);
        }
        // Otherwise, return a function that collects more arguments
        else {
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
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
