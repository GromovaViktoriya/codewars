// DESCRIPTION
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100
//
// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.


// TESTS
//   it("Should return false for invalid parentheses", function() {
//     runTest(false, ")(");
//     runTest(false, "()()(");
//     runTest(false, "((())");
//     runTest(false, "())(()");
//     runTest(false, ")()");
//     runTest(false, ")");
//   });
//   it("Should return true for valid parentheses", function() {
//     runTest(true, "()");
//     runTest(true, "((()))");
//     runTest(true, "()()()");
//     runTest(true, "(()())()");
//     runTest(true, "()(())((()))(())()");
//   });


// SOLUTION
function validParentheses(parenStr) {
    let count = 0
    for (const char of parenStr) {
        if (char === '(') count++
        if (char === ')') count--
        if (count < 0) return false
    }
    return count === 0
}

console.log(validParentheses(')('))
console.log(validParentheses('()'))
console.log(validParentheses('()(())((()))(())()'))
console.log(validParentheses('()()()'))
console.log(validParentheses('())(()'))