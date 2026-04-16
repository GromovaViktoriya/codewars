// DESCRIPTION
//Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is
// always a string, no need to verify it.


// TESTS
//		doTest("Hi!", "Hi");
// 		doTest("Hi!!!", "Hi!!");
// 		doTest("!Hi", "!Hi");
// 		doTest("!Hi!", "!Hi");
// 		doTest("Hi! Hi!", "Hi! Hi");
// 		doTest("Hi", "Hi");

// SOLUTION
function remove (string) {
   return string.endsWith('!')? string.slice(0, -1) : string;
   // return string.endsWith('!') ? string.slice(0, -1) : string;
}

console.log(remove("Hi!"))
console.log(remove("Hi!!"))
console.log(remove("!Hi"))
console.log(remove("!Hi!"))
console.log(remove("Hi! Hi!"))
console.log(remove("Hi"))