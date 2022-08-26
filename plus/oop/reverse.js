/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */


/*const o = { a: 12, b: 23 };

let keys=[];
let values=[];
for (let i = 0; i<Object.keys(o).length; i++) {
    console.log(i)
    keys[i]=Object.keys(o)[i]
    values[i]=Object.values(o)[i]
}
let newObj = {};
values.forEach((key,i) => newObj[key] = keys[i]);
console.log(keys)
console.log(values)
console.log(o)
console.log(newObj) */

/* class reverse {
    constructor(o) {
        this.o = o;

        
        if (typeof o != "object") {
           throw Error ("No object is passed");
        }

        let keys=[];
        let values=[];
        for (let i = 0; i<Object.keys(this.o).length; i++) {
        keys[i]=Object.keys(this.o)[i]
        values[i]=Object.values(this.o)[i]
    }
        let newObj = {};
        values.forEach((key,i) => newObj[key] = keys[i]);
        return newObj
    }
    
}; */

function reverse(o) {

        if (typeof o != "object") {
           throw Error ("No object is passed");
        }

        let keys=[];
        let values=[];
        for (let i = 0; i<Object.keys(o).length; i++) {
        keys[i]=Object.keys(o)[i]
        values[i]=Object.values(o)[i]
    }
        let newObj = {};
        values.forEach((key,i) => newObj[key] = keys[i]);
        return(newObj);
    };

module.exports = reverse;