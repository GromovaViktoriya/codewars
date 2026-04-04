// DESCRIPTION
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it
// should return "Error".

// TESTS
//     assert.strictEqual(problem("hello"), "Error");
//     assert.strictEqual(problem(1), 56);
//     assert.strictEqual(problem(5), 256);
//     assert.strictEqual(problem(0), 6);
//     assert.strictEqual(problem(1.2), 66);
//     assert.strictEqual(problem(3), 156);
//     assert.strictEqual(problem("RyanIsCool"), "Error");
//     assert.strictEqual(problem(-3), -144);
//     assert.strictEqual(problem(""), "Error");
//     assert.strictEqual(problem(0.03), 7.5);

// SOLUTION
function problem(x){
    return typeof x !== 'number'? "Error" : x * 50 + 6;
}

console.log(problem(1))
console.log(problem(5))
console.log(problem(0))
console.log(problem(1.2))
console.log(problem(3))
console.log(problem("RyanIsCool"))
console.log(problem(-3))
console.log(problem(""))
console.log(problem(0.03))