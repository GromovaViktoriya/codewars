// DESCRIPTION
// You are to write a function that takes a string as its first parameter. This string will be a string of words.
//
// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the
// given string. The first word would be represented by 0.
//
// Once you have the located string you are finally going to multiply by it the third provided parameter, which will
// also be an integer. You are additionally required to add a hyphen in between each word.
//
// Example
//
// modifyMultiply ("This is a string", 3, 5)


// TESTS
//     assert.strictEqual(modifyMultiply("This is a string", 3, 5), "string-string-string-string-string", "The string is incorrect");
//     assert.strictEqual(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.", 8, 10), "that-that-that-that-that-that-that-that-that-that");
//     assert.strictEqual(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence", 1, 1), "means");
//     assert.strictEqual(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.", 6, 8), "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance");
//     assert.strictEqual(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.", 2, 5), "around-around-around-around-around");


// SOLUTION
function modifyMultiply(str, loc, num) {
    let arr = []
    while (num > 0){
        arr.push(str.split(" ")[loc])
        if (num > 1) arr.push("-")
        num--
    }
    return arr.join("")
}

console.log( modifyMultiply("This is a string", 3, 5))
console.log(modifyMultiply("Creativity is the process of having original ideas that have value. It is a process; it's not random.", 8, 10))
console.log(modifyMultiply("Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence", 1, 1))
console.log(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.", 6, 8))
console.log(modifyMultiply("Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.", 2, 5))