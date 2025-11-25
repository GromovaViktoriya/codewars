// DESCRIPTION
//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice
// versa). Leave any incidence of c untouched.
//
// Example:
//
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


// TESTS
//     assert.strictEqual(switcheroo('abc'), 'bac');
//     assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
//     assert.strictEqual(switcheroo('ccccc'), 'ccccc');


// SOLUTION
function switcheroo(x) {
    return x.replaceAll('a', 'd').replaceAll('b', 'a').replaceAll('d', 'b')
}

console.log(switcheroo('abc'))
console.log(switcheroo('aaabcccbaaa'))
console.log(switcheroo('ccccc'))