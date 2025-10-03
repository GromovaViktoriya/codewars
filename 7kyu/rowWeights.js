// DESCRIPTION
//Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes
// into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers
// (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total
// weight of team 2. Note that the array will never be empty.
//
// Examples
// [13, 27, 49] returns [62, 27] or (62, 27) (depending on your language) because the total weight of team 1 is

// 13+49=62 and the total weight of team 2 is 27


// TESTS
//     assert.deepEqual(rowWeights([80]), [80,0]);
//     assert.deepEqual(rowWeights([100,50]), [100,50]);
//     assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
//     assert.deepEqual(rowWeights([13,27,49]), [62,27]);
//     assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
//     assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
//     assert.deepEqual(rowWeights([100,51,50,100]), [150,151]);
//     assert.deepEqual(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);


// SOLUTION
function rowWeights(array) {
    let sum1 = 0
    let sum2 = 0
    array.forEach((item, index) => {
        if ((index + 1) % 2 === 0)
            sum2 += item
        if (index === 0 || (index + 1) % 2 === 1)
            sum1 += item
    })
        return [sum1, sum2]
}


console.log(rowWeights([80]))
console.log(rowWeights([100, 50]))
console.log(rowWeights([50, 60, 70, 80]))
console.log(rowWeights([13, 27, 49]))
console.log(rowWeights([70, 58, 75, 34, 91]))
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]))
console.log(rowWeights([100, 51, 50, 100]))
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]))