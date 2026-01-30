// DESCRIPTION
// Your task is to sum the differences between consecutive pairs in the array in descending order.
//
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
//
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//
// If the array is empty or the array has only one element the result should be 0.


// TESTS
//         assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
//         assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);

// SOLUTION
function sumOfDifferences(arr) {
    // let sortedArr = arr.sort((a, b) => b - a)
    // let diff = []
    // if (sortedArr.length < 2) return 0
    // for (let i = 0; i < sortedArr.length; i++) {
    //     if (i !== sortedArr.length - 1) diff.push(sortedArr[i] - sortedArr[i + 1])
    //     else break
    // }
    // return diff.reduce((a, b) => a + b, 0)

    return arr.sort((a, b) => b - a).map((num, i) => num - arr[i + 1] || 0).reduce((a, b) => a + b)
}

console.log(sumOfDifferences([1, 2, 10]))
console.log(sumOfDifferences([-3, -2, -1]))