// DESCRIPTION
// Your task is to write a function calculate, which accepts a string with a mathematical exprssion written in prefix
// Polish notation and evaluates it. This means that all operations are placed before their operands. For example, the
// expression 3 + 5 is written in Polish notation as + 3 5, and (3 + 5) / (2 * 2) is / + 3 5 * 2 2.
//
// The only valid operations are +, -, * and /. The input string is guaranteed to be a valid expression.
//
// You can use eval or alternative if available in your language, but it is in no way needed for an idiomatic solution.
//
// Examples
// calculate('123.456')       == 123.456
// calculate('+ -5 5')        == 0
// calculate('* + 2 2 3')     == 12
// calculate('/ + 3 5 * 2 2') == 2
// Input
// A non-empty string consisting of numbers and arithmetic operators separated by spaces. This string is a valid
// arithmetic expression written in prefix polish notation.
//
// Output
// A number, result of evaluating the expression.


// TESTS
//     assert.equal(calculate('0'), 0);
//     assert.equal(calculate('123'), 123);
//     assert.approximately(calculate('12.456'), 12.456, 0.001);
//     assert.equal(calculate('+ 3 5'), 8);
//     assert.equal(calculate('* + 2 2 3'), 12);
//     assert.equal(calculate('/ + 3 5 * 2 2'), 2);


// SOLUTION
function calculate(expression) {
    let arr = expression.split(' ')
    const stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const token = arr[i];
        if (['+', '-', '*', '/'].includes(token)){
            const left = stack.pop();
            const right = stack.pop();
            switch (token) {
                case '+':
                    stack.push(left + right);
                    break;
                case '-':
                    stack.push(left - right);
                    break;
                case '*':
                    stack.push(left * right);
                    break;
                case '/':
                    stack.push(left / right);
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
}
console.log(calculate('0'))
console.log(calculate('123'))
console.log(calculate('+ 3 5'))
console.log(calculate('* + 2 2 3'))
console.log(calculate('/ + 3 5 * 2 2'))



























