// DESCRIPTION
//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
// Index 0 will be considered even.
//
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
// The input will be a lowercase string with no spaces.


// TESTS
// it("should capitalize 'abcdef' correctly", function() {
//     assert.deepEqual(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
//   });
//
//   it("should capitalize 'codewars' correctly", function() {
//     assert.deepEqual(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
//   });
//
//   it("should capitalize 'abracadabra' correctly", function() {
//     assert.deepEqual(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
//   });
//
//   it("should capitalize 'codewarriors' correctly", function() {
//     assert.deepEqual(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//   });


// SOLUTION
function capitalize(s) {
    let evenArr = []
    let oddArr = []
    for (let i = 0; i < s.length; i++) {
        evenArr.push(i % 2 === 0 ? s[i].toUpperCase() : s[i])
        oddArr.push(i % 2 !== 0 ? s[i].toUpperCase() : s[i])
    }
    return [evenArr.join(''), oddArr.join('')]
}

console.log(capitalize("abcdef"))
console.log(capitalize("codewars"))
console.log(capitalize("abracadabra"))
console.log(capitalize("codewarriors"))