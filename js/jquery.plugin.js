/*
 * [PLUGIN NAME]
 * jQuery plugin
 */
(function ($) {

    var pluginName = '',
        defaults = {};

    // Plugin constructor
    var Plugin = function (element, options, i) {
        
        // Plugin exposed to window
        window[pluginName + i] = this;

        // DOM elements
        this.$element = $(element).attr('data-plugin-id', pluginName + i);

        // Relate slider plugin
        // this.Slider = window[this.$element.find('[data-slider="element"]').attr('data-plugin-id')];

        // Properties
        // this.id    = this.$element.attr('data-slideshow-id');

        // Defaults -> options
        this.opts = $.extend({}, defaults, options);

        // Go!
        this.init();
    };
    
    // Shortcut for Plugin object prototype
    Plugin.fn = Plugin.prototype;
    
    // Initialization logic
    Plugin.fn.init = function () {
        var that = this;
        
        // Events init
        that.events();
    };

    // Plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function (i) {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options, i));
            }
        });
    };

})(jQuery);