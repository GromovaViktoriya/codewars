// Output:
// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.


// TESTS
//     assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
//     assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
//     assert.strictEqual(high('take me to semynak'), 'semynak');
//     assert.strictEqual(high('aa b'), 'aa');
//     assert.strictEqual(high('b aa'), 'b');
//     assert.strictEqual(high('bb d'), 'bb');
//     assert.strictEqual(high('d bb'), 'd');
//     assert.strictEqual(high('aaa b'), 'aaa');


// SOLUTION
function high(x) {
    let words = x.split(' ')
    let points = words.map((word) => {
        return word.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 97+1, 0)
    })
    let maxIndex = points.indexOf(Math.max(...points))
    return words[maxIndex]
}

console.log(high('man i need a taxi up to ubud'))
console.log(high('what time are we climbing up the volcano'))
console.log(high('take me to semynak'))
console.log(high('aa b'))
console.log(high('b aa'))
console.log(high('bb d'))
console.log(high('d bb'))
console.log(high('aaa b'))