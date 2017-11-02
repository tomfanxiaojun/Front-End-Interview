var str = 'zhongguofujianxiamensimingshoushou';
var result = str.split('').reduce((init, a) => {
    init[a] = init[a] ? init[a] + 1 : 1
    return init
}, {})


console.log(Object.entries(result).filter(e => e[1] === Math.max(...Object.values(result))))


var str = 'g21ss4aeba_ersb43sgnnsssstht6sss60snnsj8resw0_ss';
var str_new = str.split('').sort().join('');
var length = 0;
var value = []
var regExp = /(\w)\1+/g
str_new.replace(regExp, (m, $1) => {
	 length = m.length > length ? m.length : length 
})
str_new.replace(regExp, (m, $1) => {
	  m.length === length && value.push($1)
})
console.log('重复项最多的字符是：' + value + '，个数是：' + length);