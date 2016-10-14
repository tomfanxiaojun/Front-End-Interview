// 创建一个闭包     
(function($) {
    // 插件的定义     
    $.fn.hilight = function(options) {
        debug(this);
        // build main options before element iteration     
        var opts = $.extend({}, $.fn.hilight.defaults, options)
            // iterate and reformat each matched element     
        return this.each(function() {
            $this = $(this);
            // build element specific options     
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            // update element styles     
            $this.css({
                backgroundColor: o.background,
                color: o.foreground
            });
            var markup = $this.html();
            // call our format function     
            markup = $.fn.hilight.format(markup);
            $this.html(markup);
        });
    };
    // 私有函数：debugging     
    function debug($obj) {
        if (window.console && window.console.log)
            window.console.log('hilight selection count: ' + $obj.size());
    };
    // 定义暴露format函数     
    $.fn.hilight.format = function(txt) {
        return '<strong>' + txt + '</strong>';
    };
    // 插件的defaults     
    $.fn.hilight.defaults = {
        foreground: 'red',
        background: 'yellow'
    };
    // 闭包结束     
})(jQuery);
