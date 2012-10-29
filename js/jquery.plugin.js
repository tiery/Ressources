/*
 * [plugin_name + description]
 */
(function ($) {

    'use strict';

    /*
     * Params
     */
    var pluginName = '[plugin_name]',
        defaults = {};
        
    /*
     * Plugin constructor
     */
    var Plugin = function (element, options, i) {
        
        // Plugin exposed to window
        /* window[pluginName + i] = this; */
        
        // Main element
        this.$element = $(element).attr('data-' + pluginName + '-id', pluginName + i).addClass(pluginName.toLowerCase() + '-init');
        
        // Options
        var opts  = $.extend({}, options, this.$element.data(pluginName + '-options')); // element options -> plugin init options
        this.opts = $.extend({}, defaults, opts); // options -> default
        
        // DOM elements
        /* this.$items    = this.$element.find('li'); */
                
        // Properties
        /* this.status   = 'wait'; // wait | busy */
        
        // Go!
        this.init();
    };
    
    /*
     * Shortcut for Plugin object prototype
     */
    Plugin.fn = Plugin.prototype;
    
    /*
     * Initialization logic
     */
    Plugin.fn.init = function () {
        var that = this;
        
        // Events init
        that.events();
    };
    
    /*
     * Evenements
     */
    Plugin.fn.events = function () {
        var that = this;
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

}(jQuery));