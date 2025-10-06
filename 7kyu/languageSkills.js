// DESCRIPTION
// Task
// You are given a dictionary-like object (implementation may vary by language) containing languages as
// keys and your corresponding test results as values. Return the list of languages where your score is at least 60,
// in descending order of the scores.
//
// Note: the scores will always be unique (so no duplicate values)
//
// Examples
// Input object with key-value pairs:
// "Java" -> 10, "Ruby" -> 80, "Python" -> 65
// Ouput:
// [ "Ruby", "Python" ]
//
// Input object with key-value pairs:
// "Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
// Output:
// [ "Dutch", "Greek", "Hindi" ]
//
// Input object with key-value pairs:
// "C++" -> 50, "ASM" -> 10, "Haskell" -> 20
// Output:
// [ ]


// TESTS
//     Test.assertDeepEquals(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
//     Test.assertDeepEquals(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
//     Test.assertDeepEquals(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])


// SOLUTION
function myLanguages(results) {
    let newArr = []
    for (let key in results) {
        if (results[key] >= 60) {
            newArr.push(key)
        }
    }
    return newArr.sort((a, b) => results[b] - results[a])

    // return Object.keys(results).filter(result => results[result] >= 60).sort((a,b) => results[b] - results[a]);
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}))
console.log(myLanguages({"Hindi": 60, "Greek": 71, "Dutch": 93}))
console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}))