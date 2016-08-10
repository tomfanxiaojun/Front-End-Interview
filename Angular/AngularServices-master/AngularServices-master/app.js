var app = angular.module('myApp', []);
//http://toutiao.com/i6208036808715256322/
/*---------SERVICE EXAMPLE--------*/
app.controller('myServiceCtrl', function($scope, myService) {
    $scope.data = {};
    $scope.updateArtist = function() {
        myService.setArtist($scope.data.artist);
    };

    $scope.submitArtist = function() {
        myService.callItunes()
            .then(function(data) {
                $scope.data.artistData = data;
            }, function(data) {
                alert(data);
            })
    }
});

app.service('myService', function($http, $q) {
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function() {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK'
        return _finalUrl;
    }

    this.setArtist = function(artist) {
        _artist = artist;
    }

    this.getArtist = function() {
        return _artist;
    }

    this.callItunes = function() {
        makeUrl();
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url: _finalUrl
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function() {
            deferred.reject('There was an error')
        })
        return deferred.promise;
    }

});
/*---------END SERVICE EXAMPLE--------*/



/*---------FACTORY EXAMPLE--------*/
app.controller('myFactoryCtrl', function($scope, myFactory) {
    $scope.data = {};
    $scope.updateArtist = function() {
        myFactory.setArtist($scope.data.artist);
    };

    $scope.submitArtist = function() {
        myFactory.callItunes()
            .then(function(data) {
                $scope.data.artistData = data;
            }, function(data) {
                alert(data);
            })
    }
});

app.factory('myFactory', function($http, $q) {
    var service = {};
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function() {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK'
        return _finalUrl;
    }

    service.setArtist = function(artist) {
        _artist = artist;
    }

    service.getArtist = function() {
        return _artist;
    }

    service.callItunes = function() {
        makeUrl();
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url: _finalUrl
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function() {
            deferred.reject('There was an error')
        })
        return deferred.promise;
    }

    return service;
});
/*---------END FACTORY EXAMPLE--------*/



/*---------PROVIDER EXAMPLE--------*/
app.controller('myProviderCtrl', function($scope, myProvider) {
    $scope.data = {};
    $scope.updateArtist = function() {
        myProvider.setArtist($scope.data.artist);
    };

    $scope.submitArtist = function() {
        myProvider.callItunes()
            .then(function(data) {
                $scope.data.artistData = data;
            }, function(data) {
                alert(data);
            })
    }

    $scope.data.thingFromConfig = myProvider.thingOnConfig;
});

app.provider('myProvider', function() {
    var baseUrl = 'https://itunes.apple.com/search?term=';
    var _artist = '';
    var _finalUrl = '';

    //Going to set this property on the config function below
    this.thingFromConfig = '';

    var makeUrl = function() {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + '&callback=JSON_CALLBACK'
        return _finalUrl;
    }

    this.$get = function($http, $q) {
        return {
            callItunes: function() {
                makeUrl();
                var deferred = $q.defer();
                $http({
                    method: 'JSONP',
                    url: _finalUrl
                }).success(function(data) {
                    deferred.resolve(data);
                }).error(function() {
                    deferred.reject('There was an error')
                })
                return deferred.promise;
            },
            setArtist: function(artist) {
                _artist = artist;
            },
            getArtist: function() {
                return _artist;
            },
            thingOnConfig: this.thingFromConfig
        }
    }
});

app.config(function(myProviderProvider) {
    //Providers are the only service you can pass into app.config
    myProviderProvider.thingFromConfig = 'This sentence was set in app.config. Providers are the only service that can be passed into config. Check out the code to see how it works';
});

// directive
app.controller('myDirectiveCtrl', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
    $scope.number = "1111";
    $scope.watchvalue = 'old value';
    var unwatch = $scope.$watch("watchvalue", function(newValue, oldValue) {
        //do sth...
        if (newValue=='hi') {
            //当不需要的时候,及时移除watch
            unwatch();
        }
        console.log('new Value:'+newValue)
    });
});

