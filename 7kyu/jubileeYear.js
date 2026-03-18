// DESCRIPTION
//A Jubilee Year is celebrated in Santiago de Compostela whenever July 25, the day of Santiago the Elder, falls on a
// Sunday.
//
// For example, as of 2018 we know the last Jubilee year was 2010 and the next is going to be 2021.
//
// Your task is to create the function isJubilee() that will tell us whether a given year was/is a Jubilee Year or not.
// For this kata, we're just interested in years from 1900 to 2099 (both included), so don't expect your function to
// receive any input out of that range.
//
// Example:
//
//   isJubilee(2020);  // <-- returns false  because 2020/07/25 is Saturday
//   isJubilee(2021);  // <-- returns true   because 2021/07/25 is Sunday


// TESTS
//   describe("Sample Tests", () => {
//
//   function act(expected, year) {
//     const userSolution = isJubilee(year);
//     const msg = `Invalid solution for year = ${year}`;
//     assert.equal(userSolution, expected, msg);
//   }
//
//   for (let year of [ 1909, 1971, 2010, 2021, 2088 ]) {
//     const expected = true;
//     it(`year = ${year}`, () => act(expected, year));
//   }
//
//   for (let year of [ 1900, 2008, 2009, 2011, 2099 ]) {
//     const expected = false;
//     it(`year = ${year}`, () => act(expected, year));
//   }
// });

// SOLUTION
function isJubilee(year) {
    return new Date(year, 7-1, 25).getDay() === 0;
}

console.log(isJubilee(2020))
console.log(isJubilee(2021))
console.log(isJubilee(2010))
console.log(isJubilee(1900))