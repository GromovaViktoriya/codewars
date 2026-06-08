// DESCRIPTION
// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the
// language you use). If the string contains an odd number of characters then it should replace the missing second
// character of the final pair with an underscore ('_').
//
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// TESTS
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);


// SOLUTION
function solution(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
    result.push(str.slice(i, i + 2));
    }
    if (str.length % 2 !== 0) {
        result[result.length - 1] += "_"
    }
    return result;

    //return (str + "_").match(/.{2}/g) || [];
}

console.log(solution("abcdef"))
console.log(solution("abcdefg"))
console.log(solution(""))