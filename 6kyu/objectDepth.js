// DESCRIPTION
// Write a JavaScript function that returns the depth of an object. This function takes one argument that can be any
// data-type.
//
// The depth of an object, say obj, is how many nested objects obj contains.
// Assume an empty object has a depth of 0, while an object non-empty but without nested objects has a depth of 1.
//
// For example :
// var obj = {a: 1, b: {c: 2}};
// has a depth of 2 because it is a non-empty object containing another non-empty object.
//
// While :
// var emptyObj = {};
// has a depth of 0 because it is empty.
//
// And :
// var obj = {a: 1, b: 2, c: 3};
// has a depth of 1.
//
// Arrays should always return a depth of 0.
// Be careful about null.

// TESTS
//     Test.assertEquals(depth({}), 0, 'An empty object has no depth');
//     Test.assertEquals(depth({a: 1}), 1, 'Depth of {a: 1} should be 1');
//     Test.assertEquals(depth({a: 1, b: {c: 2}}), 2, 'Depth of {a: 1, b: {c: 2}} should be 2');
//     Test.assertEquals(depth(null), 0, 'Depth of null should be 0');
//     Test.assertEquals(depth(['a', 'b', 'c']), 0, 'The depth of any array should be 0');
//     Test.assertEquals(depth(['a', ['b', 'c']]), 0, "Depth of ['a', ['b', 'c']] should be 0");


//SOLUTION
function depth(obj) {
    if (obj === null || Array.isArray(obj) || typeof obj !== 'object') {
        return 0
    }
    if (typeof obj === 'object') {
        if (Object.keys(obj).length === 0) {
            return 0
        } else {
            const depthArray = Object.values(obj).map((value) => depth(value))
            return 1 + Math.max(...depthArray)
        }
    }
}

console.log(depth({a: 1, b: 2, c: 3}))
console.log(depth({}))
console.log(depth({a: 1, b: {c: 2}}))
console.log(depth(null))
console.log(depth([1, 2, 3, 4, 5]))
console.log(depth(5))
console.log(depth({a: {x: 1}, b: {y: 2}}))