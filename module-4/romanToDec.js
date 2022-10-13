/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec(roman) {
    if (typeof roman !== "string") {
        console.warn("Not a string")
    }
    const romanNumbers = "ivxlcdm"

    const romanToArab = {
        "i": 1,
        "v": 5,
        "x": 10,
        "l": 50,
        "c": 100,
        "d": 500,
        "m": 1000,
    };

    let sum = 0;

    for (let i = 0; i < roman.length; i++) {
        let current = romanToArab[roman[i]];
        let next = romanToArab[roman[i + 1]];

        if (romanNumbers.indexOf(roman[i]) === -1) {
            console.warn("Not a valid roman number")
            return false
        }

        if (current < next) {
            sum += next - current;
            i++;
        } else {
            sum += current;
        }
    }
    return sum;
}

console.log(romanToDec("VII"))
module.exports = romanToDec