var MoneyStack = function(billSize) {
    this.billSize = billSize; // 译注：钞票面值
    this.next = null;
}
MoneyStack.prototype = {
    withdraw: function(amount) {  //译注：提现方法
        var numOfBills = Math.floor(amount / this.billSize);

        if (numOfBills > 0) {
            // 吐钞
            this._ejectMoney(numOfBills);
            // 减去已吐钞票
            amount = amount - (this.billSize * numOfBills);
        }

        // 是否还有钱没有取出，如果链路上还有别的面值的钞票，把请求传递下去
        amount > 0 && this.next && this.next.withdraw(amount);
    },
    // 设置链路上下一个面值的钞票
    setNextStack: function(stack) {
        this.next = stack;
    },
    // 私有的用来吐钞的方法
    _ejectMoney: function(numOfBills) {
        console.log(numOfBills + "张 $" + this.billSize 
            + " 已经吐钞"); 
            //译注：多少张billSize面值的钞票已经吐钞
    }
}

var ATM = function() {
    // 创建不同面值的钱
    var stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);

    // 钞票层级顺序
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);

    // 把顶层钞票设置为一个属性
    this.moneyStacks = stack100;
}

ATM.prototype.withdraw = function(amount) {
    this.moneyStacks.withdraw(amount);
}

// 用法
var atm = new ATM();
atm.withdraw(186);
/* 输出:
    1张 $100 已经吐钞
    1张 $50 已经吐钞
    1张 $20 已经吐钞
    1张 $10 已经吐钞
    1张 $5 已经吐钞
    1张 $1 已经吐钞
*/
atm.withdraw(72);
/* 输出:
    1张 $50 已经吐钞
    1张 $20 已经吐钞
    2张 $1 已经吐钞
*/