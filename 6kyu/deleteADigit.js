// DESCRIPTION
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
//
// Example
// For n = 152, the output should be 52;
//
// For n = 1001, the output should be 101.
//
// Input/Output
// [input] integer n
//
// Constraints: 10 ≤ n ≤ 1000000.
//
// [output] an integer


// TESTS
// Test.assertEquals(deleteDigit(152),52)
//
// Test.assertEquals(deleteDigit(1001),101)
//
// Test.assertEquals(deleteDigit(10),1)


// SOLUTION
function deleteDigit(n) {
    let result = []
    let substring = ''
    let string = n.toString()
    for (let i = 0; i < string.length; i++) {
        substring = string.slice(0, i) + string.slice(i+1)
        result.push(+substring)
    }
    return Math.max(...result)
}


console.log(deleteDigit(152))
console.log(deleteDigit(1001))
console.log(deleteDigit(10))