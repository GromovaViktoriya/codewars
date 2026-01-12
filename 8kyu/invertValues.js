// DESCRIPTION
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives
// become positives.
//
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.


// TESTS
//     assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
//     assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
//     assert.deepEqual(norm(invert([])), []);
//     assert.deepEqual(norm(invert([0])), [0]);


// SOLUTION
function invert(array) {
    return array.map(num => num === 0 ? 0 : -num)
}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log(invert([]))
console.log(invert([0]))