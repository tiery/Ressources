/*
 * [PLUGIN NAME]
 * jQuery plugin
 */
(function ($) {

    var pluginName = '',
        defaults = {};

    // Plugin constructor
    var Plugin = function (element, options) {
        var that = this;
        that.$element = $(element);
        that.opts = $.extend({}, defaults, options);
        that.init();
    };
    
    // Shortcut for Plugin object prototype
    Plugin.fn = Plugin.prototype;
    
    // Initialization logic
    Plugin.fn.init = function () {
        var that = this;
        // DOM Elements
        // Element specific variables
    };

    // Plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery);