//'a' (97), 'e' (101), 'i' (105), 'o' (111), 'u' (117

// DESCRIPTION
//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//
// If they are, change the array value to a string of that vowel.
//
// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

// TESTS
//       doTest([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106], [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
//     doTest([101,121,110,113,113,103,121,121,101,107,103], ["e",121,110,113,113,103,121,121,"e",107,103]);

// SOLUTION
function isVow(a) {
    return a.map(num => {
        switch (num){
            case 97: return "a";
            case 101: return "e";
            case 105: return "i";
            case 111: return "o";
            case 117: return "u";
            default: return num;
        }
    })
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))