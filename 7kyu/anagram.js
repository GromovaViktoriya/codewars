// DESCRIPTION
//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
//
// Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"


// TESTS
//     assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
//     assert.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
//     assert.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')
//
//     assert.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case "dumble", "bumble"')
//     assert.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case "ound", "round"')
//     assert.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count'


// SOLUTION

let isAnagram = function (test, original) {
    let testArr = test.toLowerCase().split('').sort()
    let originalArr = original.toLowerCase().split('').sort()
    if (testArr.length !== originalArr.length) return false;
    return originalArr.every((char, index) => char === testArr[index])
};

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("Twoo", "WooT"))
console.log(isAnagram("dumble", "bumble"))
console.log(isAnagram("ound", "round"))
console.log(isAnagram("apple", "pale"))