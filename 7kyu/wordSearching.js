// DESCRIPTION
//Write a method that will search an array of strings for all strings that contain another string, ignoring
// capitalization. Then return an array of the found strings.
//
// The method takes two parameters, the query string and the array of strings to search, and returns an array.
//
// If the string isn't contained in any of the strings in the array, the method returns an array containing a single
// string: "Empty"

//Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method
// should return ["home", "Mercury"].


// TESTS
//     assert.deepEqual(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
//     assert.deepEqual(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
//     assert.deepEqual(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]);
//     assert.deepEqual(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]);


// SOLUTION
function wordSearch(query, seq) {
    let result = []
    for (let i = 0; i < seq.length; i++) {
        if (seq[i].toLowerCase().includes(query.toLowerCase())) result.push(seq[i])
    }
    return result.length > 0 ? result : ["Empty"]
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]))
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]))
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]))
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]))