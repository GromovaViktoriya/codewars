// DESCRIPTION
// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

//    For example,
//   [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

// TESTS
//[[undefined], 0],
//[[null], 0],
//[[false], 0],
//[[true], 1],
//[[undefined,null,false,true], 1],
//[[undefined,null,false,true,true,false,null,undefined], 2],
//[[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,
// true,true,false,false,true,true], 17],
//];


// SOLUTION
function countSheeps(sheep) {
    let count = 0;
    sheep.forEach(function (i) {
        i === true ? count++ : count;
    })
    return count;
}

console.log(countSheeps([undefined]))
console.log(countSheeps([null]))
console.log(countSheeps([false]))
console.log(countSheeps([true]))
console.log(countSheeps([undefined, null, false, true]))
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]))
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false,
    false, true, true, true, true, true, false, false, true, true]))

