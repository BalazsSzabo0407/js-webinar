/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
function arraySorted(items) {
    sorted = items.slice()
    items.sort()
    if (JSON.stringify(sorted) === JSON.stringify(items)) {
        return true
    }
    return false
}

let a = ["hello word", "ok!"]
console.log(arraySorted(a, "h"))

module.exports = arraySorted