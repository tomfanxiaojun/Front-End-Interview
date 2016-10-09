'use strict'
/**
 * http://qiutc.me/post/promise-learn-note.html
 * @return {[type]} [description]
 */
let testFoo = () => {
    return new Promise((resolve, reject) => {
        let random = Math.random() * 10;
        setTimeout(() => {
            if (random > 5) {
                resolve(`success,random=${random}`);
            } else {
                reject(`fail,random=${random}`);
            }

        }, 1000);
    });
};
testFoo().then((result) => {
    console.log(result);
}, (error) => {
    console.log(error)
}).catch((error) => {
    console.log(error);
});
