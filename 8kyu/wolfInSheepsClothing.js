// DESCRIPTION
//Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend
// to be sheep. Fortunately, you are good at spotting them.
//
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the
// queue which is at the end of the array:
//
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep
// number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//
// Note: there will always be exactly one wolf in the array.
//
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

// TESTS
//  doTest(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
// 		"Oi! Sheep number 2! You are about to be eaten by a wolf!"
// 	);
//     doTest(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
// 		"Oi! Sheep number 5! You are about to be eaten by a wolf!"
// 	);
//     doTest(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
// 		"Oi! Sheep number 6! You are about to be eaten by a wolf!"
// 	);
//     doTest(["sheep", "wolf", "sheep"],
// 		"Oi! Sheep number 1! You are about to be eaten by a wolf!"
// 	);
//     doTest(["wolf"],
// 		"Pls go away and stop eating my sheep"
// 	);
//     doTest(["sheep", "sheep", "wolf"],
// 		"Pls go away and stop eating my sheep"
// 	);

function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf("wolf");
    if (wolfIndex === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    }
    const sheepNumber = queue.length - 1 - wolfIndex;
    return "Oi! Sheep number " + sheepNumber + "! You are about to be eaten by a wolf!";
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["wolf"]))
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))