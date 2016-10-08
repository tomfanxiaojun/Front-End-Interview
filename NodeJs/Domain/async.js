'use strict';

function async_error() {
    setTimeout(() => {
        var r = Math.random() * 10;
        console.log(`random num is ${r}`);
        if (r > 5) {
            throw new Error(`Error: random num ${r}>5`);
        }
    }, 10)
}
setInterval(() => {
    try {
        async_error();
    } catch (e) {
        // statements
        console.log(e);
    }
}, 1000)
