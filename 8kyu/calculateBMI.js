// DESCRIPTION
//Write function bmi that calculates body mass index (bmi = weight / height2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

// TESTS
//     assert.strictEqual(bmi(50, 1.80), "Underweight", "For weight = 50 and height = 1.80");
//     assert.strictEqual(bmi(80, 1.80), "Normal", "For weight = 80 and height = 1.80");
//     assert.strictEqual(bmi(90, 1.80), "Overweight", "For weight = 90 and height = 1.80");
//     assert.strictEqual(bmi(100, 1.80), "Obese", "For weight = 100 and height = 1.80");

// SOLUTION
function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(bmi(50, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(100, 1.80));