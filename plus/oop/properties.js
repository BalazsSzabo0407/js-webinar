/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

function properties(obejctName) {
    return  typeof obejctName == "object" ? Object.keys(obejctName) : [];

}
module.exports = properties;