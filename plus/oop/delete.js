/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
function del(o, a) {
  if (typeof o != "object"){
    throw Error ("No object is passed")
  }
  let ans = {};
  Object.assign(ans,o)
  delete ans.a
  return ans
  ;
}
const o = { a: 12, b: 23 };
const newO = del(o, "a");
console.log(newO)
console.log(o)
module.exports = del;

console.log(typeof null)