// DESCRIPTION
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
//
// the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
// with size 4 should return : '1010'.
//
// with size 12 should return : '101010101010'.
//
// The size will always be positive and will only use whole numbers.

// TESTS
//     Test.assertEquals(typeof stringy(3), 'string',
//     'Make sure it\'s a string not a number (the function is called stringy after all!)');
//     it('Should start with a 1', function() {
//     Test.assertEquals(stringy(3)[0], '1',
//     'Whoops your string doesnt start with a 1?');

// SOLUTION
function stringy(size) {
    let str = '';
    for (let i = 0; i < size; i++) {
        str += i % 2 === 0 ? '1' : '0';
    }
    return str;
}

console.log(stringy(3))
console.log(stringy(4))
console.log(stringy(12))