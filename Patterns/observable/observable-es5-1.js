Observable = function() {
    this.status = "constructed";
}
Observable.prototype.getStatus = function() {
    return this.status;
}

Observer = function() {
    this.subscriptions = [];
}
Observer.prototype = {
    subscribeTo: function(observable) {
        this.subscriptions.push(observable);
    },
    unsubscribeFrom: function(observable) {
        var i = 0,
            len = this.subscriptions.length;

        // 遍历数组，如果找到这个发布者(observable)，就删除它。
        for (; i < len; i++) {
            if (this.subscriptions[i] === observable) {
                this.subscriptions.splice(i, 1);
                // 一旦我们找到了，就没必要继续执行后面的代码，直接return。
                return;
            }
        }        
    },
    doSomethingIfOk: function() {
        var i = 0;
            len = this.subscriptions.length;

        // 遍历subscriptions确定每个元素的状态是否变成了ok，
        // 如果是ok的话就处理
        for (; i < len; i++) {
            if (this.subscriptions[i].getStatus() === "ok") {
                // 做些处理，因为observable已经变成我们想要的状态
            }
        }
    }
}

var observer = new Observer(),
    observable = new Observable();
observer.subscribeTo(observable);

// 因为状态并没有改变所以什么都不会发生
observer.doSomethingIfOk();

// 把状态变为ok，现在你才会处理
observable.status = "ok";
observer.doSomethingIfOk();