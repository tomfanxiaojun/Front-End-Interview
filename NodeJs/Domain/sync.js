'use strict';       
/**
 * http://blog.fens.me/nodejs-core-domain/
 * @return {[type]} [description]
 */
function sync_error() {
    var r = Math.random() * 10;
    console.log(`random num is ${r}`);
    if (r > 5) {
        throw new Error(`Error:random num ${r}>5`);
    }
}
setInterval(() => {
    try {
        sync_error();
    } catch (e) {
        // statements
        console.log(e);
    }
}, 1000)
