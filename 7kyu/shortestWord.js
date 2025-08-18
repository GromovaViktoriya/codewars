//DESCRIPTION
//Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

//TESTS
//  assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
//     assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

//SOLUTION
function findShort(s) {
    let newArr = s.split(' ');
    let shortestString = newArr[0];
    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i].length < shortestString.length) {
          shortestString = newArr[i];
      }
    }
    return shortestString.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort("turns out random test cases are easier than writing out basic ones"))
console.log(findShort("Let's travel abroad shall we"))