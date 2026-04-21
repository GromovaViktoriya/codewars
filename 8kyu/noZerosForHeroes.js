// DESCRIPTION
// Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.
//
// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

// TESTS
//     assert.strictEqual(noBoringZeros(1450), 145)
//     assert.strictEqual(noBoringZeros(960000), 96)
//     assert.strictEqual(noBoringZeros(1050), 105)
//     assert.strictEqual(noBoringZeros(-1050), -105)
//     assert.strictEqual(noBoringZeros(-105), -105)
//     assert.strictEqual(noBoringZeros(0), 0

// SOLUTION
function noBoringZeros(n) {
    if (n === 0) return 0;
    return parseInt(n.toString().replace(/0+$/, ''))

    //  while (n % 10 === 0 && n !== 0) {
    //     n = n / 10
    //   }
    //   return n
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(960000))
console.log(noBoringZeros(1050))
console.log(noBoringZeros(-1050))
console.log(noBoringZeros(-105))
console.log(noBoringZeros(0))