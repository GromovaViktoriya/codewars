// DESCRIPTION
// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order!
// Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.
//
// The sorting should NOT be case sensitive


// TESTS
//   it("Basic", () => {
//     assert.deepEqual(sorter(['Algebra', 'History', 'Geometry', 'English']),
//                             ['Algebra', 'English', 'Geometry', 'History']);
//   });
//   it("Capitalization", () => {
//     assert.deepEqual(sorter(['Algebra', 'history', 'Geometry', 'english']),
//                             ['Algebra', 'english', 'Geometry', 'history']);
//   });
//   it("Symbols", () => {
//     assert.deepEqual(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']),
//                             ['$istory', '**english', 'Alg#bra', 'Geom^try']);


// SOLUTION
function sorter(textbooks) {
    return textbooks.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        return 0;
    })
}
console.log(sorter(['Algebra', 'History', 'Geometry', 'English']));
console.log(sorter(['Algebra', 'history', 'Geometry', 'english']))
console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']))