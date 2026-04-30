// DESCRIPTION
// Write a function that returns the total surface area and volume of a box.
//
// The given input will be three positive non-zero integers: width, height, and depth.
//
// The output will be language dependant, so please check sample tests for the corresponding data type,
// (list, tuple, struct, query, etcetera).

// TESTS
//     assert.deepEqual(getSize(4, 2, 6), [88, 48]);
//     assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
//     assert.deepEqual(getSize(4, 2, 6)[0], 88);
//     assert.deepEqual(getSize(4, 2, 6)[1], 48);

// SOLUTION
function getSize(width, height, depth){
    return [2 * (width * height + width * depth + height * depth), width * height * depth]
}

console.log(getSize(4, 2, 6))
console.log(getSize(10, 10, 10))
console.log(getSize(4, 2, 6)[0])
console.log(getSize(4, 2, 6)[1])