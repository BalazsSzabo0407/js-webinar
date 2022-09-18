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
function arraySorted(items,ignore) {
    items = items.flat(10)
    sorted = items.slice()
    items.sort()
    const lowerSorted = sorted.map(element =>{
        if (typeof element === "string"){
            return element.toLowerCase()
        }
        else {
            return element
        }
    });
    const lowerItems = items.map(element =>{
        if (typeof element === "string"){
        return element.toLowerCase()
        }
        else {
            return element
        }
         
    });
    if (JSON.stringify(lowerSorted) === JSON.stringify(lowerItems)) {
        return true
    }
    return false
}

let a = [1,2,3]
console.log(arraySorted(a))

module.exports = arraySorted
