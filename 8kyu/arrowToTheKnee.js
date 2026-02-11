// DESCRIPTION
//Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS).
// It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
//
// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// TESTS
//     tester([84,101,115,116], 'Test');
//     tester([70,85,83,32,82,79,72,32,68,65,72], 'FUS ROH DAH');


// SOLUTION
const arrowFunc = function(arr) {
    return arr.map(num => String.fromCharCode(num)).join('');
}

console.log(arrowFunc([84,101,115,116]));
console.log(arrowFunc([70,85,83,32,82,79,72,32,68,65,72]))