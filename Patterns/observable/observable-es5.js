var Observable = function() {
    this.subscribers = [];
}

Observable.prototype = {
    subscribe: function(callback) {
        // 大多数情况下，你会想要检查订阅者数组里是否已经存在这个回调(callback)了。
        // 不过我们现在没有必要关注这些旁枝末节的东西。
        this.subscribers.push(callback);
    },
    unsubscribe: function(callback) {
        var i = 0,
            len = this.subscribers.length;

        // 遍历数组，如果找到这个回调(callback)，就删除它。
        for (; i < len; i++) {
            if (this.subscribers[i] === callback) {
                this.subscribers.splice(i, 1);
                // 一旦我们找到了，就没必要继续执行后面的代码，直接return。
                return;
            }
        }
    },
    publish: function(data) {
        var i = 0,
            len = this.subscribers.length;

        // 遍历整个订阅者数组，执行每一个回调。
        for (; i < len; i++) {
            this.subscribers[i](data);
        }
    }
};

var Observer1 = function(data) {
    console.log('Observer1:' + data);
}
var Observer2 = function(data) {
    console.log('Observer2:' + data);
}

// 这里是具体的用法
observable = new Observable();
observable.subscribe(Observer1);
observable.subscribe(Observer2);
observable.publish('我们发布了！');
 
