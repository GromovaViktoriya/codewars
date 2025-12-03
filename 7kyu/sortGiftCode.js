// DESCRIPTION
// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26
// unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
//
// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"


// TESTS
//     assert.strictEqual(sortGiftCode('abcdef'), 'abcdef', "sortGiftCode('abcdef')")
//     assert.strictEqual(sortGiftCode('pqksuvy'), 'kpqsuvy', "sortGiftCode('pqksuvy')")
//     assert.strictEqual(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz', "sortGiftCode('zyxwvutsrqponmlkjihgfedcba')")


// SOLUTION
function sortGiftCode(code){
 return code.split('').sort().join('')
}

console.log(sortGiftCode('abcdef'))
console.log(sortGiftCode('pqksuvy'))
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'))