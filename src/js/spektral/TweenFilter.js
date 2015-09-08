(function(window) {
    'use strict';

    var tf = {};

    //Public
    tf.blur = function(el, speed, params) {
        var
            blurObj = {
                blur: getParameter(params, 'start', 0)
            },
            paramsObj = {
                onUpdate: applyFilter,
                onUpdateParams: [el, 'blur', blurObj]
            },
            key;
        for (key in params) {
            paramsObj[key] = params[key];
        }
        tween(blurObj, speed, paramsObj);
    };

    tf.dropShadow = function(el, speed, params) {
        var 
            dsObj = {
                start: getParameter(params, 'start', 0),
                offsetX: getParameter(params, 'offsetX', 0),
                offsetY: getParameter(params, 'offsetY', 0),
                blur: getParameter(params, 'blur', 0),
                color: getParameter(params, 'color', '#000')   
            },
            paramsObj = {
                onUpdate: applyFilter,
                onUpdateParams: [el, 'drop-shadow', dsObj]
            },
            key;
        for (key in params) {
            paramsObj[key] = params[key];
        }
        tween(dsObj, speed, paramsObj);
    };


    //Private
    function tween(obj, speed, paramsObj) {
        TweenLite.to(obj, speed, paramsObj);
    }

    function applyFilter(el, type, obj) {
        var fString, k;

        for (k in obj) {
            console.log(k + ' : ' + obj[k]);
        }


        fString = type + "(" + obj[type] + "px)";

        TweenLite.set(el, {
            webkitFilter: fString,
            filter: fString
        });
    }

    function getParameter(obj, val, defaultParam) {
        var retrievedParam;
        if (obj !== undefined) {
            if (obj[val] === undefined) {
                retrievedParam = defaultParam;
            } else {
                retrievedParam = obj[val];
            }
        } else {
            retrievedParam = defaultParam;
        }
        return retrievedParam;
    };

    window.TweenFilter = tf;
}(window));
