// http://www.css88.com/archives/7781
function curry(fn, n) {
    function toArray(arrLike) {
        return [].slice.call(arrLike);
    }
    var arity = n || fn.length;
    return function curried() {
        var args = toArray(arguments),
            context = this;
        return args.length >= arity ?
            fn.apply(context, args) :
            function() {
                var rest = toArray(arguments);
                return curried.apply(context, args.concat(rest));
            };
    };
}

// function max( /* variable arguments */ ) {
//     var args = [].slice.call(arguments);
//     return Math.max.apply(Math, args);
// }

// function range(start, end, step) {
//     var stop = Math.max(start, end),
//         start = Math.min(start, end),
//         set = [];

//     // step is optional
//     step = typeof step !== 'undefined' ? step : 1;

//     for (var i = start; i <= stop; i += step) {
//         set.push(i);
//     }
//     return set;
// }
// console.log(curry(range,)(1)(10))

/* add function */
function add() {
    "use strict";
    console.log('...........')
    var args, sum, chain;
    args = Array.prototype.slice.call(arguments);
    sum = typeof this === 'number' ? this : 0;
    sum += args.reduce(function(p, n) { return p + n; }, 0);
    chain = add.bind(sum);
    chain.valueOf = function() {
        return sum;
    };
    return chain;
}

console.log('add(1, 2) = ' + add(1, 2));
console.log('add(1)(2) = ' + add(1)(2));
// console.log('add(1, 2)(3) = ' + add(1, 2)(3));
// console.log('add(1, 2, 3)(4, 5)(6) = ' + add(1, 2, 3)(4, 5)(6));
// var add7 = add(7);
// console.log('var add7 = add(7)');
// console.log('add7(3) = ' + add7(3));
// console.log('add7(8) = ' + add7(8));
