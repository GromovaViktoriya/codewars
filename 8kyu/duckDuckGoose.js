// DESCRIPTION
//The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
//
// Task:
// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name
//
// Example:
// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name


// TESTS
//     assert.strictEqual(duckDuckGoose(players, 1),  "a");
//     assert.strictEqual(duckDuckGoose(players, 3),  "c");
//     assert.strictEqual(duckDuckGoose(players, 10), "z");
//     assert.strictEqual(duckDuckGoose(players, 20), "z");
//     assert.strictEqual(duckDuckGoose(players, 30), "z");
//     assert.strictEqual(duckDuckGoose(players, 18), "g");
//     assert.strictEqual(duckDuckGoose(players, 28), "g");
//     assert.strictEqual(duckDuckGoose(players, 12), "b");
//     assert.strictEqual(duckDuckGoose(players, 2),  "b");
//     assert.strictEqual(duckDuckGoose(players, 7),  "f");


// SOLUTION
class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));


function duckDuckGoose(players, goose) {
    for (let i = 0; i < players.length; i++) {
        if (i === goose - 1) return players[i].name;
    }
    if (goose > players.length) return duckDuckGoose(players, goose - players.length)
    //return players[(goose-1)%players.length].name
}


console.log(duckDuckGoose(players, 1))
console.log(duckDuckGoose(players, 3))
console.log(duckDuckGoose(players, 10))
console.log(duckDuckGoose(players, 20))
console.log(duckDuckGoose(players, 30))
console.log(duckDuckGoose(players, 18))
console.log(duckDuckGoose(players, 28))
console.log(duckDuckGoose(players, 12))
console.log(duckDuckGoose(players, 2))
console.log(duckDuckGoose(players, 7))