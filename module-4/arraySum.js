/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(Array) {
    let numbers = [];
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        if (typeof Array[i] == "number") {
            numbers.push(Array[i]);
        }
    }
    for (let j = 0; j < numbers.length; j++){
        sum += numbers[j]
    }
    return sum
}

let a =[1, 2, [[[[[3]], [4, [[[["12", 2]]]]]]]]]
console.log(a.length)
module.exports = arraySum
