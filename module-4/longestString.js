/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(strings) {
    let longest = [""]
    if (!Array.isArray(strings)){
        return ""
    }
    for (const element of strings){
        if (element.length > longest[0].length){
            longest[0] = element
        } else if (element.length == longest[0].length){
            longest.push(element)
            longest.sort()
            longest.pop()
        }
    }
    return longest.toString()
}
let a =["hello"] //the test case is wrong!!
console.log(longestString(a))

module.exports = longestString