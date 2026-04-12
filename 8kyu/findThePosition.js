// DESCRIPTION
// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Output :: "Position of alphabet: 1"
//
// Note: Only lowercased English letters are tested

// TESTS
//     assert.strictEqual(position("a"),"Position of alphabet: 1");
//     assert.strictEqual(position("z"),"Position of alphabet: 26");
//     assert.strictEqual(position("e"),"Position of alphabet: 5");

// SOLUTION
function position(letter){
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

console.log(position("a"))
console.log(position("z"))
console.log(position("e"))