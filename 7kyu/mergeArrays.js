// DESCRIPTION
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.
//
// Examples:
//
// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
//
// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:
//
// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).


// TESTS
//         assert.deepEqual(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
//         assert.deepEqual(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
//         assert.deepEqual(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
//         assert.deepEqual(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);


// SOLUTION
function mergeArrays(a, b) {
    let arr = []
    if (a.length > b.length || a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (b[i]){
                arr.push(a[i], b[i])
            }
            if (!b[i]){
                arr.push(a[i])
            }
        }
    }
    if (b.length > a.length) {
        for (let i = 0; i < b.length; i++) {
            if (a[i]){
                arr.push(a[i], b[i])
            }
            if (!a[i]){
                arr.push(b[i])
            }
        }
    }
    return arr
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]))
console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']))
console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]))