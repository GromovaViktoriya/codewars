// DESCRIPTION
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a
// string and you must return an array of strings where an uppercase letter is a person standing up.
//
// Rules
// 1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must
// return an empty array. 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
//
// Examples
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]


// TESTS
//       let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
//       assert.deepEqual(wave("hello"), result, "Should return: '"+result+"'");
//
//       result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
//       assert.deepEqual(wave("codewars"), result, "Should return: '"+result+"'");
//
//       result = [];
//       assert.deepEqual(wave(""), result, "Should return: '"+result+"'");
//
//       result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
//       assert.deepEqual(wave("two words"), result, "Should return: '"+result+"'");
//
//       result = [" Gap ", " gAp ", " gaP "];
//       assert.deepEqual(wave(" gap "), result, "Should return: '"+result+"'");


// SOLUTION
function wave(str) {
    let arr = []
     str.split('').forEach((char, index) => {
        if (char !== ' ') {
            let start = str.slice(0, index)
            let end = str.slice(index+1)
            let strEl = start + char.toUpperCase() + end
            arr.push(strEl)
        }
    })
    return arr
}

console.log(wave('hello'))
console.log(wave('codewars'))
console.log(wave(''))
console.log(wave('two words'))
console.log(wave(' gap '))