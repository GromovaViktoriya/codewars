// DESCRIPTION
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// TESTS
//         assert.deepEqual(createArray(1),[1]);
//         assert.deepEqual(createArray(2),[1,2]);
//         assert.deepEqual(createArray(3),[1,2,3]);
//         assert.deepEqual(createArray(4),[1,2,3,4]);
//         assert.deepEqual(createArray(5),[1,2,3,4,5]);

// SOLUTION
function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}

console.log(createArray(1))
console.log(createArray(2))
console.log(createArray(3))
console.log(createArray(4))
console.log(createArray(5))