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
    const words = toConvert.replace("\n"," ").replace("\t"," ").split(" ")
    const cleanWords = words.map(word => {
        return word.split("").filter(c =>{
            return chars.includes(c.toLowerCase())
        }).join("")
    });
    const realWords = cleanWords.filter(word =>{
        return word !=="";
    });
    const upperWords = realWords.map((word, i) => {
        if (i === 0) {
            return word.toLowerCase();
        }
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return upperWords.join("");

}

module.exports = toCamelCase