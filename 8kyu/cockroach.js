// DESCRIPTION
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in
//cm per second, rounded down to the integer (= floored).
//
// For example:
//
// 1.08 --> 30


// TESTS
//     assert.strictEqual(cockroachSpeed(1.08), 30);
//     assert.strictEqual(cockroachSpeed(1.09), 30);
//     assert.strictEqual(cockroachSpeed(0), 0);


// SOLUTION
function cockroachSpeed(s) {
    return Math.floor(s * (100000/3600))
}

console.log(cockroachSpeed(1.08))
console.log(cockroachSpeed(1.09))
console.log(cockroachSpeed(0))