//directives.js中定义myAttr  
//http://blog.51yip.com/jsjquery/1607.html
app.directive('myAttr', function() {
    return {
        restrict: 'E',
        scope: {
            customerInfo: '=info'
        },
        template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}}<br>' +
            'Name: {{vojta.name}} Address: {{vojta.address}}'
    };
});
//directives.js中定义myAttr  
app.directive('myAttr01', function() {
    return {
        //由结果可以看出来，controller先运行，compile后运行，link不运行。
        //由结果可以看出来，controller先运行，link后运行，link和compile不兼容。
        restrict: 'E',
        template: 'Name: {{customerInfo.name}} Address: {{customerInfo.address}}<br>' +
            'Name: {{vojta.name}} Address: {{vojta.address}} <br>',
        controller: function($scope, $element) {
            $scope.number = $scope.number + "22222 ";
        },
        link: function(scope, el, attr) {
            //link的值是一个函数，用来定义指令的行为。从传入的参数中可以获取到当前元素，我们便可以拿当前元素开刀了
            scope.number = scope.number + "33333 ";
        },
        compile: function(element, attributes) {
            //跟scope数据无关的操作放在compile阶段，它只执行一次。
            //除了directive外其他地方，特别是controller里面不要操作dom， 尤其是绑定到scope后，便是灾难。
            //改变以前使用JQuery那样以DOM为中心的思维，拥抱以数据为中心的思维。参见
            // 由结果可以看出来，controller先运行，compile后运行，link不运行(link就是compile中的postLink)。
            // 由结果可以看出来，controller先运行，link后运行，link和compile不兼容。compile改变dom,link事件的触发和绑定
            return {
                pre: function preLink(scope, element, attributes) {
                    scope.number = scope.number + "44444 ";
                },
                post: function postLink(scope, element, attributes) {
                    scope.number = scope.number + "55555 ";
                }
            };
        }
    }
});
app.directive('fractionNum', function() {
    //http://hudeyong926.iteye.com/blog/2073488
    return {
        link: function(scope, elements, attrs, controller) {
            // //link的值是一个函数，用来定义指令的行为。从传入的参数中可以获取到当前元素，我们便可以拿当前元素开刀了
            elements[0].onkeyup = function() {
                if (isNaN(this.value) || this.value < 1 || this.value > 10) {
                    this.style.borderColor = 'red';
                } else {
                    this.style.borderColor = '';
                }
            };
        }
    };
});
app.directive('log', function() {
    return {
        controller: function($scope, $element, $attrs, $transclude) {
            console.log($attrs.log + ' (controller)');
        },
        compile: function compile(tElement, tAttributes) {
            console.log(tAttributes.log + ' (compile)');
            return {
                pre: function preLink(scope, element, attributes) {
                    console.log(attributes.log + ' (pre-link)');
                },
                post: function postLink(scope, element, attributes) {
                    console.log(attributes.log + ' (post-link)');
                }
            };
        },
        link: function(scope, el, attrs) {
            //link的值是一个函数，用来定义指令的行为。从传入的参数中可以获取到当前元素，我们便可以拿当前元素开刀了
            console.log(attrs.log + ' (post-link)');
        },
    };

});
/*https://segmentfault.com/a/1190000002773689 Scope*/
app.directive("scopeDirective", function() {
    var obj = {
        restrict: "AE",
        scope: {
            name: '@myName', //这是一个单项绑定的前缀标识符
            //使用方法：在元素中使用属性，好比这样<div my-directive my-name="{{name}}"></div>，注意，属性的名字要用-将两个单词连接，因为是数据的单项绑定所以要通过使用{{}}来绑定数据。
            age: '=', //这是一个双向数据绑定前缀标识符
            //使用方法：在元素中使用属性，好比这样<div my-directive age="age"></div>,注意，数据的双向绑定要通过=前缀标识符实现，所以不可以使用{{}}。
            changeAge: '&changeMyAge' //这是一个绑定函数方法的前缀标识符
                //使用方法：在元素中使用属性，好比这样<div my-directive change-my-age="changeAge()"></div>，注意，属性的名字要用-将多个个单词连接。
        },
        replace: true,
        template: "<div class='my-directive'>" +
            "<h3>下面部分是我们创建的指令生成的</h3>" +
            "我的名字是：<span ng-bind='name'></span><br/>" +
            "我的年龄是：<span ng-bind='age'></span><br/>" +
            "在这里修改名字：<input type='text' ng-model='name'><br/>" +
            "<button ng-click='changeAge()'>修改年龄</button>" +
            " </div>"
    }
    return obj;
});

/*http://www.angularjs.cn/A0a6  理解$watch ，$apply 和 $digest --- 理解数据绑定过程*/
/**
 * http://camnpr.com/javascript/1696.html 性能优化
 */
