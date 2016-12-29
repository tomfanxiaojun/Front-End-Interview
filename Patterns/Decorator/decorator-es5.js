var Car = function() {
    console.log('装配(assemble):组建车架,添加主要部件');
}
Car.prototype = {
        start: function() {
            console.log('伴随着引擎的轰鸣声，车子发动了！');
        },
        drive: function() {
            console.log('走起!');
        },
        getPrice: function() {
            return 11000.00;
        }
    }
    // 你需要传递一个Car（或者是CarDecorator）才能为它添加功能。
var CarDecorator = function(car) {
    this.car = car;
}

// CarDecorator 实现相同的接口
CarDecorator.prototype = {
    start: function() {
        this.car.start();
    },
    drive: function() {
        this.car.drive();
    },
    getPrice: function() {
        return this.car.getPrice();
    }
}

var PowerLocksDecorator = function(car) {
    // 这是JavaScript里调用父类构造函数的方式
    CarDecorator.call(this, car);
    console.log('装配：添加动力锁');
}
PowerLocksDecorator.prototype = new CarDecorator();
PowerLocksDecorator.prototype.drive = function() {
    // 你可以这么写
    this.car.drive();
    // 或者你可以调用父类的drive方法：
    // CarDecorator.prototype.drive.call(this);
    console.log('车门自动上锁');
}

var PowerWindowsDecorator = function(car) {
    CarDecorator.call(this, car);
    console.log('装配：添加动力表盘');
}
PowerWindowsDecorator.prototype = new CarDecorator();

var ACDecorator = function(car) {
    CarDecorator.call(this, car);
    console.log('装配：添加空调');
}
ACDecorator.prototype = new CarDecorator();
ACDecorator.prototype.start = function() {
    this.car.start();
    console.log('冷风吹起来');
}

var car = new Car(); // log打印 "装配(assemble)：组建车架，添加主要部件"

// 给车装上动力表盘
car = new PowerWindowsDecorator(car); // log打印 "装配：添加动力表盘"

// 现在加装动力锁和空调
car = new PowerLocksDecorator(car); // log打印 "装配：添加动力锁"
car = new ACDecorator(car); // log打印 "装配：添加空调"

// 让我们发动这个坏小子出去兜兜风吧!
car.start(); // log打印 '伴随着引擎的轰鸣声，车子发动了！' 和 '冷风吹起来'
car.drive(); // log打印 '走起!' 和 '车门自动上锁'
