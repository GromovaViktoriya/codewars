//DESCRIPTION
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that
// determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.
// Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//TESTS
//     tester("Dermatoglyphics", true );
//     tester("isogram", true );
//     tester("aba", false);
//     tester("moOse", false);
//     tester("isIsogram", false );
//     tester("", true);

//SOLUTION
function isIsogram(str) {
    let strArr = str.toLowerCase().split('');
    for (let i = 0; i < strArr.length; i++) {
        for (let j = i + 1; j < strArr.length; j++) {
            if (strArr[i] === strArr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(""))