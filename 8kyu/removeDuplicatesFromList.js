// DESCRIPTION
//Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
//
// The order of the sequence has to stay the same.
//
// Examples:
//
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]



// TESTS
//      assert.deepEqual(distinct([1]), [1]);
//     assert.deepEqual(distinct([1,2]), [1,2]);
//     assert.deepEqual(distinct([1,1,2]), [1,2]);


// SOLUTION
function distinct(a) {
    return a.filter((item, index) => a.indexOf(item) === index)
    // return [...new Set(a)]
}

console.log(distinct([1]))
console.log(distinct([1,2]))
console.log(distinct([1,1,2]))