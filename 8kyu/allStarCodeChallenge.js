// DESCRIPTION
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences
// the 2nd argument is found in the first one.
//
// If no occurrences can be found, a count of 0 should be returned.
//
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1


//TESTS
//     assert.strictEqual(strCount('Hello', 'o'), 1);
//     assert.strictEqual(strCount('Hello', 'l'), 2);
//     assert.strictEqual(strCount('',      'z'), 0);


// SOLUTION
function strCount(str, letter){
  // let count = 0;
  // for(let i = 0; i < str.length; i++){
  //   if(str[i] === letter) count++;
  // }
  // return count;

   return str.split('').filter(c => c === letter).length;
}

console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))
console.log(strCount('', 'z'))