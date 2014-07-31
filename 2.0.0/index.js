/**
 * @fileoverview
 * @author
 * @module detect-zoom
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class DetectZoom
     * @constructor
     * @extends Base
     */
    function DetectZoom(comConfig) {
        var self = this;
        //调用父类构造函数
        DetectZoom.superclass.constructor.call(self, comConfig);
    }
    S.extend(DetectZoom, Base, /** @lends DetectZoom.prototype*/{

    }, {ATTRS : /** @lends DetectZoom*/{

    }});
    return DetectZoom;
}, {requires:['node', 'base']});



