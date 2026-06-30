// DESCRIPTION
// A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct
// integers, write a method to find a magic index, if one exists, in array A.
//
// findMagic([-20,-10,2,10,20]); // Returns 2


let results1 = [-20, -10, 2, 10, 20]
let results2 = [6, 5, 83, 5, 3, 18]


// TESTS
//   Test.assertEquals(results1, 2);
//   Test.assertEquals(results2, -1);


// SOLUTION
function findMagic(arr) {
return arr.findIndex((item, index) => item === index)
}


console.log(findMagic(results1))
console.log(findMagic(results2))