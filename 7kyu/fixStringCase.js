// DESCRIPTION
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to
// convert that string to either lowercase only or uppercase only based on:
//
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
//
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

// TESTS
//   it("solve('code') should return 'code'", function() {
//     assert.strictEqual(solve("code"), "code");
//   });
//
//   it("solve('CODe') should return 'CODE'", function() {
//     assert.strictEqual(solve("CODe"), "CODE");
//   });
//
//   it("solve('COde') should return 'code'", function() {
//     assert.strictEqual(solve("COde"), "code");
//   });
//
//   it("solve('Code') should return 'code'", function() {
//     assert.strictEqual(solve("Code"), "code");
//   });

// SOLUTION
function solve(s) {
    let upperCount = 0
    let lowerCount = 0
    s.split('').forEach((item, _index) => {
        /[A-Z]/.test(item) ? upperCount++ : lowerCount++
    })
   return upperCount === lowerCount || lowerCount > upperCount ? s.toLowerCase() : s.toUpperCase()
}

console.log(solve("code"))
console.log(solve("CODe"))
console.log(solve("COde"))
console.log(solve("Code"))