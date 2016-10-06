'use strict';

function async_error() {
    setTimeout(function() {
        var r = Math.random() * 10;
        console.log("random num is " + r);
        if (r > 5) {
            throw new Error("Error: random num" + r + " > 5");
        }
    }, 10)

}

setInterval(function() {
    try {
        async_error();
    } catch (err) {
        console.log(err);
    }
}, 1000)

process.on('uncaughtException', function(err) {
    console.log(err);
});
