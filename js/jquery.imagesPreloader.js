/*
 * Images preloader
 * Author: @tiery_
 *
 * Requires: jQuery
 *
 * Arguments
 * @arr {Array} Array of images to preload
 * @events {Object} Events' functions (before, simpleSuccess, success)
 *
 * Events descritpions
 * @before: trigger when Preloader has been initialized, before preloading images
 * @simpleSuccess: trigger each time an image is successfully loaded
 * @success: trigger when all images have been successfully loaded
 */

/*
 * Example :
 *
 * var myPreloader = new Preloader(['image1.jpg', 'image2.jpg'], {
 *     before: function(){
 *
 *     },
 *     simpleSuccess: function(){
 *
 *     },
 *     success: function(){
 *
 *     }
 * });
*/
(function ($) {
    /*
     * Preloader constructor
     */
    var Preloader = function (arr, events) {
        /*
         * Si l'argument passé n'est pas un tableau
         */
        if (!$.isArray(arr)) {
            return;
        }

        /*
         * Handle arguments
         */
        this.arr = arr;
        this.events = {
            before: function () {},
            simpleSuccess: function () {},
            success: function () {}
        };
        $.extend(this.events, events);

        /*
         * Initial values
         */
        this.loaded = 0;
        this.l = this.arr.length;

        /*
         * Initializing
         */
        this.init();
    };

    /*
     * Prototype shortcut
     */
    Preloader.fn = Preloader.prototype;

    /*
     * Init function
     */
    Preloader.fn.init = function () {
        this.events.before.apply(this);
        this.simpleLoad();
    };

    /*
     * Core function
     */
    Preloader.fn.simpleLoad = function () {
        var that = this,
            img = new Image();
        if (that.loaded < that.l) {
            $(img).load(function () {
                that.loaded++;
                that.events.simpleSuccess.apply(that);
                that.simpleLoad();
            }).attr('src', that.arr[that.loaded]);
        }
        else {
            that.events.success.apply(that);
        }
    };

    /*
     * Expose 'Preloader' to global object
     */
    window.Preloader = Preloader;

}(jQuery));