'use strict';

exports.queryFirst = function (selector) {
    var element;
    if (selector.indexOf('>>>') > -1) {
        var arr = selector.split('>>>');
        element = document.querySelector(arr[0]);
        for (var y = 1; y < arr.length; y++) {
            element = element.shadowRoot.querySelector(arr[y]);
        }
    } else {
        element = document.querySelector(selector);
    }
    return element;
};

exports.queryAll = function (selector) {
    var element;
    if (selector.indexOf('>>>') > -1) {
        var arr = selector.split('>>>');
        element = document.querySelector(arr[0]);
        for (var y = 1; y < arr.length-1; y++) {
            element = element.shadowRoot.querySelector(arr[y]);
        }
        element = element.shadowRoot.querySelectorAll(arr[arr.length-1]);
    } else {
        element = document.querySelectorAll(selector);
    }
    return element;
};

exports.getComputedStyle = function (element, pseudoElement) {
    return getComputedStyle(element, pseudoElement);
};

exports.matchMedia = function (mediaQuery) {
    return matchMedia(mediaQuery);
};

exports.trim = function (str) {
    return str.trim();
};
