// Temperature Converter - Solution

function celsiusToFahrenheit(celsius) {
    // Formula: F = (C × 9/5) + 32
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    // Formula: C = (F - 32) × 5/9
    return (fahrenheit - 32) * 5/9;
}

// Test Cases
console.log(celsiusToFahrenheit(0));      // Expected: 32
console.log(celsiusToFahrenheit(100));    // Expected: 212
console.log(celsiusToFahrenheit(25));     // Expected: 77

console.log(fahrenheitToCelsius(32));     // Expected: 0
console.log(fahrenheitToCelsius(212));    // Expected: 100
console.log(fahrenheitToCelsius(77));     // Expected: 25
