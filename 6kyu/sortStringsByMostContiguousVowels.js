// DESCRIPTION
// The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the
// strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of
// contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers,
// special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of
// contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the
// input array.
//
// Example:
// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"
// When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3,
// while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.
//
// If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in
// the order in which they were found in the orginal array.

// TESTS
//     assert.deepEqual(sortStringsByVowels(["aa","eee","oo","iiii"]),["iiii","eee","aa","oo"]);
//     assert.deepEqual(sortStringsByVowels(["a","e","ii","ooo","u"]),["ooo","ii","a","e","u"]);
//     assert.deepEqual(sortStringsByVowels(["ioue","ee","uoiea"]) , ["uoiea", "ioue","ee"]);
//     assert.deepEqual(sortStringsByVowels(["high","day","boot"]) , ["boot","high","day"]);
//     assert.deepEqual(sortStringsByVowels(["none","uuu","Yuuuge!!"]) , ["uuu","Yuuuge!!","none"]);
//     assert.deepEqual(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]) , ["GREEEN","AIBRH","YOUNG",""]);
//     assert.deepEqual(sortStringsByVowels(["jyn","joan","jimmy","joey"]) , ["joan","joey","jimmy","jyn"]);
//     assert.deepEqual(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]) , ["iiutrqy","uijijeoj","lkjlkjww2"]);
//     assert.deepEqual(sortStringsByVowels(["how about now","a beautiful trio of"]) , ["a beautiful trio of","how about now"]);
//     assert.deepEqual(sortStringsByVowels(["every","bataux","is","waaaay","loose"]) , ["waaaay","bataux","loose","every","is"]);

//SOLUTION
function sortStringsByVowels(strings){
    let getLongestVowelCount = (str)=> {
        let matches = str.match(/[aeiou]+/gi);
        if(!matches){
            return 0;
        }
        let lengths = matches.map(word => word.length);
        return Math.max(...lengths);
    }
    return strings.sort((a, b) => getLongestVowelCount(b) - getLongestVowelCount(a));
}

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]))
console.log(sortStringsByVowels(["every","bataux","is","waaaay","loose"]))