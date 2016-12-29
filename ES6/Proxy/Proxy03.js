//http://pinggod.com/2016/%E5%AE%9E%E4%BE%8B%E8%A7%A3%E6%9E%90-ES6-Proxy-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF/
// 校验参数
let obj = {  
    pickyMethodOne: function(obj, str, num) { /* ... */ },
    pickyMethodTwo: function(num, obj) { /*... */ }
};
const argTypes = {  
    pickyMethodOne: ["object", "string", "number"],
    pickyMethodTwo: ["number", "object"]
};
obj = new Proxy(obj, {  
    get: function(target, key, proxy) {
        var value = target[key];
        return function(...args) {
            var checkArgs = argChecker(key, args, argTypes[key]);
            return Reflect.apply(value, target, args);
        };
    }
});
function argChecker(name, args, checkers) {  
    for (var idx = 0; idx < args.length; idx++) {
        var arg = args[idx];
        var type = checkers[idx];
        if (!arg || typeof arg !== type) {
            console.warn(`You are incorrectly implementing the signature of ${name}. Check param ${idx + 1}`);
        }
    }
}
obj.pickyMethodOne();  
obj.pickyMethodTwo("wopdopadoo", {});  
obj.pickyMethodOne({}, "a little string", 123);  
obj.pickyMethodOne(123, {});