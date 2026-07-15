// DESCRIPTION
// Complete the method so that it formats the words into a single comma separated value. The last word should be
// separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single
// formatted string.
//
// Note:
//
// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)
//
// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""


// TESTS
//     assert.strictEqual(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'")
//     assert.strictEqual(formatWords(['one']), 'one', "formatWords(['one']) should return 'one'")
//     assert.strictEqual(formatWords(['one', '', 'three']), 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'")
//     assert.strictEqual(formatWords(['', '', 'three']), 'three', "formatWords(['', '', 'three']) should return 'three'")
//     assert.strictEqual(formatWords(['one', 'two', '']), 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'")
//     assert.strictEqual(formatWords([]),'', 'formatWords([]) should return ""')
//     assert.strictEqual(formatWords(null), '', 'formatWords(null) should return ""')
//     assert.strictEqual(formatWords(['']), '', 'formatWords([""]) should return ""')


// SOLUTION
function formatWords(words) {
    if (!words || words.length === 0) return ''
    let array = words.filter(word => word.length > 0)
    if (array.length === 0) return ''
    if (array.length === 1) return array[0]
    let lastWord = array.pop()
    return array.join(', ') + ' and ' + lastWord
}


console.log(formatWords(['ninja', 'samurai', 'ronin'])) //"ninja, samurai and ronin"
console.log(formatWords(['one', 'two', 'three', 'four'])) //'one, two, three and four'
console.log(formatWords(['one', '', 'three'])) //'one and three'
console.log(formatWords(['one'])) //'one'
console.log(formatWords([])) //""
console.log(formatWords(null)) //""
console.log(formatWords([''])) //""