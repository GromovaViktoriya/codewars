// DESCRIPTION
// Complete the method which accepts an array of integers, and returns one of the following:
//
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// The order does not have to be strict: a sorted array can contain consecutive duplicates,
// e.g. [1, 1, 2, 3] is sorted in ascending order.
//
// It is guaranteed that there will always be a unique valid answer. More precisely:
//
// there will be no arrays with less than 2 elements
// there will be no arrays where all elements are equal


// TESTS
//         doTest([1, 3, 9, 4], 'no');
//         doTest([4, 3, 1, 9], 'no');
//         doTest([1, 2], 'yes, ascending');
//         doTest([2, 1], 'yes, descending');
//         doTest([1, 2, 3, 4], 'yes, ascending');
//         doTest([1, 1, 2, 3], 'yes, ascending');
//         doTest([1, 2, 3, 3], 'yes, ascending');
//         doTest([4, 3, 2, 1], 'yes, descending');
//         doTest([3, 3, 2, 1], 'yes, descending');
//         doTest([3, 2, 1, 1], 'yes, descending');
//     });


// SOLUTION
function isSortedAndHow(array) {
    let arrayString = array.join('');
    let ascendingString = [...array].sort((a, b) => a - b).join('');
    let descendingString = [...array].sort((a, b) => b - a).join('');
    if (arrayString === ascendingString){
        return 'yes, ascending'
    } if (arrayString === descendingString) {
        return 'yes, descending'
    } else {
        return 'no'
    }
}

console.log(isSortedAndHow([1, 3, 9, 4]))
console.log(isSortedAndHow([4, 3, 1, 9]))
console.log(isSortedAndHow([1, 2]))
console.log(isSortedAndHow([2, 1]))
console.log(isSortedAndHow([1, 2, 3, 4]))
console.log(isSortedAndHow([1, 1, 2, 3]))
console.log(isSortedAndHow([1, 2, 3, 3]))
console.log(isSortedAndHow([4, 3, 2, 1]))
console.log(isSortedAndHow([3, 3, 2, 1]))
console.log(isSortedAndHow([3, 2, 1, 1]))
