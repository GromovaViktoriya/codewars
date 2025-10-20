// DESCRIPTION
// Write a program that outputs the top n elements from a list.
//
// Example:
//
// k = 2; list = [7, 6, 5, 4, 3, 2, 1]
// ==> [6, 7]


// TESTS
//      doTest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 10]);
// 		doTest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []);
// 		doTest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5], [-1, 0]);
// 		doTest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5], [5, 5, 5]);
// 		doTest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5], [3, 5, 9, 13, 22, 50, 63]);
// 		doTest(0, [1, 2, 3, 4, 8, 7, 6, 5], []);


// SOLUTION
function largest(n, array) {
    return array.sort((a, b) => b - a).slice(0, n).reverse()
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]))
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]))
console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]))
console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5]))