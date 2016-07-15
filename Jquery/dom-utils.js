(function(window, document) {
    'use strict'
    let w = window;
    let d = document;
    let Utils = function(selector) {
        return new Utils.prototype.init(selector);
    }

    Utils.prototype = {
            constructor: Utils,
            length: 0,
            splice: [].splice,
            selector: '',
            init: function(selector) {
                let that = this;
                that.selector = selector;
                that.objs = [];
                query(selector).forEach(function(e, index) {
                    //this 
                    that.objs.push(e);
                })
                return that;
            },
            val: function(value) {
                if (value === undefined) {
                    return this.objs[0].value;
                } else {
                    this.objs[0].value = value;
                }
                return this;
            },
            html: function(html) {
                if (html) {
                    this.objs[0].innerHTML = html;
                } else {
                    return this.objs[0].innerHTML;
                };
                return this;
            },
            text:function(text){
            	if(text){
                  this.objs[0].textContent=text;
            	}else{
                 return this.objs[0].textContent;
            	}
            	return this;
            },
            addClass: function(cls) {
                this.objs.forEach((e, index) => {
                    if (e.classList) {
                        e.classList.add(cls)
                    } else {
                        //\s匹配一个空白符，包括空格、制表符、换页符、换行符和其他 Unicode 空格。
                        let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                        if (!e.className.match(reg))
                            e.className += ' ' + cls;
                    }
                })
                return this;
            },
            removeClass: function(cls) {
                this.objs.forEach((e, index) => {
                    if (e.classList) {
                        if (e.classList.contains(cls)) {
                            e.classList.remove(cls);
                        }
                    } else {
                        let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                        if (!e.className.match(reg))
                            e.className = e.className.replace(cls, '');
                    }
                });
                return this;
            },
            toggleClass: function(cls) {
                this.objs.forEach((e, index) => {
                    if (e.classList) {
                        if (e.classList.contains(cls)) {
                            e.classList.remove(cls);
                        } else {
                            e.classList.add(cls);
                        }
                    } else {
                        let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                        if (!e.className.match(reg)) {
                            e.className = e.className.replace(cls, '');
                        } else {
                            e.className += e.className + ' ' + cls;
                        }

                    }
                });
                return this;
            },
            on: function(type, fn) {
                for (var i = 0; i < this.objs.length; i++) {
                    if (!this.objs[i].guid) {
                        this.objs[i].guid = ++Utils.guid;
                        //guid 不存在，给当前dom一个guid
                        Utils.Events[Utils.guid] = {};
                        //给Events[guid] 开辟一个新对象
                        Utils.Events[Utils.guid][type] = [fn];
                        //给这个新对象，赋予事件数组 "click" : [fn1,...]
                        bind(this.objs[i], type, this.objs[i].guid); //绑定事件
                    } else { //guid存在的情况
                        var id = this.objs[i].guid;
                        if (Utils.Events[id][type]) {
                            //如果这存在是当前事件已经存过，不用在绑定事件
                            Utils.Events[id][type].push(fn);
                        } else {
                            //这是存新事件，所以需要重新绑定一次
                            Utils.Events[id][type] = [fn];
                            bind(this.objs[i], type, id);
                        }
                    }
                }

            },
            trigger: function(type) {
                if (Utils.CusomEvens[type]) {
                    this.objs.forEach((e, index) => {
                        e.dispatchEvent(Utils.CusomEvens[type]);
                    })
                }
            }
        }
        // important 
    Utils.prototype.init.prototype = Utils.prototype;
    Utils.Events = []; //事件绑定存放的事件
    Utils.CusomEvens = {}; //自定义事件
    Utils.addCusomEvens = function(eventName, data, bubbles, cancelable) {
        bubbles = bubbles ? bubbles : true;
        cancelable = cancelable ? cancelable : true;
        let customEvent = new CustomEvent(eventName, {
            //当事件初始化时传递的数据.
            detail: data,
            //一个布尔值,表明该事件是否会冒泡.
            bubbles: bubbles,
            //一个布尔值,表明该事件是否可以被取消.
            cancelable: cancelable
        });
        Utils.CusomEvens[eventName] = customEvent;
    }
    Utils.guid = 0; //事件绑定的唯一标识
    function bind(dom, type, guid) {
        dom.addEventListener(type, function(e) {
            for (var i = 0; i < Utils.Events[guid][type].length; i++) {
                Utils.Events[guid][type][i].call(dom, e); //正确的dom回调
            }
        }, false);
    }
    var query = function(selector) {
        // ^ 是以什么开头
        // \w 匹配任意来自基本拉丁字母表中的字母数字字符，还包括下划线。等价于 [A-Za-z0-9_]。
        // (x)匹配 x 并且捕获匹配项。 这被称为捕获括号（capturing parentheses）。
        // 例如，/(foo)/ 匹配且捕获 "foo bar." 中的 "foo"。
        // 被匹配的子字符串可以在结果数组的元素 [1], ..., [n] 中找到，
        // 或在被定义的 RegExp 对象的属性 $1, ..., $9 中找到。
        // ? 的使用：http://www.cnblogs.com/graphics/archive/2010/06/02/1749707.html
        // 问号可以表示重复前面内容的0次或一次，也就是要么不出现，要么出现一次。
        var reg = /^(#)?(\.)?(\w+)$/img;
        var regResult = reg.exec(selector);
        var result = [];
        //如果是id选择器
        if (regResult[1]) {
            if (regResult[3]) {
                if (typeof document.querySelector === "function") {
                    result.push(document.querySelector(selector));
                } else {
                    result.push(document.getElementById(regResult[3]));
                }
            }
        }
        //如果是class选择器
        else if (regResult[2]) {
            if (regResult[3]) {
                if (typeof document.getElementsByClassName === 'function') {
                    var doms = document.getElementsByClassName(regResult[3]);
                    if (doms) {
                        result = converToArray(doms);
                    }
                }
                //如果不支持getElementsByClassName函数
                else {
                    var allDoms = document.getElementsByTagName("*");
                    for (var i = 0, len = allDoms.length; i < len; i++) {
                        if (allDoms[i].className.search(new RegExp(regResult[2])) > -1) {
                            result.push(allDoms[i]);
                        }
                    }
                }
            }
        }
        //如果是标签选择器
        else if (regResult[3]) {
            var doms = document.getElementsByTagName(regResult[3].toLowerCase());
            if (doms) {
                result = converToArray(doms);
            }
        }
        return result;
    }

    function converToArray(nodes) {
        var array = null;
        try {
            array = Array.prototype.slice.call(nodes, 0); //针对非IE浏览器         
        } catch (ex) {
            array = new Array();
            for (var i = 0, len = nodes.length; i < len; i++) {
                array.push(nodes[i])
            }
        }
        return array;
    }
    window.$ = Utils;

})(window, document)
