// DESCRIPTION
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two
// different items in the array that, when added together, give the target value. The indexes of these items should then
// be returned in a tuple / list (depending on your language) like so: (index1, index2).
//
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be
// positive or negative integers; target will always be the sum of two different items from that array).


// TESTS
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

// SOLUTION
function twoSum(numbers, target) {
    let seenNumbers = {}
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i]
        let neededNum = target - currentNum
        if (neededNum in seenNumbers) {
            return [seenNumbers[neededNum], i]
        } else {
            seenNumbers[currentNum] = i
        }
    }
}

console.log(twoSum([1, 2, 3],4))
console.log(twoSum([3, 2, 4], 6))