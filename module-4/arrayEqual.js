/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
function arrayEqual(first, second) {
    if (JSON.stringify(first) == JSON.stringify(second)) {
        return true
    }
    if (first.length !== second.length) {
        console.warn(`The length of the first array is ${first.length} and the second array is ${second.length}!`)
    } else {
        let difference_1 = first.filter(x => !second.includes(x));
        let difference_2 = second.filter(x => !first.includes(x));
        console.warn((`The difference is ${difference_1} and ${difference_2}`))
    }

    return false
}

//array = [ 1, 2, 3, 4, 5 ];
//array_2 = [ 4, 5, 6 ];
//let difference = array.filter(x => !array_2.includes(x));
//console.log(difference)


module.exports = arrayEqual