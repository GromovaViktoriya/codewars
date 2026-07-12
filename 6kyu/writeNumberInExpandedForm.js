// DESCRIPTION
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// TESTS
//     assert.strictEqual(expandedForm(12), '10 + 2');
//     assert.strictEqual(expandedForm(42), '40 + 2');
//     assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');


// SOLUTION
function expandedForm(num) {
return num
    .toString()
    .split('')
    .map((num, i, array) => num !== '0'? num + '0'.repeat(array.length-1-i): '')
    .filter(item => item !== '')
    .join(' + ')
}

console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))