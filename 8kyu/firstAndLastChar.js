// DESCRIPTION
//You are given a string containing a sequence of character sequences separated by commas.
//
// Write a function which returns a new string containing the same character sequences except the first and the last
// ones but this time separated by spaces.
//
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
// return an empty value (represented as a generic value NULL in the examples below).


// TESTS
//  test('', null);
//   test('1', null);
//   test('A1,B2', null);
//   test('1,2,3', '2');
//   test('1,2,3,4', '2 3');
//   test('A1,B2,C3,D4,E5', 'B2 C3 D4');
//   test('A,1,23,456,78,9,Z', '1 23 456 78 9');


// SOLUTION
function array(string) {
    let arr = string.split(',')
    if (string !== '' && arr.length > 2) {
        let newArr = arr.filter(el => el !== arr[0] && el !== arr[arr.length - 1])
        return newArr.join(' ')
    } else return null
}

console.log(array(''))
console.log(array('1'))
console.log(array('A1,B2'))
console.log(array('1,2,3'))
console.log(array('1,2,3,4'))
console.log(array('A1,B2,C3,D4,E5'))
console.log(array('A,1,23,456,78,9,Z'))