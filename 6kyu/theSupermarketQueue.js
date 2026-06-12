// DESCRIPTION
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the
// total time required for all the customers to check out!
//
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value
// is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// TESTS
//     assert.strictEqual(queueTime([], 1), 0);
//     assert.strictEqual(queueTime([1,2,3,4], 1), 10);
//     assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
//     assert.strictEqual(queueTime([1,2,3,4,5], 100), 5);
//     assert.strictEqual(queueTime([5,3,4],    1), 12);
//     assert.strictEqual(queueTime([10,2,3,3], 2), 10);
//     assert.strictEqual(queueTime([2,3,10,2], 2), 12);

// SOLUTION
function queueTime(customers, n) {
    let checkoutTills = Array(n).fill(0)
    for (let i = 0; i < customers.length; i++) {
        let minTime = Math.min(...checkoutTills)
        let minIndex = checkoutTills.indexOf(minTime)
        checkoutTills[minIndex] += customers[i]
    }
    return Math.max(...checkoutTills);
}

console.log(queueTime([], 1))
console.log(queueTime([1, 2, 3, 4], 1))
console.log(queueTime([2, 2, 3, 3, 4, 4], 2))
console.log(queueTime([1, 2, 3, 4, 5], 100))
console.log(queueTime([5, 3, 4], 1))
console.log(queueTime([10, 2, 3, 3], 2))
console.log(queueTime([2, 3, 10, 2], 2))