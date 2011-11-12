(function ($) {

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
        this.events.before(this.l);
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
                that.events.simpleSuccess(that.loaded);
                that.simpleLoad();
            }).attr('src', that.arr[that.loaded]);
        }
        else {
            that.events.success();
        }
    };

    /*
     * Expose 'Preloader' to global object
     */
    window.Preloader = Preloader;

}(jQuery));