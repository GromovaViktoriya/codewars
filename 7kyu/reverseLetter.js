// DESCRIPTION
//Given a string str, reverse it and omit all non-alphabetic characters.
//
// Example
// For str = "krishan", the output should be "nahsirk".
//
// For str = "ultr53o?n", the output should be "nortlu".
//
// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.
//
// [output] a string

// TESTS
//         tester("krishan", "nahsirk");
//         tester("ultr53o?n", "nortlu");
//         tester("ab23c", "cba");
//         tester("krish21an", "nahsirk");

// SOLUTION
function reverseLetter(str) {
return str.split('').filter(item => /[a-z]/i.test(item)).reverse().join('')
}

console.log( reverseLetter("krishan"))
console.log( reverseLetter("ultr53o?n"))
console.log( reverseLetter("ab23c"))
console.log( reverseLetter("krish21an"))