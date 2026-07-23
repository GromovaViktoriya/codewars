// DESCRIPTION
// Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) 44
// [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character
// sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values
// si and si+1 should differ.
//
// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one
// can see in the following example:
//
// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:
//
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]



// TESTS
//     assert.deepEqual(runLengthEncoding(""), []);
//     assert.deepEqual(runLengthEncoding("abc"), [[1,'a'],[1,'b'],[1,'c']]);
//     assert.deepEqual(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);
//     assert.deepEqual(runLengthEncoding("hello world!"),
//       [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
//     assert.deepEqual(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
//       [[34,'a'], [3,'b']]);
//     assert.deepEqual(
//       runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
//       [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
//     );
//   });


// SOLUTION
let runLengthEncoding = function(str){
    if (str.length === 0) {
        return [];
    }
    let result = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        let nextChar = str[i+1]
        if (currentChar === nextChar) {
            count++;
        } else {
            result.push([count, currentChar]);
            count = 1
        }
    }
    return result;
}

console.log(runLengthEncoding(""))
console.log(runLengthEncoding("abc"))
console.log(runLengthEncoding("hello world!"))