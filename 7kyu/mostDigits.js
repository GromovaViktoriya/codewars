// DESCRIPTION
// Find the number with the most digits.
//
// If two numbers in the argument array have the same number of digits, return the first one in the array.


// TESTS
// Test.assertEquals(findLongest([1, 10, 100]), 100)
// Test.assertEquals(findLongest([9000, 8, 800]), 9000)
// Test.assertEquals(findLongest([8, 900, 500]), 900)


// SOLUTION
function findLongest(array) {
    let longest = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i].toString().length > longest.toString().length) {
            longest = array[i]
        }
    }
    return longest
}

console.log(findLongest([1, 10, 100]))
console.log(findLongest([9000, 8, 800]))
console.log(findLongest([8, 900, 500]))