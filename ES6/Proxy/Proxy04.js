// 设置私有属性
let api = {
    _apiKey: '123abc456def',
    getUsers: function() {},
    getUser: function(userId) {},
    setUser: function(userId, config) {}
};
const RESTRICTED = ['_apiKey'];
api = new Proxy(api, {
    get(target, key, proxy) {
        if (RESTRICTED.indexOf(key) > -1) {
            throw Error(`${key} is restricted. Please see api documentation for further info.`);
        }
        return Reflect.get(target, key, proxy);
    },
    set(target, key, value, proxy) {
        if (RESTRICTED.indexOf(key) > -1) {
            throw Error(`${key} is restricted. Please see api documentation for further info.`);
        }
        return Reflect.get(target, key, value, proxy);
    }
});
// 以下操作都会抛出错误
console.log(api._apiKey);
api._apiKey = '987654321';
