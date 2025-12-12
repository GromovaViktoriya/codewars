// DESCRIPTION
//Write a function that returns a sequence (index begins with 1) of all the even characters from a string.
// If the string is smaller than two characters or longer than 100 characters, the function should return
// "invalid string".
//
// For example:
//
// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"


// TESTS
//     doTest("1234", ["2", "4"]);
//     doTest(";;;--", [";", "-"]);
//     doTest("abcdefghijklm", ["b", "d", "f", "h", "j", "l"]);
//     doTest("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva", "invalid string");
//     doTest("a", "invalid string");
//     doTest("", "invalid string");


// SOLUTION
function evenChars(string) {
    return string.length >= 2 && string.length <= 100 ? string.split('').filter((str, index) => index % 2) : "invalid string"
}

console.log(evenChars("1234"))
console.log(evenChars(";;;--"))
console.log(evenChars("abcdefghijklm"))
console.log(evenChars("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"))
console.log(evenChars("a"))
console.log(evenChars(""))