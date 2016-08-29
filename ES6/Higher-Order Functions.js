const filter = (pred, xs) => {
    const result = [];
    for (let idx = 0; idx < xs.length; idx++) {
        if (pred(xs[idx])) {
            result.push(xs[idx]);
        }
    }
    return result;
};

const is = (type) => (x) => Object(x) instanceof type;

console.log(filter(is(Number), [0, '1', 2, null])); 
// => [0, 2]