// DESCRIPTION
//Write a function that checks if a given string (case insensitive) is a palindrome.
//
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards,
// such as madam or racecar.


//TESTS
//   it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//   it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//   it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//   it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//   it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//   it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//   it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//   it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));


// SOLUTION
function isPalindrome(x) {
  return x.toLowerCase() === x.split('').reverse().join('').toLowerCase();
}

console.log(isPalindrome("a"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("Abba"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("Bob"))
console.log(isPalindrome("Madam"))
console.log(isPalindrome("AbBa"))
console.log(isPalindrome(""))