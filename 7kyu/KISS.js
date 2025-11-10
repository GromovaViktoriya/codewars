// DESCRIPTION
// KISS stands for Keep It Simple Stupid. It is a design principle for keeping things simple rather than complex.
//
// You are the boss of Joe.
//
// Joe is submitting words to you to publish to a blog. He likes to complicate things.
//
// Define a function that determines if Joe's work is simple or complex.
//
// Input will be non emtpy strings with no punctuation.
//
// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)
//
// Otherwise it is complex.
//
// If complex:
//
// return "Keep It Simple Stupid"
// or if it was kept simple:
//
// return "Good work Joe!"
// Note: Random test are random and nonsensical. Here is a silly example of a random test:
//
// "jump always mostly is touchy dancing choice is pineapples mostly"

// TESTS
//   Test.assertEquals(isKiss('Joe had a bad day'), "Good work Joe!")
//   Test.assertEquals(isKiss('Joe had some bad days'), "Good work Joe!")
//   Test.assertEquals(isKiss('Joe is having no fun'), "Keep It Simple Stupid")
//   Test.assertEquals(isKiss('Sometimes joe cries for hours'), "Keep It Simple Stupid")

// SOLUTION
function isKiss(words) {
    let wordCount = words.split(' ').length
    let wordArray = words.split(' ')
    let message = "Good work Joe!"
    wordArray.forEach(word => {
        if (word.length > wordCount) {
            message = "Keep It Simple Stupid"
        }
    })
    return message
}

console.log(isKiss('Joe had a bad day'))
console.log(isKiss('Joe had some bad days'))
console.log(isKiss('Joe is having no fun'))
console.log(isKiss('Sometimes joe cries for hours'))