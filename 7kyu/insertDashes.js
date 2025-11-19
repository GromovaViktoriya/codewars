// DESCRIPTION
//Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.
//
// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"


// TESTS
//    assert.strictEqual(insertDash(454793),'4547-9-3');
//     assert.strictEqual(insertDash(123456),'123456');
//     assert.strictEqual(insertDash(1003567),'1003-567');


// SOLUTION
function insertDash(num) {
    let str = num.toString()
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += str[i]
        if (str[i] % 2 !== 0 && str[i + 1] && str[i + 1] % 2 !== 0) {
            result += ('-')
        }
    }
    return result
}

console.log(insertDash(454793))
console.log(insertDash(123456))
console.log(insertDash(1003567))
