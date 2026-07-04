// DESCRIPTION
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
//
//
// You have to write a method, that return the length of the missing array.
//
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
//
// If the array of arrays is null/nil or empty, the method should return 0.
//
// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have created other katas. Have a look if you like coding and challenges.

// TESTS
//     assert.strictEqual(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
//     assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
//     assert.strictEqual(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
//     assert.strictEqual(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
//     assert.strictEqual(getLengthOfMissingArray([ ]), 0);

// SOLUTION
function getLengthOfMissingArray(arrayOfArrays) {
    return !arrayOfArrays || arrayOfArrays.length === 0 || arrayOfArrays.some(array => !array || array.length === 0)
        ? 0
        : arrayOfArrays
        .map(array => array.length)
        .sort((a, b) => a - b)
        .filter((length, index, array) => length + 1 !== array[index + 1] && length !== array[array.length - 1])
        [0] + 1
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]))
console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ))
console.log(getLengthOfMissingArray([ ] ))
console.log(getLengthOfMissingArray([[], [0, 0], [4, 4, 4], [0, 3, 4, 0]] ))
console.log(getLengthOfMissingArray(null ))
console.log(getLengthOfMissingArray([[1, 2], null, [1]] ))
