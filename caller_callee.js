/*
26.Javascript中callee和caller的作用？
答案：
caller是返回一个对函数的引用，该函数调用了当前函数；
callee是返回正在被执行的function函数，也就是所指定的function对象的正文。
 */
function a() {
    console.log('========'+arguments.callee);
}

function b() {
    a();
}
b();

/*
如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔子；
假定每对兔子都是一雌一雄，试问一对兔子，第n个月能繁殖成多少对兔子？（使用callee完成）
 */
var result = [];

function fn(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        if (result[n]) {
            return result[n];
        } else {
            //argument.callee()表示fn()
            result[n] = arguments.callee(n - 1) + arguments.callee(n - 2);
            return result[n];
        }
    }
}
console.log(fn(3))
