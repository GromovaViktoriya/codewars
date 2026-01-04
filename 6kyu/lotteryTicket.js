//DESCRIPTION
//Time to win the lottery!
//
// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the
// jackpot.
//
// Example ticket:
//
// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within
// it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can
// only have one mini win per sub array.
//
// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is
// more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
//
// All inputs will be in the correct format. Strings on tickets are not always the same length.


//TESTS
//     assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
//     assert.strictEqual(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
//     assert.strictEqual(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');


// SOLUTION
function bingo(ticket, win) {
    let winCount = 0
    ticket.forEach(([string, number]) => {
        const miniWin = string.split('').some(char => char.charCodeAt(0) === number)
        if (miniWin) winCount++
    })
    if (winCount >= win) return 'Winner!'
    else return 'Loser!'
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1))
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3))
console.log(bingo([['OJWZ', 84], ['TLTTWWXP', 87]], 2)) //loser