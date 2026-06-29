// DESCRIPTION
// Let's create some scrolling text!
//
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the
// given string, in uppercase.
//
// Example
// scrollingText("codewars") should return:
//
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

// TESTS
//   assert.deepEqual(scrollingText("abc"), ["ABC","BCA","CAB"]);

// SOLUTION
function scrollingText(text) {
    // let result = []
    // let upper = text.toUpperCase()
    // for (let i = 0; i < upper.length; i++) {
    //     let head = upper.substring(0, i)
    //     let tail = upper.substring(i)
    //     debugger
    //     result.push(tail + head)
    // }
    // return result
    let upper = text.toUpperCase();
    return [...upper].map((_, index) => upper.slice(index)+upper.slice(0, index))
}

console.log(scrollingText("abc"))
console.log(scrollingText("codewars"))