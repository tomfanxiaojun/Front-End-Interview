let dataStore = {  
    noDelete: 1235,
    oldMethod: function() {/*...*/ },
    doNotChange: "tried and true"
};
const NODELETE = ['noDelete'];  
const NOCHANGE = ['doNotChange'];
const DEPRECATED = ['oldMethod'];  
dataStore = new Proxy(dataStore, {  
    set(target, key, value, proxy) {
        if (NOCHANGE.includes(key)) {
            throw Error(`Error! ${key} is immutable.`);
        }
        return Reflect.set(target, key, value, proxy);
    },
    deleteProperty(target, key) {
        if (NODELETE.includes(key)) {
            throw Error(`Error! ${key} cannot be deleted.`);
        }
        return Reflect.deleteProperty(target, key);
    },
    get(target, key, proxy) {
        if (DEPRECATED.includes(key)) {
            console.warn(`Warning! ${key} is deprecated.`);
        }
        var val = target[key];
        return typeof val === 'function' ?
            function(...args) {
                Reflect.apply(target[key], target, args);
            } :
            val;
    }
});
// these will throw errors or log warnings, respectively
// dataStore.doNotChange = "foo";  
// delete dataStore.noDelete;  
dataStore.oldMethod();