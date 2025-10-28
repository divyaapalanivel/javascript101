// Remove Duplicates - Solution

function removeDuplicates(arr) {
    // Using Set to remove duplicates and spread operator to convert back to array
    return [...new Set(arr)];
    
    // Alternative solution using filter and indexOf:
    // return arr.filter((item, index) => arr.indexOf(item) === index);
    
    // Alternative solution using reduce:
    // return arr.reduce((unique, item) => {
    //     if (!unique.includes(item)) {
    //         unique.push(item);
    //     }
    //     return unique;
    // }, []);
    
    // Alternative solution using for loop:
    // const unique = [];
    // for (let item of arr) {
    //     if (!unique.includes(item)) {
    //         unique.push(item);
    //     }
    // }
    // return unique;
}

// Test Cases
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));           // Expected: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"]));       // Expected: ["a", "b", "c"]
console.log(removeDuplicates([1, 1, 1, 1]));                    // Expected: [1]
console.log(removeDuplicates([]));                              // Expected: []
console.log(removeDuplicates([5, 3, 5, 2, 3, 1]));              // Expected: [5, 3, 2, 1]
