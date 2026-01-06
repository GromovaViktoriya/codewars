// DESCRIPTION
//Is every value in the array an array?
//
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
//
// Examples:
//
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false



// TESTS
//    assert.strictEqual(arrCheck([]), true);
//    assert.strictEqual(arrCheck([['string']]), true);
//    assert.strictEqual(arrCheck([[],{}]), false);
//    assert.strictEqual(arrCheck([[1],[2],[3]]), true);
//    assert.strictEqual(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);


// SOLUTION
const arrCheck = value => value.every(item => Array.isArray(item))


console.log(arrCheck([]))
console.log(arrCheck([['string']]))
console.log(arrCheck([[],{}]))
console.log(arrCheck([[1],[2],[3]]))
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']))