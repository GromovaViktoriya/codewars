//DESCRIPTION
//Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

//TESTS
//       assert.strictEqual(strCount({
//       first:  "1",
//       second: "2",
//       third:  false,
//       fourth: ["anytime",2,3,4],
//       fifth:  null,
//       sixth:  undefined,
//       seventh:{}
//     }),3,"Did not count the correct number of strings. Check counting inside nested objects.");
//   });

//SOLUTION
function strCount(obj) {
    let count = 0;
    for (let value in obj) {
        if (typeof obj[value] === 'string') {
            count++;
        } else if (typeof obj[value] === 'object' && obj[value] !== null) {
            count += strCount(obj[value]); // РЕКУРСИВНЫЙ ВЫЗОВ
        }
    }
    return count;
}


console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {}
}))