//DESCRIPTION
//Very simple, given a number (integer / decimal / both depending on the language),
// find its opposite (additive inverse).


// Examples:
// 1: -1
// 14: -14
// -34: 34


//TESTS
//assert.strictEqual(opposite(1), -1);
//assert.strictEqual(opposite(0), 0);
//assert.strictEqual(opposite(4.25), -4.25);
//assert.strictEqual(opposite(3.3333333), -3.3333333);
//assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
//assert.strictEqual(opposite(-5), 5);


//SOLUTION
function opposite(number) {
    if (number < 0 || number > 0) {
        return number * -1;
    } else if (number === 0) {
        return 0;
        }
}


console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(3.3333333));
console.log(opposite(-12525220.3325));
console.log(opposite(-5));