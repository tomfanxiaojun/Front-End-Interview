'use strict'
let numericDataStore = {  
    count: 0,
    amount: 1234,
    total: 14
};

numericDataStore = new Proxy(numericDataStore, {  
    set(target, key, value, proxy) {
        if (typeof value !== 'number') {
            throw Error("Properties in numericDataStore can only be numbers");
        }
        return Reflect.set(target, key, value, proxy);
    }
});

// 抛出错误，因为 "foo" 不是数值
numericDataStore.count = "foo";

// 赋值成功
numericDataStore.count = 333;