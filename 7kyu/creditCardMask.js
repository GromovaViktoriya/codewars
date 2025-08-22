// DESCRIPTION

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most
// secret question is still correct. However, since someone could look over your shoulder, you don't want that shown
// on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
//
// "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"


// TESTS

// Test.assertEquals(maskify('4556364607935616'), '############5616');
// Test.assertEquals(maskify('1'), '1');
// Test.assertEquals(maskify('11111'), '#1111');

// SOLUTION

// return masked string
function maskify(cc) {
    let newStr = "";
    for (let i = cc.length - 4; i > 0; i--) {
        newStr += "#";
    }
    return newStr + cc.slice(-4);
}

console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify('11111'))
console.log(maskify('Nananananananananananananananana Batman!'))