// DESCRIPTION
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd
// parameter will tell whether it should return the value or the index.
//
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the
// second parameter will be a string holding one of two values: 'value' and 'index'.
//
// Some examples:
//
// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0


// TESTS
//         doTest([1,2,3,4,5], 'value', 1);
//         doTest([1,2,3,4,5], 'index', 0);
//         doTest([500,250,750,5000,1000,230], 'value', 230);
//         doTest([500,250,750,5000,1000,230], 'index', 5);
//         doTest([750,50000,10,50], 'value', 10);
//         doTest([750,50000,10,50], 'index', 2);



// SOLUTION
function min(arr, toReturn) {
if(toReturn === 'value') return Math.min(...arr)
if(toReturn === 'index') return arr.indexOf(Math.min(...arr))
}

console.log(min([1,2,3,4,5], 'value'))
console.log(min([1,2,3,4,5], 'index'))
console.log(min([500,250,750,5000,1000,230], 'value'))
console.log(min([500,250,750,5000,1000,230], 'index'))
console.log(min([750,50000,10,50], 'value'))
console.log(min([750,50000,10,50], 'index'))