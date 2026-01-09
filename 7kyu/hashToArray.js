// DESCRIPTION
//Convert a hash into an array. Nothing more, Nothing less.
//
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
//
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Good Luck!


// TESTS
//     assert.sameDeepMembers(convertHashToArray({name: "Jeremy"}),[["name", "Jeremy"]]);
//     assert.sameDeepMembers(convertHashToArray({name: "Jeremy", age: 24}),[["age", 24], ["name", "Jeremy"]]);
//     assert.sameDeepMembers(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
//     assert.sameDeepMembers(convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),[["powerLevelOver", 9000], ["product", "CodeWars"]]);
//     assert.sameDeepMembers(convertHashToArray({}),[]);


// SOLUTION
function convertHashToArray(hash) {
    let result = []
    if (Object.keys(hash).length === 0) return result
    for (let key in hash) {
        result.push([key, hash[key]])
    }
    return result
}

console.log( convertHashToArray({name: "Jeremy"}))
console.log( convertHashToArray({name: "Jeremy", age: 24}))
console.log( convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}))
console.log( convertHashToArray({product: "CodeWars", powerLevelOver: 9000}))
console.log( convertHashToArray({}))