// DESCRIPTION
// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
//
// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]



// TESTS
// assert.deepEqual(capMe(['johnny']), ['Johnny']);
// assert.deepEqual(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);

// SOLUTION
function capMe(names) {
return names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
}

console.log(capMe(['johnny']))
console.log(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']))