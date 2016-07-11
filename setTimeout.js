for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
};

for (var i = 0; i <= 3; i++) {
    (function(v) {
        setTimeout(function() {
            console.log(v);
        }, 0);
    })(i)
}
