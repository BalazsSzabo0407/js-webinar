/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

function properties(obejctName){
    let keys = [];
    if (typeof obejctName != "object") {
        return keys;
    }
    
    for (let i = 0; i<Object.keys(obejctName).length; i++) {
        keys[i]=Object.keys(obejctName)[i]
    
}
    return keys
}
module.exports = properties;