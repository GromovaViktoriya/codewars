// DESCRIPTION
// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
//
// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying


// TESTS
//     assert.strictEqual(adjacentElementsProduct([5, 8]), 40);
//     assert.strictEqual(adjacentElementsProduct([1, 2, 3]), 6);
//     assert.strictEqual(adjacentElementsProduct([1, 5, 10, 9]), 90);
//     assert.strictEqual(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
//     assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
//     assert.strictEqual(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
//     assert.strictEqual(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
//     assert.strictEqual(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
//     assert.strictEqual(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
//     assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);


// SOLUTION
function adjacentElementsProduct(array) {
    let result
    let biggestResult = array[0] * array[1]
    array.forEach((item, index) => {
        if (index === array.length - 1) {
            return (result = item)
        }
        result = item * array[index + 1]
        if(result > biggestResult)
            biggestResult = result
    })
    return biggestResult
}

console.log(adjacentElementsProduct([5, 8]))
console.log(adjacentElementsProduct([1, 2, 3]))
console.log(adjacentElementsProduct([1, 5, 10, 9]))
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]))
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]))
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]))
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]))
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]))
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]))