// DESCRIPTION
// Return an array containing the numbers from 1 to N, where N is the parametered value.
//
// Replace certain values however if any of the following conditions are met:
//
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
//
// Method calling example:
//
// fizzbuzz(3) -->  [1, 2, "Fizz"]


// TESTS
//   describe('Fizzbuzz', function() {
//   it('Should fizzify 10 numbers correctly', function() {
//     var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
//     Test.assertEquals(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected) , 'Fails with 10 numbers!');
//   });


// SOLUTION
// Return an array
function fizzbuzz(n) {
    const arr = Array.from({length: n}, (_, i) => i + 1);
    arr.forEach((num, i) => {
        if (num % 3 === 0 && num % 5 === 0) {
            arr[i] = 'FizzBuzz';
        } else if (num % 3 === 0) {
            arr[i] = 'Fizz';
        } else if (num % 5 === 0) {
            arr[i] = 'Buzz';
        }
    })
    return arr
}


console.log(fizzbuzz(10))
console.log(fizzbuzz(15))
