// DESCRIPTION
//Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n
// element(s) of the sequence.
//
// If n == 0 return an empty sequence []


// TESTS
//         const arr = ['a', 'b', 'c', 'd', 'e'];
//     assert.sameOrderedMembers(first([...arr]   ),      ['a']);
//     assert.sameOrderedMembers(first([...arr], 2), ['a', 'b']);

// SOLUTION
function first(arr, n = 1) {
    if (n === 0) return []
    return arr.slice(0, n)
}

console.log(first(['a', 'b', 'c', 'd', 'e'], 2))
console.log(first(['a', 'b', 'c', 'd', 'e'],))