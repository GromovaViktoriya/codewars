// DESCRIPTION
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with
// the exponent ranging from 0 to n ( inclusive ).
//
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// TESTS
//     assert.deepEqual(powersOfTwo(0), [1])
//     assert.deepEqual(powersOfTwo(1), [1, 2])
//     assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])

// SOLUTION
function powersOfTwo(n){
  let res = [];
  for (let i = 0; i <= n; i++) {
      res.push(Math.pow(i, 2));
  }
  return res;
}

console.log(powersOfTwo(0))
console.log(powersOfTwo(1))
console.log(powersOfTwo(2))