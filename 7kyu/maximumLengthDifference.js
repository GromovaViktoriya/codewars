// DESCRIPTION
// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string
// in the first array and y be any string in the second array.
//
// Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// TESTS
// describe("mxdiflg",function() {
// it("Basic tests",function() {
//     var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
//     var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
//     assert.strictEqual(mxdiflg(s1, s2), 13);


// SOLUTION
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;
    let aLength = a1.map(s => s.length);
    let bLength = a2.map(s => s.length);
    let diff1 = Math.max(...aLength) - Math.min(...bLength)
    let diff2 = Math.max(...bLength) - Math.min(...aLength)
    return Math.max(diff1, diff2);
}

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
console.log(mxdiflg(a1, a2))
