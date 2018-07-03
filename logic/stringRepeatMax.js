var str = "caibaojiian.com";
String.prototype.repeatMax = String.prototype.repeatMax || function() {
    return this.split('').reduce((pre, nex, index, arr) => {
        pre.values[nex] = pre.values[nex] ? (pre.values[nex] + 1) : 1;
        if (pre.values[nex] > pre.maxValue) {
            pre.maxValue = pre.values[nex]
        }
        if (index === arr.length -1) {
          pre.maxValues =  Object.keys(pre.values).filter(key => pre.values[key] === pre.maxValue)
          return {
            maxValue: pre.maxValue,
            maxValues: pre.maxValues
          }
        }
        return pre
    }, { maxValue: 0, maxValues: [],  values: {}});
};
console.log(str.repeatMax())
