/**
 * Created by top on 15-10-23.
 *
 * https://github.com/toplan/fullScreen.js
 */

(function () {

   /*
    * default config
    */
    var config = {
        //print log
        debug  : false,

        //reset body height when window resize
        resize : true
    };

    this.init = function (opts) {
        for (var key in opts) {
            config[key] = opts[key];
        }
        return this;
    };

    this.debug = function (enable) {
        config.debug = enable;
        return this;
    };

    this.resize = function (enable) {
        config.resize = enable;
        return this;
    };

    this.header = function (selector) {
        config.header = selector;
        return this;
    };

    this.body = function (selector) {
        config.body = selector;
        return this;
    };

    this.footer = function (selecter) {
        config.footer = selecter;
        return this;
    };

    this.render = function () {
        _log(config);
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
        return parseInt(marginStyle);
    };

    this.getBorder = function (ele, type) {
        var style = this.getStyle(ele);
        var borderWidthStyle = type == 'top' ?
            style.borderTopWidth :
            (
                type == 'bottom' ?
                style.borderBottomWidth : 0
            );
        return parseInt(borderWidthStyle);
    };

    this.getHeight = function (ele) {
        var mt = this.getMargin(ele, 'top');
        var mb = this.getMargin(ele, 'bottom');
        var bt = this.getBorder(ele, 'top');
        var bb = this.getBorder(ele, 'bottom');
        return ele.offsetHeight + mt + mb + bt + bb;
    };

    this.getBrowserHeight = function () {
        return window.innerHeight;
    };

    this.computeBodyHeight = function () {
        var header = 0;
        var footer = 0;
        if (config.header) {
            header = this.getHeight(this.getEle(config.header));
        }
        if (config.footer) {
            footer = this.getHeight(this.getEle(config.footer));
        }
        var BrowserHeight = this.getBrowserHeight();
        _log('browser inner height:' + BrowserHeight);
        _log('header height:' + header);
        _log('footer height:' + footer);
        return BrowserHeight - header - footer;
    };

    this.setBodyHeight = function () {
        var body = this.getEle(config.body);
        var bodyHeight = this.computeBodyHeight();
        body.style.minHeight = bodyHeight + 'px';
        _log('set body min height:' + bodyHeight);
    };

    this.onResize = function() {
        if (config.resize) {
            this.setBodyHeight();
        }
    };

    function _log(msg) {
        if (config.debug) {
            try {
                console.log(msg);
            } catch (error) {
                throw error;
            }
        }
    }

    window.onresize = this.onResize;

    window.fullScreen= window.fullscreen = this;
})();