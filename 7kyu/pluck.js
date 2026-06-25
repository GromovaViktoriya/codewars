// DESCRIPTION
// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the
// named property of each object.
//
// For example:
//
// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
// If an object is missing the property, you should just leave it as undefined/None in the output array.

// TESTS
// Test.assertSimilar(pluck([{a:1}, {a:2}], 'a'), [1,2])

// SOLUTION
function pluck(objs, name) {
    // let result = []
    // objs.forEach(obj => {
    //     result.push(obj[name])
    // })
    // return result
    return objs.map(obj => obj[name]);
}

console.log(pluck([{a:1}, {a:2}], 'a'))
console.log(pluck([{a:1, b:3}, {a:2}], 'b'))
console.log(pluck([{a:1}, {a:2}], 'a'))