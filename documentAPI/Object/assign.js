'use strict'
/*
Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
Object.assign(target, ...sources)
 */
let s1={name:'ivan',getName:function(){
	console.log(this.name)
  }
}
let s2={age:27}
let s3={name:'jake'} 
let t={};
Object.assign(t,s1,s2,s3);
console.log(t) 
 t.getName();