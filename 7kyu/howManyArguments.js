// DESCRIPTION
//Write a function that returns the number of arguments it received.
//
// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2


// TESTS
//     assert.strictEqual(args_count(1, 2), 2);
//     assert.strictEqual(args_count(), 0);
//     assert.strictEqual(args_count('A', 'B', 'C'), 3);
//     assert.strictEqual(args_count(["foo", "bar"]), 1);



// SOLUTION
args_count = function (...args){
return args.length
}

console.log( args_count(1, 2) )
console.log( args_count() )
console.log( args_count('A', 'B', 'C') )
console.log( args_count(["foo", "bar"]) )