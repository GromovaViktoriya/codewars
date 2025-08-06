//DESCRIPTION
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//TESTS
// it("Test 1", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//   });
//   it("Test 2", () => {
//     assert.strictEqual(highAndLow("1 2 3"), "3 1");
//   });

//SOLUTION

// function highAndLow(numbers){
//     let arr = numbers.split(' ').map(Number);
//     let highest = arr[0];
//     let lowest = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (highest < arr[i]){
//             highest = arr[i]
//         } else if (lowest > arr[i]) {
//             lowest = arr[i]
//
//         }
//     }
//     return `${highest} ${lowest}`
// }

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);
    let highest = Math.max(...arr);
    let lowest = Math.min(...arr);
    return `${highest} ${lowest}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));