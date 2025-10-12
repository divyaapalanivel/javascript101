// Deep Clone Object

// Problem Description:
// Write a function that creates a deep copy of a nested object or array.
// A deep copy means that nested objects are also copied, not just referenced.

// Examples:
// const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
// const cloned = deepClone(obj);
// cloned.b.d.e = 999;
// console.log(obj.b.d.e);    // Should still be 3 (not affected)

// Requirements:
// - The function should accept an object or array
// - Return a deep copy where nested objects are also cloned
// - Changing the clone should not affect the original
// - Handle nested objects, arrays, and primitive values

// Hints:
// - Use recursion to handle nested objects
// - Check if the value is an object or array
// - Use Array.isArray() to distinguish arrays from objects
// - For each property, recursively clone if it's an object
// - Primitive values (strings, numbers, booleans) can be copied directly

function deepClone(obj) {
    // Your code here
}

// Test Cases
const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    hobbies: ["reading", "gaming"]
};

const cloned = deepClone(original);
cloned.address.city = "Los Angeles";
cloned.address.coordinates.lat = 34.0522;
cloned.hobbies.push("cooking");

console.log("Original city:", original.address.city);           // Expected: "New York"
console.log("Cloned city:", cloned.address.city);               // Expected: "Los Angeles"
console.log("Original lat:", original.address.coordinates.lat);  // Expected: 40.7128
console.log("Original hobbies:", original.hobbies);             // Expected: ["reading", "gaming"]
console.log("Cloned hobbies:", cloned.hobbies);                 // Expected: ["reading", "gaming", "cooking"]