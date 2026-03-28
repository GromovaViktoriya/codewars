// DESCRIPTION
//Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.
//
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string
// containing no letters at all is trivially considered to be in ALL CAPS.

//TESTS
//     assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
//     assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
//     assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
//     assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
//     assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
//     assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

// SOLUTION
String.prototype.isUpperCase = function() {
 return this.split('').every(char => char === char.toUpperCase())
}

console.log('c'.isUpperCase())
console.log('C'.isUpperCase())
console.log('hello I AM DONALD'.isUpperCase())
console.log('HELLO I AM DONALD'.isUpperCase())
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase())
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase())