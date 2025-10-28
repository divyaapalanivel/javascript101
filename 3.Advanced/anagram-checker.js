// Anagram Checker - Solution

function isAnagram(str1, str2) {
    // Helper function to clean and sort string
    const cleanAndSort = (str) => {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')
            .split('')
            .sort()
            .join('');
    };
    
    // Compare the sorted, cleaned strings
    return cleanAndSort(str1) === cleanAndSort(str2);
    
    // Alternative solution using character frequency:
    // const getCharFrequency = (str) => {
    //     const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    //     const freq = {};
    //     for (let char of cleaned) {
    //         freq[char] = (freq[char] || 0) + 1;
    //     }
    //     return freq;
    // };
    // 
    // const freq1 = getCharFrequency(str1);
    // const freq2 = getCharFrequency(str2);
    // 
    // if (Object.keys(freq1).length !== Object.keys(freq2).length) return false;
    // 
    // for (let char in freq1) {
    //     if (freq1[char] !== freq2[char]) return false;
    // }
    // return true;
}

// Test Cases
console.log(isAnagram("listen", "silent"));           // Expected: true
console.log(isAnagram("hello", "world"));             // Expected: false
console.log(isAnagram("The Eyes", "They See"));       // Expected: true
console.log(isAnagram("Dormitory", "Dirty room"));    // Expected: true
console.log(isAnagram("abc", "def"));                 // Expected: false
console.log(isAnagram("Astronomer", "Moon starer"));  // Expected: true
