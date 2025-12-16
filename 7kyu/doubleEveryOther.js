// DESCRIPTION
//Write a function that doubles every second integer in a list, starting from the left.
//
// Example:
//
// For input array/list :
//
// [1,2,3,4]
// the function should return :
//
// [1,4,3,8]


// TESTS
//       assert.deepEqual( doubleEveryOther([1,2,3,4]), [1,4,3,8] );


// SOLUTION
function doubleEveryOther(a) {
    return a.map((item, index) => index % 2 === 0 ? item : item * 2)
}

console.log(doubleEveryOther([1, 2, 3, 4]))