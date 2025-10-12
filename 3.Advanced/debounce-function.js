// Debounce Function

// Problem Description:
// Write a debounce function that delays the execution of a given function until
// after a specified delay has elapsed since the last time it was invoked.
// This is commonly used for search inputs, window resize events, etc.

// Examples:
// const debouncedFunc = debounce(() => console.log("Called!"), 1000);
// debouncedFunc(); // Will log "Called!" after 1 second
// debouncedFunc(); // Cancels previous call, waits 1 second again
// debouncedFunc(); // Cancels previous call, waits 1 second again

// Requirements:
// - The function should accept a function and a delay (in milliseconds)
// - Return a debounced version of the function
// - Each new call should reset the timer
// - The function should only execute after the delay has passed without new calls

// Hints:
// - Use setTimeout to delay execution
// - Use clearTimeout to cancel previous timers
// - Store the timer ID in a closure variable
// - Return a new function that manages the timer

function debounce(func, delay) {
    // Your code here
}

// Test Cases
const debouncedLog = debounce(() => console.log("Executed!"), 1000);

console.log("Calling debounced function 3 times quickly...");
debouncedLog();
debouncedLog();
debouncedLog();
// Should only log "Executed!" once, 1 second after the last call

setTimeout(() => {
    console.log("\nCalling again after 2 seconds...");
    debouncedLog();
    // Should log "Executed!" 1 second after this call
}, 2000);