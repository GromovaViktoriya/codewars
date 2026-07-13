// DESCRIPTION
//Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
// Like this:
//
// n = 5
//
// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]
// n = 3
//
// [
//   '---',
//   '- -',
//   '---'
// ]


// TESTS
//  const testCases = [
//     [5, ["-----", "-   -", "-   -", "-   -", "-----"]],
//     [2, ["--", "--"]],
//     [4, ["----", "-  -", "-  -", "----"]],
//     [6, ["------", "-    -", "-    -", "-    -", "-    -", "------"]],
//     [3, ["---", "- -", "---"]]
//   ];


// SOLUTION
function box(n) {
    let result = []
    let lid = '-'.repeat(n)
    let emptySpace = ' '.repeat(n-2)
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i === n) {
            result.push(lid)
        } else {
            result.push(`-${emptySpace}-`)
        }
    }
    return result
}

console.log(box(5))
console.log(box(2))
console.log(box(4))
console.log(box(6))
console.log(box(3))