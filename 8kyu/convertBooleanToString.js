// DESCRIPTION
//Implement a function which convert the given boolean value into its string representation.
//
// Note: Only valid inputs will be given.

// TESTS
//Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');

// SOLUTION
function booleanToString(b){
return b.toString();
}

console.log(booleanToString(true));
console.log(booleanToString(false));