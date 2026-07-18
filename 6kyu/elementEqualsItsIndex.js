// DESCRIPTION
// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which
// array[index] == index.
// Return -1 if there is no such index.
//
// Your algorithm should be very performant.
//
// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer
//
// Examples:
// input: [-8,0,2,5]
// output: 2 # since array[2] == 2
//
// input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index
// Random Tests Constraints:
// Array length: 200 000
//
// Amount of tests: 1 000
//
// Time limit: 150 ms


// TESTS
//     assert.strictEqual( indexEqualsValue([-8,0,2,5]), 2 );
//     assert.strictEqual( indexEqualsValue([-1,0,3,6]), -1 );
//     assert.strictEqual( indexEqualsValue([-3,0,1,3,10]), 3 );
//     assert.strictEqual( indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1 );
//     assert.strictEqual( indexEqualsValue([9,10,11,12,13,14]), -1 );
//     assert.strictEqual( indexEqualsValue([0]), 0 );


// SOLUTION
function indexEqualsValue(a) {
    let left = 0
    let right = a.length
    let result = -1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (a[mid] > mid) {
            right = mid
        } else if (a[mid] < mid) {
            left = mid + 1;
        } else {
            result = mid
            right = mid
        }
    }
    return result;
}

console.log(indexEqualsValue([-8, 0, 2, 5]))
console.log(indexEqualsValue([-1, 0, 3, 6]))
console.log(indexEqualsValue([-3, 0, 1, 3, 10]))
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]))
console.log(indexEqualsValue([0]))