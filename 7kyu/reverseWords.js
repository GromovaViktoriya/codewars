// DESCRIPTION
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"




// TESTS
//     assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
//     assert.strictEqual(reverseWords('apple'), 'elppa', `Input: "apple"`);
//     assert.strictEqual(reverseWords('a b c d'), 'a b c d', `Input: "a b c d"`);
//     assert.strictEqual(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);


// SOLUTION
function reverseWords(str) {
   newArr = str.split(' ');
   let result = []
   for (let i = 0; i < newArr.length; i++) {
       newArr[i] = newArr[i].split('').reverse().join('');
       result.push(newArr[i])
   }
   return result.join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('apple'))
console.log(reverseWords('a b c d'))
console.log(reverseWords('  double  spaced  words  '))