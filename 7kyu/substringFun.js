// DESCRIPTION
// Complete the function that takes an array of words.
//
// You must concatenate the nth letter from each word to construct a new word which should be returned as a string,
// where n is the position of the word in the list.
//
// For example:
//
// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough
// letters.


// TESTS
//     assert.strictEqual(nthChar([]),'');
//     assert.strictEqual(nthChar(['yoda', 'best', 'has']), 'yes');


// SOLUTION
function nthChar(words){
    // let result = []
    // for (let i = 0; i < words.length; i++) {
    //     result.push(words[i][i])
    // }
    // return result.join('')

    return words.map((word, index) => word[index]).join('')
}

console.log(nthChar([]))
console.log(nthChar(['yoda', 'best', 'has']))