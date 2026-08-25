// DESCRIPTION
// 1. Уникальные значения
// Верни массив без повторений

// TESTS
//unique([1, 2, 2, 3, 4, 4]) → [1, 2, 3, 4]

// SOLUTION
function unique(arr) {
    return new Set(arr);
}

console.log(unique([1, 2, 2, 3, 4, 4]));

// DESCRIPTION
// 2. Частота символов
// Верни объект с количеством каждого символа

// TESTS
// charCount("hello") → { h: 1, e: 1, l: 2, o: 1 }

// SOLUTION
function charCount(str) {
    let res = {}
    str.split('').forEach((char) => {
        if (char in res) {
            res[char] += 1
        } else {
            res[char] = 1;
        }
    })
    return res;
}

console.log(charCount("hello"))


// DESCRIPTION
// 3. Найди пропущенное число
// Массив чисел от 1 до N, но одного не хватает.
// Найди пропущенное число

// TESTS
// [1, 2, 4, 5] → 3

// SOLUTION
function findMissing(arr) {
    let res
    arr.forEach((num, index, array) => {
        if (index !== 0 && num !== array[index - 1] + 1) {
            res = num;
        }
    })
    return res - 1
}

console.log(findMissing([1, 2, 4, 5]))

// DESCRIPTION
// 4. Array.reduce: сумма по массиву объектов
// Напиши функцию, которая суммирует qty по одинаковым name.

// TESTS
// { apple: 3, banana: 3 }

// SOLUTION
const arr = [
    {name: "apple", qty: 2},
    {name: "banana", qty: 3},
    {name: "apple", qty: 1}
];

function arrayReduce(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc[curr.name]) {
            acc[curr.name] = curr.qty;
        } else {
            acc[curr.name] += curr.qty;
        }
        return acc;
    }, {})
}

console.log(arrayReduce(arr))

// DESCRIPTION
// 5. Object.entries → строка параметров

// TESTS
//  { a: 1, b: 2 } → 'a=1&b=2'

// SOLUTION
function toQueryString(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc += `${key}=${value}&`
        return acc
    }, '').slice(0, -1)
}

console.log(toQueryString({ a: 1, b: 2 }))

// DESCRIPTION
// 6. Реализуй функцию, которая группирует элементы по типу:

// TESTS
// [1, 'a', true, 3, 'b'] => { number: [1, 3], string: ['a', 'b'], boolean: [true] }

// SOLUTION
function groupByType(arr){
    let res = {}
    arr.forEach((item) => {
        let type = typeof item;
        if (type in res){
            res[type].push(item);
        } else {
            res[type] = []
            res[type].push(item);
        }
    })
    return res
}

console.log(groupByType([1, 'a', true, 3, 'b']))