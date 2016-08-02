/*
JS 判断字符串出现最懂的字符，并统计次数
 */
function countStr(str) {
    var charList = str.split('');
    var objs = {};
    var result;
    charList.forEach((e) => {
        if (objs[e]) {
            objs[e] = objs[e] + 1;
        } else {
            objs[e] = 1;
        }
    })
    for (key in objs) {
        if (!result) {
            result = {};
            result.count = objs[key];
            result.names = [];
            result.names.push(key);
        } else {
            if (objs[key] > result.count) {
                result.count = objs[key];
                result.names = [];
                result.names.push(key);
            } else if (objs[key] == result.count) {
                result.names.push(key);
            }
        }

    }
    return result;
}

var str = 'a';
console.log(countStr(str));


