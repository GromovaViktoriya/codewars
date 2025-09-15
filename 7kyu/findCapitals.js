// DESCRIPTION
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as
// its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


// TESTS
//     assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] , "Input: \"CodEWaRs\"");
//     assert.deepEqual(capitals('aAbB'), [1,3], "Input: \"aAbB\"");
//     assert.deepEqual(capitals('AAA'), [0,1,2], "Input: \"AAA\"");
//     assert.deepEqual(capitals(''), [], "Input: \"\""


// SOLUTION
var capitals = function (word) {
    // let result = [];
    // for (let i = 0; i < word.length; i++) {
    //     if (word[i] === word[i].toUpperCase()) {
    //         result.push(i);
    //     }
    // }
    // return result;
    return word.split('').reduce((accumulator, char, index) => {
        if (char === char.toUpperCase()) {
            accumulator.push(index);
        }
        return accumulator;
    }, []);
};
console.log(capitals('CodEWaRs'))
console.log(capitals('aAbB'))
console.log(capitals('AAA'))
console.log(capitals(''))
