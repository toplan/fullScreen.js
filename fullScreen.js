/**
 * Created by top on 15-10-23.
 *
 * https://github.com/toplan/fullScreen.js
 */

(function (window) {

    var instances = [];

    function fullScreen(body, opts) {
        this.config = {
            //the element which auto compute min height
            body   : body,

            //the elements which fixed height
            fixed  : [],

            //is reset body height when window resize
            resize : true,

            //plus to body min height
            plus   : 0,

            //minus from body min height
            minus  : 0
        };

        this.init(opts);
    }

    fullScreen.prototype.init = function (opts) {
        for (var key in opts) {
            this.config[key] = opts[key];
        }
        return this;
    };

    fullScreen.prototype.autoResize = function (enable) {
        this.config.resize = enable;
        return this;
    };

    fullScreen.prototype.body = function (ele) {
        if (this.getEle(ele)) {
            this.config.body = ele;
        }
        return this;
    };

    fullScreen.prototype.fixed = function (elements) {
        if (Array.isArray(elements)) {
            this.config.fixed = this.config.fixed.concat(elements);
        } else if (elements.toString()) {
            this.config.fixed.push(elements);
        }
        return this;
    };

    fullScreen.prototype.render = function () {
        if (this.getEle(this.config.body)) {
            this.setBodyHeight();
            instances.push(this);
            return true;
        }
        return false;
    };

    fullScreen.prototype.getEle = function (selector, getAll) {
        return getAll ? document.querySelectorAll(selector) :
                        document.querySelector(selector);
    };

    fullScreen.prototype.getStyle = function (ele) {
        if (ele) {
            return ele.currentStyle || window.getComputedStyle(ele);
        }
        return undefined;
    };

    fullScreen.prototype.getMargin = function (ele, type) {
        var style = this.getStyle(ele);
        if (!style) {
            return 0;
        }
        var marginStyle = type == 'top' ?
            style.marginTop:
            (
                type == 'bottom' ?
                style.marginBottom : 0
            );
        return parseInt('0' + marginStyle);
    };

    fullScreen.prototype.getHeight = function (ele) {
        var mt = this.getMargin(ele, 'top');
        var mb = this.getMargin(ele, 'bottom');
        return (ele ? ele.offsetHeight : 0) + mt + mb;
    };

    fullScreen.prototype.getBrowserHeight = function () {
        return window.innerHeight;
    };

    fullScreen.prototype.computeFixedHeight = function () {
        var h = 0;
        if (this.config.fixed) {
            for (var key in this.config.fixed) {
                var selector = this.config.fixed[key];
                h += this.getHeight(this.getEle(selector));
            }
        }
        return h;
    };

    fullScreen.prototype.computeBodyHeight = function () {
        var BrowserHeight = this.getBrowserHeight();
        var fixedHeight = this.computeFixedHeight();
        return BrowserHeight - fixedHeight + this.config.plus - this.config.minus;
    };

    fullScreen.prototype.setBodyHeight = function () {
        var body = this.getEle(this.config.body);
        var bodyHeight = this.computeBodyHeight();
        body.style.minHeight = bodyHeight + 'px';
    };

    fullScreen.prototype.onResize = function() {
        if (this.config.resize) {
            this.resize();
        }
    };

    fullScreen.prototype.resize = function() {
        this.setBodyHeight();
    };

    fullScreen.prototype.plus = function (num) {
        this.config.plus = parseFloat(num);
        return this;
    };

    fullScreen.prototype.minus = function (num) {
        this.config.minus = parseFloat(num);
        return this;
    };

    window.onresize = function () {
        for (var key in instances) {
            var fs = instances[key];
            fs.onResize();
        }
    };

    window.fullScreen = fullScreen;
})(window);