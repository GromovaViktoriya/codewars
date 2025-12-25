// DESCRIPTION
//You are working at a lower league football stadium and you've been tasked with automating the scoreboard.
//
// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's
// voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!
//
// e.g. "The score is four nil" should return [4,0]
//
// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.
//
// "new score: two three"
//
// "two two"
//
// "Arsenal just conceded another goal, two nil"


// TESTS
//     assert.deepEqual(scoreboard("The score is four nil"), [4,0], "Should return: [4,0]");
//     assert.deepEqual(scoreboard("new score: two three"), [2,3], "Should return: [2,3]");
//     assert.deepEqual(scoreboard("two two"), [2,2], "Should return: [2,2]");
//     assert.deepEqual(scoreboard("Arsenal just conceded another goal, two nil"), [2,0], "Should return: [2,0]");


// SOLUTION
function scoreboard(string) {
    let strArray = string.split(" ")
    let result = []
    for (let i = 0; i < strArray.length; i++) {
        switch (strArray[i]) {
            case "nil":
                result.push(0)
                break;
            case "one":
                result.push(1)
                break;
            case "two":
                result.push(2)
                break;
            case "three":
                result.push(3)
                break;
            case "four":
                result.push(4)
                break;
            case "five":
                result.push(5)
                break;
            case "six":
                result.push(6)
                break;
            case "seven":
                result.push(7)
                break;
            case "eight":
                result.push(8)
                break;
            case "nine":
                result.push(9)
                break;
        }
    }
    return result
}

console.log(scoreboard("The score is four nil"))
console.log(scoreboard("new score: two three"))
console.log(scoreboard("two two"))
console.log(scoreboard("Arsenal just conceded another goal, two nil"))