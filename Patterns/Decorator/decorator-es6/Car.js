 class Car {
     constructor() {
         console.log('装配(assemble)：组建车架，添加主要部件');
     }
     start() {
         console.log('伴随着引擎的轰鸣声，车子发动了！');
     }
     drive() {
         console.log('走起!');
     }
     getPrice() {
         return 11000.00;
     }
 }
 class CarDecorator {
     constructor(car) {
         this.car = car;
     }

     start() {
         this.car.start();
     }
     drive() {
         this.car.drive();
     }
     getPrice() {
         return this.car.getPrice();
     }
 }
 class PowerLocksDecorator extends CarDecorator {
     constructor(args) {
         super(args);
         console.log('装配：添加动力锁');
     }      
     drive(){
     	this.car.drive();
     	console.log('车门自动上锁');
     }
 }
 class PowerWindowsDecorator extends CarDecorator {
     constructor(args) {
         super(args);
         console.log('装配：添加动力表盘');
     }      
      
 }
 class ACDecorator extends CarDecorator {
     constructor(args) {
         super(args);
         console.log('装配：添加空调');
     }      
      start(){
      	this.car.start();
      	console.log('冷风吹起来');
      }
      setTemperature(temperature){
      	this.temperature=temperature;
      }
      getTemperature(){
      	console.log('空调开起来，温度是：'+this.temperature);
      }
 }
var car = new Car();                    // log打印 "装配(assemble)：组建车架，添加主要部件"
// 给车装上动力表盘
car = new PowerWindowsDecorator(car);    // log打印 "装配：添加动力表盘"
// 现在加装动力锁和空调
car = new PowerLocksDecorator(car);     // log打印 "装配：添加动力锁"
car = new ACDecorator(car);             // log打印 "装配：添加空调"
// 让我们发动这个坏小子出去兜兜风吧!
car.start(); // log打印 '伴随着引擎的轰鸣声，车子发动了！' 和 '冷风吹起来'
car.drive(); // log打印 '走起!' 和 '车门自动上锁'

car.setTemperature(22);
car.getTemperature();