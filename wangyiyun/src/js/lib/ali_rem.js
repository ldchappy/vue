/**
 * Created by ldc on 2018/1/21.
 */
var FS = {};

(function(win, FS) {

    var doc = win.document;

    var docEl = doc.documentElement;

    var metaEl = doc.querySelector('meta[name="viewport"]');

    var dpr = 1;

    var scale = 1;

    var fontBase = 16;

    if (window.devicePixelRatio >= 2) {

        scale *= 0.5;

        dpr *= 2;

    }

    docEl.setAttribute('data-dpr', dpr);

    metaEl.setAttribute('content', 'initial-scale=' + scale + ', width=device-width, maximum-scale=' + scale + ', user-scalable=no');

    function refreshRem() {

        var width = docEl.getBoundingClientRect().width;

        var rem = width / 10;

        docEl.style.fontSize = rem + 'px';

        FS.rem = rem;

    }

    var tid = null;

    win.addEventListener('resize', function() {

        clearTimeout(tid);

        tid = setTimeout(refreshRem, 300);

    }, false);

    if (doc.readyState === 'complete') {

        doc.body.style.fontSize = fontBase * dpr + 'px';

    } else {

        doc.addEventListener('DOMContentLoaded', function(e) {

            doc.body.style.fontSize = fontBase * dpr + 'px';

        }, false);

    }

    refreshRem();

    FS.dpr = dpr;

    FS.rem2px = function(d) {

        var val = parseFloat(d) * FS.rem;

        if (typeof d === 'string' && d.match(/rem$/)) {

            val += 'px';

        }

        return val;

    }

    FS.px2rem = function(d) {

        var val = parseFloat(d) / FS.rem;

        if (typeof d === 'string' && d.match(/px$/)) {

            val += 'rem';

        }

        return val;

    }

})(window, FS);