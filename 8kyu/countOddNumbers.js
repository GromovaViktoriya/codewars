// DESCRIPTION
// Given a number n, return the number of positive odd numbers below n, EASY!
//
// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

//TESTS
//     assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
//     assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");

// SOLUTION
function oddCount(n){
    return Math.floor(n / 2);
    // let arr = []
    // for(let i = 1; i < n; i++){
    //     if(i % 2 !== 0) arr.push(i)
    // }
    // return arr.length;
}

console.log(oddCount(7))
console.log(oddCount(15))