// DESCRIPTION
// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error,
// solve it and keep it as simple as possible!


// TESTS
// describe("Push an object into array", function(){
//   it ("should have a value", function(){
//     assert.isNotEmpty(items, 'The array is still empty')
//   });
//   it ("should have only one value", function(){
//     assert.lengthOf(items, 1, 'The array contains too many values')
//   });
//   it ("should have the correct value", function(){
//     assert.deepEqual(items, [{a: "b", c: "d"}], 'The array does not contain the correct value"')
//   });


// SOLUTION
items = []
items.push({a: "b", c: "d"})

console.log(items)