// DESCRIPTION
//Write a function which takes a number and returns the corresponding ASCII char for that value.
//
// Example:
//
// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

// TESTS
//     assert.strictEqual(getChar(55),'7')
//     assert.strictEqual(getChar(56),'8')
//     assert.strictEqual(getChar(57),'9')
//     assert.strictEqual(getChar(58),':')
//     assert.strictEqual(getChar(59),';')
//     assert.strictEqual(getChar(60),'<')
//     assert.strictEqual(getChar(61),'=')
//     assert.strictEqual(getChar(62),'>')
//     assert.strictEqual(getChar(63),'?')
//     assert.strictEqual(getChar(64),'@')
//     assert.strictEqual(getChar(65),'A')

// SOLUTION
function getChar(c){
    return String.fromCharCode(c);
}

console.log(getChar(55))
console.log(getChar(56))
console.log(getChar(57))
console.log(getChar(58))
console.log(getChar(59))
console.log(getChar(60))
console.log(getChar(61))
console.log(getChar(62))
console.log(getChar(63))
console.log(getChar(64))
console.log(getChar(65))