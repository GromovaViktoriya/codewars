//DESCRIPTION


//TESTS
//     doTest("most trees are blue", "Most Trees Are Blue");
//     doTest("How can mirrors be real if our eyes aren't real", "How Can Mirrors Be Real If Our Eyes Aren't Real");

//SOLUTION
/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    {
        value:
            function toJadenCase() {
                let arr = this.split(' ');
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
                }
                return arr.join(' ');
            }
    }
);

console.log("most trees are blue".toJadenCase())
console.log("How can mirrors be real if our eyes aren't real".toJadenCase())