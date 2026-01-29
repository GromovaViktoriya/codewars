// DESCRIPTION
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of
// each element in a is strictly greater than the sum of the cubes of each element in b.
//
// E.g.
//
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

// TESTS
//     assert.strictEqual(arrayMadness([4,5,6],[1,2,3]), true);
//     assert.strictEqual(arrayMadness([5,6,7],[4,5,6]), false);
//     assert.strictEqual(arrayMadness([4,5,6],[3,4,5]), false);
//     assert.strictEqual(arrayMadness([3,4,5],[2,3,4]), false);
//     assert.strictEqual(arrayMadness([2,3,4],[1,2,3]), false);
//     assert.strictEqual(arrayMadness([1,2,3],[0,1,2]), true);
//     assert.strictEqual(arrayMadness([5,3,2,4,1],[15]), false);
//     assert.strictEqual(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
//     assert.strictEqual(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
//     assert.strictEqual(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
//     assert.strictEqual(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);


// SOLUTION
function arrayMadness(a, b) {
   return a.map(num => num ** 2).reduce((a, b) => a + b) > b.map(num => num ** 3).reduce((a, b) => a + b)
}

console.log(arrayMadness([4,5,6],[1,2,3]))
console.log(arrayMadness([5,6,7],[4,5,6]))
console.log(arrayMadness([4,5,6],[3,4,5]))
console.log(arrayMadness([3,4,5],[2,3,4]))
console.log(arrayMadness([2,3,4],[1,2,3]))
console.log(arrayMadness([1,2,3],[0,1,2]))
console.log(arrayMadness([5,3,2,4,1],[15]))
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]))
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]))
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]))
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]))