var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
console.time(numCPUs+' cluster');
if (cluster.isMaster) {
    console.log('master starting....');
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    var i = numCPUs;
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
        if (!--i) {
            console.timeEnd(numCPUs+' cluster');
            process.exit(0);
        }
    });
} else {
    console.log(fibo(40));
    process.exit(0);
}
