'use strict'
let testFoo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    });
};
testFoo().then((result) => {
    console.log(result);
    return ++result;
}).then((result) => {
    console.log(result);
    throw Error('new error message');
    return ++result;
}).then((result) => {
    console.log(result);
    return ++result;
}).catch((error) => {
    console.log(error);
});
