// DESCRIPTION
//If you can't sleep, just count sheeps!!
//
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.


// TESTS
//     assert.strictEqual(countSheep(0), "");
//     assert.strictEqual(countSheep(1), "1 sheep...");
//     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");


// SOLUTION
let countSheep = function (num) {
    let result = '';
    while (num > 0) {
        result += `${num} sheep...`;
        num--
    }
    let str = result.split('...').reverse().join('...').replace('...', '')
    if (str) {
        return str + '...'
    }
    return ''
}

console.log(countSheep(3))
console.log(countSheep(2))
console.log(countSheep(1))
console.log(countSheep(0))