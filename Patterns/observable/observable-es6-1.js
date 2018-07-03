// https://juejin.im/post/5ac2fb886fb9a028b86e328c
// 发布订阅模式
class EventEmeitter {
    constructor(maxListeners) {
        const defaultmaxListeners = 10;
        this._events = new Map();
        this._maxListeners = (maxListeners && maxListeners > 0) ? maxListeners : defaultmaxListeners;
    }
    on(type, fn) {
        let typeObj = this._events.get(type);
        if (typeObj) {
            if (typeObj.length >= this._maxListeners) return;
            this._events.get(type).push(fn);
        } else {
            this._events.set(type, [fn]);
        }
    }
    emit(type, ...args) {
        if (this._events.get(type)) {
            this._events.get(type).forEach(fn => {
                fn.call(this, args)
            })
        }
    }
    remove(type, fn) {
        let typeObj = this._events.get(type);
        if (typeObj && typeObj.find(e => e === fn)) {
            typeObj.splice(typeObj.findIndex(e => e === fn), 1);
        }
    }
}
// 实例化
const emitter = new EventEmeitter(3);
// 重复监听同一个事件名
function saveFunc(man) {
    console.log(`save ${man}`);
}
emitter.on('arson', man => {
    console.log(`expel ${man}`);
});
emitter.on('arson', man => {
    console.log(`expel11 ${man}`);
});
emitter.on('arson', man => {
    console.log(`expel22 ${man}`);
});
emitter.on('arson', man => {
    console.log(`expel22 ${man}`);
});
emitter.on('arson', man => {
    console.log(`expel22 ${man}`);
});
emitter.on('arson', saveFunc);

emitter.emit('arson', 'low-end'); // expel low-end

emitter.remove ('arson', saveFunc);
emitter.emit('arson', 'ivan fan');
