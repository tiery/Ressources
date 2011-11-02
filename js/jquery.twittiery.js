/*!
 * jQuery Twittiery
 * Author: @tiery_
 * Licensed under the MIT license
 * Use jQuery lightweight plugin boilerplate by @ajpiano
 *
 * Displays a Twitter feed from one or more accounts
 */

(function ($, win, doc, undefined) {

    // Create the defaults once
    var pluginName = 'twittiery',
        defaults = {
            user : 'tiery_',
            count: 5,
            tpl: {
                user : '<h1>%user%\'s tweets</h1>',
                list : '<ul>%list%</ul>',
                avat : '<aside class="avatar"><img src="%avat%" alt="" /></aside>',
                itemWrap : '<li><article class="cf">%itemWrap%</article></li>',
                item : '<div class="content">%item%</div>'
        	}
        },
        baseUrl = 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=';

    // The actual plugin constructor
    var Plugin = function (element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this.defaults = defaults;
        this.name = pluginName;
        this.init();
    };
    
    // Shortcut for Plugin object prototype
    Plugin.fn = Plugin.prototype;
    
    // Plugin privates functions
    Plugin.fn.createTpl = function(tplType, content){
        var tpl = this.defaults.tpl[tplType];
        return tpl.replace('%' + tplType + '%', content);
    };
    
    // Initialization logic
    Plugin.fn.init = function () {
        var that = this,
            output = that.createTpl('user', that.defaults.user),
            url = baseUrl + this.defaults.user + '&count=' + this.defaults.count + '&callback=?';
        $(that.element).addClass('loading');
        $.getJSON(url, function(res){
            var temp = '';
            for (var i=0, l=res.length; i<l; i++ ) {
                var avat = that.createTpl('avat', res[i].user.profile_image_url),
                    text = that.createTpl('item', res[i].text);
                temp += that.createTpl('itemWrap', avat + text);
            }
            output += that.createTpl('list', temp);
            that.element.innerHTML = output;
            $(that.element).removeClass('loading');
        });
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName);
                new Plugin(this, options);
            }
        });
    };

})(jQuery, window, document);
