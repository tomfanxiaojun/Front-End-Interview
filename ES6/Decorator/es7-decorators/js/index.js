var _dec, _dec2, _dec3, _desc, _value, _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger(elm) {
        _classCallCheck(this, Logger);

        this.template = '<div class="alert alert-${type} alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> ${msg}</div>';

        this.elm = $(elm);
    }

    _createClass(Logger, [{
        key: '$$template',
        value: function $$template(level, msg) {
            return this.template.replace('${type}', level).replace('${msg}', level + ': ' + msg);
        }
    }, {
        key: 'info',
        value: function info(msg) {
            this.elm.append(this.$$template('info', msg));
        }
    }, {
        key: 'debug',
        value: function debug(msg) {
            this.elm.append(this.$$template('success', msg));
        }
    }, {
        key: 'warn',
        value: function warn(msg) {
            this.elm.append(this.$$template('warning', msg));
        }
    }, {
        key: 'error',
        value: function error(msg) {
            this.elm.append(this.$$template('danger', msg));
        }
    }]);

    return Logger;
}();

var log = function log(type) {
    var logger = new Logger('#console');
    return function (target, name, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            logger.info('(' + type + ') before function execute: ' + name + '(' + args + ') = ?');
            var ret = void 0;
            try {
                ret = method.apply(target, args);
                logger.info('(' + type + ')after function execute success: ' + name + '(' + args + ') => ' + ret);
            } catch (error) {
                logger.error('(' + type + ') function execute error: ' + name + '(' + args + ') => ' + error);
            } finally {
                logger.info('(' + type + ') function execute done: ' + name + '(' + args + ') => ' + ret);
            }
            return ret;
        };
    };
};

var MyClass = (_dec = log('MyClass add'), _dec2 = log('MyClass product'), _dec3 = log('MyClass error'), (_class2 = function () {
    function MyClass() {
        _classCallCheck(this, MyClass);
    }

    _createClass(MyClass, [{
        key: 'add',
        value: function add(a, b) {
            return a + b;
        }
    }, {
        key: 'product',
        value: function product(a, b) {
            return a * b;
        }
    }, {
        key: 'error',
        value: function error() {
            throw 'Something is wrong!';
        }
    }]);

    return MyClass;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'add', [_dec], Object.getOwnPropertyDescriptor(_class2.prototype, 'add'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'product', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'product'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'error', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'error'), _class2.prototype)), _class2));


var my = new MyClass();
my.add(2, 3);
my.product(2, 3);
my.error(2, 3);