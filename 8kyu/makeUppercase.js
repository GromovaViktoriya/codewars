// DESCRIPTION
// Write a function which converts the input string to uppercase.


// TESTS
//     assert.strictEqual(makeUpperCase(""),           "");
//     assert.strictEqual(makeUpperCase("hello"), "HELLO");
//     assert.strictEqual(makeUpperCase("Hello"), "HELLO");
//     assert.strictEqual(makeUpperCase("HELLO"), "HELLO");


// SOLUTION
function makeUpperCase(str) {
return str.toUpperCase();
}

console.log(makeUpperCase("hello"))
console.log(makeUpperCase("Hello"))
console.log(makeUpperCase("HELLO"))
console.log(makeUpperCase(""))