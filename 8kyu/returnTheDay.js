// DESCRIPTION
//Complete the function which returns the weekday according to the input number:
//
// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

// TESTS
//     Test.assertEquals(whatday(1),'Sunday')
//     Test.assertEquals(whatday(2), 'Monday')
//     Test.assertEquals(whatday(3),'Tuesday')
//     Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
//     Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')

// SOLUTION
function whatday(num) {
 switch (num){
     case 1: return 'Sunday';
     case 2: return 'Monday';
     case 3: return 'Tuesday';
     case 4: return 'Wednesday';
     case 5: return 'Thursday';
     case 6: return 'Friday';
     case 7: return 'Saturday';
     default: return 'Wrong, please enter a number between 1 and 7';
 }
}

console.log(whatday(1))
console.log(whatday(2))
console.log(whatday(3))
console.log(whatday(8))
console.log(whatday(20))    