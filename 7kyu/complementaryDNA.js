// DESCRIPTION
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the
// development and functioning of living organisms.
//
// If you want to know more: http://en.wikipedia.org/wiki/DNA
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side
// of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty
// or there is no DNA at all (again, except for Haskell).
//
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//
// Example: (input --> output)
//
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


// TESTS
//     assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")


// SOLUTION
function dnaStrand(dna) {
    // let result = '';
    // for (let i = 0; i < dna.length; i++) {
    //     switch (dna[i]) {
    //         case "A":  result += 'T'; break;
    //         case "C": result += 'T'; break;
    //         case "T":result += 'A'; break;
    //         case "G": result += 'C'; break;
    //     }
    // }
    // return result;
    const pairs = { "A": "T", "T": "A", "C": "G", "G": "C" };
    return dna.split('').map(char => pairs[char]).join('');
}

console.log(dnaStrand("AAAA"))
console.log(dnaStrand("ATTGC"))
console.log(dnaStrand("GTAT"))