// refs:http://www.codingserf.com/index.php/2015/05/javascript-design-patterns-singleton/
var Namespace = {};
Namespace.homepage = {
    init: function() { console.log('homepage init'); },
    method1: function() { console.log('homepage method1'); },
    method2: function() { console.log('homepage method2'); }
}

Namespace.contactpage = {
    init: function() { console.log('contactpage init'); },
    method1: function() { console.log('contactpage method1'); },
    method2: function() { console.log('contactpage method2'); }
}

Namespace.pageutil = {
    getPageName: function(pageIndex) {
        // 返回当前页面的标识符
        return pageIndex == 1 ? 'homepage' : 'contactpage';
    }
}

var pageName = Namespace.pageutil.getPageName(1);

Namespace[pageName].init();
