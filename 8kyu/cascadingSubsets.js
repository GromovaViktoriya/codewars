// DESCRIPTION
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n,
// like so:

// TESTS
// describe('Test Cases', function() {
//   const lst = [3, 5, 8, 13];
//
//   it('Should return cascading lists of 1 element', function() {
//     assert.deepEqual(eachCons(lst, 1), [[3], [5], [8], [13]]);
//   });
//
//   it('Should return cascading lists of 2 element', function() {
//     assert.deepEqual(eachCons(lst, 2), [[3,5], [5,8], [8,13]]);
//   });
//
//   it('Should return cascading lists of 3 element', function() {
//     assert.deepEqual(eachCons(lst, 3), [[3,5,8], [5,8,13]]);
//   });
//
//   it('Empty list should return an empty list', function() {
//     assert.deepEqual(eachCons([], 3), []);
//   });
// });

// SOLUTION
function eachCons(array, n) {
    const result = [];
    for (let i = 0; i <= array.length - n; i++) {
        result.push(array.slice(i, i + n));
    }
    return result;
}

console.log(eachCons([3, 5, 8, 13], 1))
console.log(eachCons([3, 5, 8, 13], 2))
console.log(eachCons([3, 5, 8, 13], 3))
console.log(eachCons([], 3))
