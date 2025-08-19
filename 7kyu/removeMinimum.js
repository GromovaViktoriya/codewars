//DESCRIPTION
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with the lowest index.
// If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//TESTS
//     assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
//     assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
//     assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
//     assert.deepEqual(removeSmallest([]), [], "Wrong result for []");

//SOLUTION
function removeSmallest(numbers) {
    let lowestNum = Math.min(...numbers)
    let lowNumIndex = numbers.indexOf(lowestNum)
    return numbers.filter((num, i) => i !== lowNumIndex)
}

console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))
console.log(removeSmallest([]))