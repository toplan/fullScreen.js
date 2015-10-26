/**
 * Created by top on 15-10-23.
 *
 * https://github.com/toplan/fullScreen.js
 */

(function (window) {

    function fullScreen(window) {
       /*
        * default config
        */
        var config = {
            //reset body height when window resize
            resize : true,

            //the elements which fixed height
            fixed  : []
        };

        this.init = function (opts) {
            for (var key in opts) {
                config[key] = opts[key];
            }
            return this;
        };

        this.resize = function (enable) {
            config.resize = enable;
            return this;
        };

        this.body = function (ele) {
            config.body = ele;
            return this;
        };

        this.fixed = function (elements) {
            if (Array.isArray(elements)) {
                config.fixed = config.fixed.concat(elements);
            } else if (elements.toString()) {
                config.fixed.push(elements);
            }
            return this;
        };

        this.render = function () {
            if (!config.body) {
                throw new Error('you does`t set body element`s selector,please use method `body()` to set.');
            }
            this.setBodyHeight();
        };

        this.getEle = function (selector, getAll) {
            if (getAll) {
                return document.querySelectorAll(selector);
            }
            return document.querySelector(selector);
        };

        this.getStyle = function (ele) {
            return ele.currentStyle || window.getComputedStyle(ele);
        };

        this.getMargin = function (ele, type) {
            var style = this.getStyle(ele);
            var marginStyle = type == 'top' ?
                style.marginTop:
                (
                    type == 'bottom' ?
                    style.marginBottom : 0
                );
            return parseInt('0' + marginStyle);
        };

        this.getBorder = function (ele, type) {
            var style = this.getStyle(ele);
            var borderWidthStyle = type == 'top' ?
                style.borderTopWidth :
                (
                    type == 'bottom' ?
                    style.borderBottomWidth : 0
                );
            return parseInt('0' + borderWidthStyle);
        };

        this.getHeight = function (ele) {
            var mt = this.getMargin(ele, 'top');
            var mb = this.getMargin(ele, 'bottom');
            return ele.offsetHeight + mt + mb;
        };

        this.getBrowserHeight = function () {
            return window.innerHeight;
        };

        this.computeFixedHeight = function () {
            var h = 0;
            if (config.fixed) {
                for (var key in config.fixed) {
                    var selector = config.fixed[key];
                    h += this.getHeight(this.getEle(selector));
                }
            }
            return h;
        };

        this.computeBodyHeight = function () {
            var BrowserHeight = this.getBrowserHeight();
            var fixedHeight = this.computeFixedHeight();
            return BrowserHeight - fixedHeight;
        };

        this.setBodyHeight = function () {
            var body = this.getEle(config.body);
            var bodyHeight = this.computeBodyHeight();
            body.style.minHeight = bodyHeight + 'px';
        };

        this.onResize = function() {
            if (config.resize) {
                this.setBodyHeight();
            }
        };
    }

    var fs = new fullScreen(window);

    window.onresize = function () {
        fs.onResize();
    };

    window.full = window.fs = fs;
})(window);