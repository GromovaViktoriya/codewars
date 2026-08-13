// DESCRIPTION
// Write a method (or function, depending on the language) that converts a string to PascalCase, that is, all words
// must have their first letter capitalized and spaces must be removed.
//
// Examples (input --> output):
// "hello case" --> "HelloCase"
// "pascal case word" --> "PascalCaseWord"

// TESTS
//     assert.strictEqual("test case".camelCase(), "TestCase");
//     assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
//     assert.strictEqual("say hello".camelCase(), "SayHello");
//     assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
//     assert.strictEqual("".camelCase(), "");


// SOLUTION
String.prototype.camelCase = function () {
    return this.split(' ').map((word) => word.split('').map((char, index) => index === 0? char.toUpperCase() : char).join('')).join('')
}

console.log("test case".camelCase())
console.log("camel Case method".camelCase())
console.log("say hello".camelCase())
console.log("".camelCase())