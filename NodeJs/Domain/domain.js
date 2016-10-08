var domain = require('domain');

function sync_error() {
    var r = Math.random() * 10;
    console.log("sync num is " + r);
    if (r > 5) {
        throw new Error("sync: random num" + r + " > 5");
    }
}

function async_error() {
    setTimeout(function() {
        var r = Math.random() * 10;
        console.log("async num is " + r);
        if (r > 5) {
            throw new Error("async: random num" + r + " > 5");
        }
    }, 10)

}

var d = domain.create();
d.on('error', function(err) {
    console.log(err);
});

setInterval(function() {
    d.run(sync_error);
    d.run(async_error);
}, 1000)
