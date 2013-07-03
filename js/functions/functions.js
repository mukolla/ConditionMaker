;(function(window){

    window.ConditionMaker.FunctionView = Backbone.View.extend({

        tagName: 'ul',
        initialize: function() {

            this.app = this.options.app;
            this.init();
            this.listenTo(this.app, 'toEdit', this.toEdit);
            this.listenTo(this.app, 'toNormal', this.toNormal);
        },

        init: function() {

        },

        toEdit: function() {

        },

        toNormal: function() {

        }

    });

    window.ConditionMaker.functions = {};

})(window);