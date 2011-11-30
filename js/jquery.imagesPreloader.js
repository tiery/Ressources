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
 * var myPreloader = new Preloader(['image1.jpg', 'image2.jpg']);
 * myPreloader.before        = function () {};
 * myPreloader.simpleSuccess = function () {};
 * myPreloader.success       = function () {};
 *     
*/
(function (context, $) {
    /*
     * Preloader constructor
     */
    var Preloader = function (arr) {
        /*
         * Si l'argument passé n'est pas un tableau
         */
        if (!arr || !$.isArray(arr)) {
            return;
        }

        /*
         * Initial values
         */
        this.arr = arr;
        this.l = this.arr.length;
        this.loaded = 0;
    };

    /*
     * Prototype shortcut
     */
    Preloader.fn = Preloader.prototype;

    /*
     * Events functions
     */
    Preloader.fn.before = function () {};
    Preloader.fn.simpleSuccess = function () {};
    Preloader.fn.success = function () {};

    /*
     * setLoad function
     */
    Preloader.fn.setLoad = function () {
        var that = this,
            img = new Image();
        if (that.loaded < that.l) {
            $(img).load(function(){
                that.simpleLoad.apply(that);
            }).attr('src', that.arr[that.loaded]);
        }
        else {
            that.success.apply(that);
        }
    };
    
    /*
     * simpleLoad callback function
     */
    Preloader.fn.simpleLoad = function () {
        this.simpleSuccess.apply(this, [this.loaded]);
        this.loaded++;
        this.setLoad();
    };
    
    /*
     * init function
     */
    Preloader.fn.init = function () {
        this.before.apply(this, [this.arr]);
        this.setLoad();
    };

    /*
     * Expose 'Preloader' to execution context
     */
    context.Preloader = Preloader;

}(this, jQuery));