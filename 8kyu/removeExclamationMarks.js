// DESCRIPTION
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//TESTS
//     assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");

// SOLUTION
function removeExclamationMarks(s) {
    return s.replaceAll('!', '')
}

console.log(removeExclamationMarks("Hello World!"))