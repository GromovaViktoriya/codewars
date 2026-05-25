// DESCRIPTION
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string
// contains the whole word "English".
//
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
// Return value as boolean values, true for the string to contains "English", false for it does not.


// TESTS
//     assert.strictEqual(spEng("english"), true);
//     assert.strictEqual(spEng("egnlish"), false);


// SOLUTION
function spEng(sentence) {
    return !!sentence.toLowerCase().includes('english')
}

console.log(spEng('english'));
console.log(spEng('egnlish'));
console.log(spEng('abcEnglishdef'));
console.log(spEng('abcnEglishsef'));