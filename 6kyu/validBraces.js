// Output:
//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return
// true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
//
// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.
//
// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// TESTS
//     doTest("()", true);
//     doTest("[]", true);
//     doTest("{}", true);
//     doTest("(){}[]", true);
//     doTest("([{}])", true);
//     doTest("(}", false);
//     doTest("[(])", false);
//     doTest("({})[({})]", true);
//     doTest("(})", false);
//     doTest("(({{[[]]}}))", true);
//     doTest("{}({})[]", true);
//     doTest(")(}{][", false);
//     doTest("())({}}{()][][", false);
//     doTest("(((({{", false);
//     doTest("}}]]))}])", false);

// SOLUTION
function validBraces(braces){
    while (braces.includes('()') || braces.includes('[]') || braces.includes('{}')) {
        braces = braces.replaceAll(/\(\)|\[]|\{}/g, '')
    }
    return braces.length === 0;
}

console.log(validBraces('()'))
console.log(validBraces('[]'))
console.log(validBraces('{}'))
console.log(validBraces('(){}[]'))
console.log(validBraces('([{}])'))
console.log(validBraces('(}'))
console.log(validBraces('[(])'))
console.log(validBraces('({})[({})]'))