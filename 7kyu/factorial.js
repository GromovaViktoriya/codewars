// DESCRIPTION
//Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

// TESTS
//   it("factorial(0) should return 1", () => {
//     assert.equal(factorial(0), 1);
//   });
//
//   it("factorial(1) should return 1", () => {
//     assert.equal(factorial(1), 1);
//   });
//
//   it("factorial(7) should return 5040", () => {
//     assert.equal(factorial(7), 5040);
//   });
//
//   it("factorial(18) should return 6402373705728000", () => {
//     assert.equal(factorial(18), 6402373705728000)

// SOLUTION
function factorial(n){
return n === 0 ? 1 : n * factorial(n - 1)
// let answer = 1;
//   while (n > 0) {
//     answer *= n;
//     n--;
//   }
//   return answer;

}

console.log( factorial(0))
console.log( factorial(1))
console.log( factorial(7))
console.log( factorial(18))