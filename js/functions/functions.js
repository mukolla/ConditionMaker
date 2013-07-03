;(function(window){

    window.ConditionMaker.FunctionView = Backbone.View.extend({

        tagName: 'ul',
        activeElements: null,

        initialize: function() {

            this.activeElements = [];
            this.app = this.options.app;
            this.init();
            this.listenTo(this.app, 'toEdit', this._toEdit);
            this.listenTo(this.app, 'toNormal', this._toNormal);
        },

        init: function() {

        },

        _toEdit: function() {
            this.attachActiveEvents();
            this.toEdit();
        },

        toEdit: function() {

        },

        _toNormal: function() {
            this.detachActiveEvents();
            this.toNormal();
        },

        toNormal: function() {

        },

        attachActiveEvents: function() {
            var that = this,
                length = that.activeElements.length,
                i = 0;

            for (i=0; i<length; i++) {
                console.log(that.activeElements[i]);
                that.activeElements[i].mouseover(function() {
                    that.activeMouseOver();
                }).mouseout(function() {
                    that.activeMouseOut();
                });
            }

        },

        attachNewEvents: function($newElement) {
            var that = this;

            $newElement.mouseover(function() {
                that.activeMouseOver();
            }).mouseout(function() {
                that.activeMouseOut();
            });
        },

        detachActiveEvents: function() {
            var that = this,
                length = that.activeElements.length,
                i = 0;

            for (i=0; i<length; i++) {
                that.activeElements[i].off('mouseover').off('mouseout');
            }
        },

        activeMouseOver: function() {
            var that = this,
                length = that.activeElements.length,
                i = 0;

            for (i=0; i<length; i++) {
                that.activeElements[i].addClass('hovered');
            }
        },

        activeMouseOut: function() {
            var that = this,
                length = that.activeElements.length,
                i = 0;

            for (i=0; i<length; i++) {
                that.activeElements[i].removeClass('hovered');
            }
        }
    });

    window.ConditionMaker.functions = {};

})(window);