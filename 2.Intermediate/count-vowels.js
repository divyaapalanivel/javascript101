// Count Vowels - Solution

function countVowels(str) {
    // Convert to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    // Loop through each character
    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
    
    // Alternative solution using filter:
    // return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
    
    // Alternative solution using regex:
    // const matches = str.match(/[aeiou]/gi);
    // return matches ? matches.length : 0;
}

// Test Cases
console.log(countVowels("hello"));           // Expected: 2
console.log(countVowels("JavaScript"));      // Expected: 3
console.log(countVowels("aeiou"));           // Expected: 5
console.log(countVowels("xyz"));             // Expected: 0
console.log(countVowels("HELLO WORLD"));     // Expected: 3
