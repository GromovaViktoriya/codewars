// DESCRIPTION
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//
// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"


// TESTS
//         doTest("Hi!", "H!!");
//         doTest("!Hi! Hi!", "!H!! H!!");
//         doTest("aeiou", "!!!!!");
//         doTest("ABCDE", "!BCD!");


// SOLUTION
function replace(s) {
    return s.replaceAll(/[aeiou]/gi, '!');
}

console.log(replace("Hi!"))
console.log(replace("!Hi! Hi!"))
console.log(replace("aeiou"))
console.log(replace("ABCDE"))