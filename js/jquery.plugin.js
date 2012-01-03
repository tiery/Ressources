;(function($) {

    var pluginName = 'pxTab',
        defaults = {
            activeclass: 'active'
        };

    function Plugin(element, options) {
        this.element = element;
		this.options = $.extend({}, defaults, options) ;
		
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
    }
    
    Plugin.fn.init = Plugin.prototype.init;

    Plugin.fn.init = function() {
        // Let's go buddy
    };

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery);