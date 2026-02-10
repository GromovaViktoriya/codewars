// DESCRIPTION
//Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the
// operator to the values in the array.
//
// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).


// TESTS
//     assert.strictEqual(logicalCalc([true, true, true, false], "AND"), false);
//     assert.strictEqual(logicalCalc([true, true, true, false], "OR"), true);
//     assert.strictEqual(logicalCalc([true, true, true, false], "XOR"), true);
//     assert.strictEqual(logicalCalc([true, true, false, false], "AND"), false);
//     assert.strictEqual(logicalCalc([true, true, false, false], "OR"), true);
//     assert.strictEqual(logicalCalc([true, true, false, false], "XOR"), false);
//     assert.strictEqual(logicalCalc([true, false, false, false], "AND"), false);
//     assert.strictEqual(logicalCalc([true, false, false, false], "OR"), true);
//     assert.strictEqual(logicalCalc([true, false, false, false], "XOR"), true);
//     assert.strictEqual(logicalCalc([true, true], "AND"), true);
//     assert.strictEqual(logicalCalc([true, true], "OR"), true);
//     assert.strictEqual(logicalCalc([true, true], "XOR"), false);
//     assert.strictEqual(logicalCalc([false, false], "AND"), false);
//     assert.strictEqual(logicalCalc([false, false], "OR"), false);
//     assert.strictEqual(logicalCalc([false, false], "XOR"), false);
//     assert.strictEqual(logicalCalc([false], "AND"), false);
//     assert.strictEqual(logicalCalc([false], "OR"), false);
//     assert.strictEqual(logicalCalc([false], "XOR"), false);
//     assert.strictEqual(logicalCalc([true], "AND"), true);
//     assert.strictEqual(logicalCalc([true], "OR"), true);
//     assert.strictEqual(logicalCalc([true], "XOR"), true);


// SOLUTION
function logicalCalc(array, op) {
    return array.reduce((acc, cur) => {
        if (op === 'AND') return acc && cur;
        if (op === 'OR') return acc || cur;
        if (op === 'XOR') return acc !== cur;
    });
}

console.log(logicalCalc([true, true, true, false], "AND"))
console.log(logicalCalc([true, true, true, false], "OR"))
console.log(logicalCalc([true, true, true, false], "XOR"))
console.log(logicalCalc([true, true, false, false], "AND"))
console.log(logicalCalc([true, true, false, false], "OR"))
console.log(logicalCalc([true, true, false, false], "XOR"))
console.log(logicalCalc([true, false, false, false], "AND"))
console.log(logicalCalc([true, false, false, false], "OR"))
console.log(logicalCalc([true, false, false, false], "XOR"))
console.log(logicalCalc([true, true], "AND"))
console.log(logicalCalc([true, true], "OR"))
console.log(logicalCalc([true, true], "XOR"))
console.log(logicalCalc([false, false], "AND"))