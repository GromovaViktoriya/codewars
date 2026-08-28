// DESCRIPTION
// Give you two array arr1 and arr2. They contains some numbers. They have the same length. Calculate the sum of the
// corresponding position number, find the most pairs that has the same sum value. return the result by a 2D array that
// contains all pairs. For example:
//
// arr1=[1,2,3,4,5]
// arr2=[9,8,0,0,0]
// findPair(arr1,arr2) should return [[1,9],[2,8]]
// because:
//
// 1  2  3 4 5
// +  +  + + +
// 9  8  0 0 0
// |  |  | | |
// 10 10 3 4 5
//
// 1,9 and 2,8 have the same sum value 10
// You do not need to verify the input data. arr1 and arr2 will always have the same number of elements, and testcase
// will not provide an empty array.
//
// If all pairs has diffrent sum value, please return [].
//
// If more than one groups of pairs has same number, choose which has the max sum value(see the last example)
//
// You don't need sort the result, return the pairs according to the order of the index.
//
// Examples
// arr1=[1,2,3,4,5]
// arr2=[0,0,0,0,0]
// findPair(arr1,arr2) should return []
//
// arr1=[1,2,3,4,5]
// arr2=[5,4,3,2,1]
// findPair(arr1,arr2) should return [[1,5],[2,4],[3,3],[4,2],[5,1]]
//
// arr1=[0,1,3,4,5]
// arr2=[1,0,3,2,1]
// findPair(arr1,arr2) should return [[3,3],[4,2],[5,1]]
//
// arr1=[1,2,3,4,5]
// arr2=[-1,2,-3,4,-5]
// findPair(arr1,arr2) should return [[1,-1],[3,-3],[5,-5]]
//
// arr1=[1,2,3,0,5,-2]
// arr2=[-1,2,-3,4,-5,6]
// findPair(arr1,arr2) should return [[2,2],[0,4],[-2,6]]

// TESTS
// Test.assertSimilar(findPair([1,2,3,4,5],[9,8,0,0,0]) , [[1,9],[2,8]])
// Test.assertSimilar(findPair([1,2,3,4,5],[0,0,0,0,0]) , [])
// Test.assertSimilar(findPair([1,2,3,4,5],[5,4,3,2,1]) , [[1,5],[2,4],[3,3],[4,2],[5,1]])
// Test.assertSimilar(findPair([0,1,3,4,5],[1,0,3,2,1]) , [[3,3],[4,2],[5,1]])
// Test.assertSimilar(findPair([1,2,3,4,5],[-1,2,-3,4,-5]) , [[1,-1],[3,-3],[5,-5]])
// Test.assertSimilar(findPair([1,2,3,0,5,-2],[-1,2,-3,4,-5,6]) , [[2,2],[0,4],[-2,6]])

// SOLUTION
function findPair(arr1, arr2) {
    let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        let value = arr1[i] + arr2[i]
        if (value in obj) {
            obj[value].count += 1
            obj[value].nums.push([arr1[i], arr2[i]])
        } else {
            obj[value] = {
                sum: value,
                nums: [],
                count: 1
            }
            obj[value].nums.push([arr1[i], arr2[i]])
        }
    }
    let items = Object.values(obj)
    let res = items.reduce((max, item) => {
        if (item.count > max.count) {
            return item
        }
        if (item.count === max.count) {
            if (item.sum > max.sum) {
                return item
            }
        }
        return max
    }, items[0])
    return res.count > 1 ? res.nums : []
}

console.log(findPair([1, 2, 3, 4, 5], [9, 8, 0, 0, 0]))
console.log(findPair([1, 2, 3, 4, 5], [0, 0, 0, 0, 0]))
console.log(findPair([0, 1, 3, 4, 5], [1, 0, 3, 2, 1]))
console.log(findPair([1, 2, 3, 0, 5, -2], [-1, 2, -3, 4, -5, 6]))