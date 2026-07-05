// DESCRIPTION
// A stream of data is received and needs to be reversed.
//
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
//
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:
//
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.
//
// The data is given in an array as such:
//
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


// TESTS
//     const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
//     const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
//     assert.deepEqual(dataReverse(data1),data2)
//     const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
//     const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
//     assert.deepEqual(dataReverse(data3),data4)


// SOLUTION
function dataReverse(data) {
    let result = []
    // for (let i = data.length-8; i >= 0; i-=8) {
    //     result.push(...data.slice(i, i + 8))
    // }
    while(data.length){
        result.push(...data.splice(-8))
    }
    return result;
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));
console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]));