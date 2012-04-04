/*
 * [PLUGIN NAME]
 * jQuery plugin
 */
(function ($) {

    var pluginName = '',
        defaults = {};

    // Plugin constructor
    var Plugin = function (element, options) {
        this.$element = $(element);
        this.opts = $.extend({}, defaults, options);
        this.init();
    };
    
    // Shortcut for Plugin object prototype
    Plugin.fn = Plugin.prototype;
    
    // Initialization logic
    Plugin.fn.init = function () {
        var that = this;
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