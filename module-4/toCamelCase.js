/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

let chars = "abcdefghijklmnopqrstuvwxyz1234567890";
function toCamelCase(toConvert) {
    if (typeof toConvert !== "string") {
        return "";
    }
    const words = toConvert.split(" ");
    const cleanWords = words.map(word => {
        return word.split("").filter(c =>{
            return chars.includes(c.toLocaleLowerCase())
        }).join("")
    });
    const realWords = cleanWords.filter(word =>{
        return word !=="";
    });
    const upperWords = realWords.map((word, i) => {
        if (i === 0) {
            return word.toLocaleLowerCase();
        }
            return word[0].toUpperCase() + word.slice(1).toLocaleLowerCase();
    });
    return upperWords.join("");

}

module.exports = toCamelCase