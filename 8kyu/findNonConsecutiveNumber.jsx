// DESCRIPTION
//Your task is to find the first element of an array that is not consecutive.
//
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
//
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the
// first non-consecutive number.
//
// If the whole array is consecutive then return null2.
//
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique
// and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
//
// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with
// a single number and is not tested for, but you can write your own example test. )

// TESTS
//     const first = firstNonConsecutive([1,2,3,4,6,7,8])
//     assert.strictEqual(first, 6)
//     const first = firstNonConsecutive([1,2,3,4])
//     assert.strictEqual(first, null)


// SOLUTION
function firstNonConsecutive(arr) {
    if (arr.length === 1 || arr.length === 0) return null;
    let result = arr.find((number, index) => index !== 0 && number !== arr[index - 1] + 1)
    if (result === undefined) return null;
    return result;
}


console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))
console.log(firstNonConsecutive([1, 2, 3, 4]))
console.log(firstNonConsecutive([-8,-7,-6,-5,-4,-3,0,1]))