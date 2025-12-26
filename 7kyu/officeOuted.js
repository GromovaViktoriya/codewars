// DESCRIPTION
//Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've
// been using the work computers to smash in endless hours of codewars.
//
// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble.
// You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
//
// Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value,
// you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return
// 'Nice Work Champ!'.
//
// Happiness rating will be total score / number of people in the room.
//
// Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one
// person!).


// TESTS
//     assert.strictEqual(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
//     assert.strictEqual(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
//     assert.strictEqual(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');


// SOLUTION
function outed(meet, boss){
    let total = 0;
    for (let key in meet) {
        key === boss
            ? total += (meet[key] * 2)
            : total += meet[key]
    }
    return total / Object.keys(meet).length  <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))
console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'))
console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'))
console.log(outed( {"tim":2,"jim":8,"randy":2,"sandy":4,"andy":7,"katie":9,"laura":6,"saajid":2,"alex":5,"john":3,"mr":4}, 'randy'))
console.log(outed({"tim":8,"jim":9,"randy":6,"sandy":6,"andy":5,"katie":9,"laura":0,"saajid":2,"alex":6,"john":2,"mr":5} , 'laura'))