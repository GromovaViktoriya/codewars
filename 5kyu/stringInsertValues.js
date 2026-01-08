//DESCRIPTION
// Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where
// the name of a key in the object is surrounded by curly brackets.
//
// Inherited object properties should not be applied
//
// An example says more than a thousand words..
//
// Example using object
//
// var s = 'Hello {foo} - make me a {bar}';
// var o = {
//   foo : 'Jack',
//   bar : 'sandwich'
// };
//
// format(s, o); // "Hello Jack - make me a sandwich"
// Example using array
//
// var s = 'Hello {0} - make me a {1}';
// var a = ['Jack', 'sandwich'];
//
// format(s, a); // "Hello Jack - make me a sandwich"


//TESTS
//   Test.assertEquals(
//   format('Hello {foo} - make me a {bar}', obj),
//   "Hello Jack - make me a sandwich"
// );
//
// Test.assertEquals(
//   format('Hello {foo} - {foobar} make me a {bar}', obj),
//   "Hello Jack - {foobar} make me a sandwich"
// );
//
// Test.assertEquals(
//   format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj),
//   "Hello Jack - {foobar} make me a sandwich... Jack!!?"
// );
//
// Test.assertEquals(
//   format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', { bar : 'sandwich {foo}', foo : 'Jack' }),
//   "Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?"
// );
//
// Test.assertEquals(
//   format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0]),
//   "Hello Jack - {foobar} make me 0 sandwiches - I\'m full.."
// );


// SOLUTION
let format = function (str, obj) {
    return str.replace(/\{(\w+)\}/g, (match, key) => {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return obj[key];
        }
        return match;
    })
}

console.log(format('Hello {foo} - make me a {bar}', { foo: 'Jack', bar: 'sandwich' }))
console.log(format('Hello {foo} - {foobar} make me a {bar}', { foo: 'Jack', bar: 'sandwich', foobar: 'foo' }))
console.log(format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', { bar: 'sandwich {foo}', foo: 'Jack' }))
console.log(format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0]))
console.log(format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 'foo']))
console.log(format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0, 'foo']))