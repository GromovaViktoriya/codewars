// DESCRIPTION
// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of
// flattening.
//
// flatten([1,2,3])  ==> [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  ==> [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]])  ==> [[1,2,3]]


// TESTS
//         doTest([], []);
//         doTest([1, 2, 3], [1, 2, 3]);
//         doTest([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]], [1, 2, 3, "a", "b", "c", 1, 2, 3]);
//         doTest([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]], [3, 4, 5, [9, 9, 9], "a,b,c"]);
//         doTest([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]], [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);


// SOLUTION
function flatten(array) {
 return array.flat()
}

console.log(flatten([]))
console.log(flatten([1, 2, 3]))
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]))
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]))
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]))