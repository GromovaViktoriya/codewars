// DESCRIPTION
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers
// less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// TESTS
//   it("factorial for 0 is 1", () => {
//     assert.strictEqual(factorial(0), 1, "factorial for 0 is 1");
//   });
//
//   it("factorial for 1 is 1", () => {
//     assert.strictEqual(factorial(1), 1, "factorial for 1 is 1");
//   });
//
//   it("factorial for 5 is 120", () => {
//     assert.strictEqual(factorial(5), 120, "factorial for 5 is 120");
//   });
//
//   it("Should throw RangeError for -1", () => {
//     assert.throws(() => factorial(-1), RangeError, null, "Should throw RangeError");
//   });

// SOLUTION
function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError(`Should throw RangeError`)
    return n === 0 ? 1 : n * factorial(n - 1)
}

console.log(factorial(0))
console.log(factorial(5))
