/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */


const sleep = sec => new Promise((resolve, reject) => {
    if (typeof sec != "number" || sec < 0){
        reject("Invalid parameter")
    }
    if (sec > 10){
        sec = 10
    }
    setTimeout(() => resolve(),sec*1000)
})




   /* await new Promise(function(resolve,reject){
        if (typeof sec=="number") {
            sec = sec*1000;
            resolve(setTimeout(resolve,sec))
            
        } else {
            reject("Not a number!")
        }
    })*/

async function time() {
    console.log(Date.now())
    await sleep(5)
    console.log(Date.now())
}

time()


module.exports = sleep;