// DESCRIPTION
// Complete the solution so that the function will break up camel casing, using a space between words.
//
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// TESTS
//   it("Sample test 1", () => {
//     assert.strictEqual(solution(""), "", `solution("")`);
//   });
//   it("Sample test 2", () => {
//     assert.strictEqual(solution("camelCasing"), "camel Casing", `solution("camelCasing")`);
//   });
//   it("Sample test 3", () => {
//     assert.strictEqual(solution("camelCasingTest"), "camel Casing Test", `solution("camelCasingTest")`);

// SOLUTION
function solution(string) {
    return string.split('').map(char => char === char.toUpperCase()? ' ' + char : char).join('')
}

console.log(solution(''))
console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))