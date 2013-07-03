;(function(window){

    window.Condition = Backbone.Model.extend({

        defaults: function() {
            return {
                params: [],
                isRoot: false
            };
        },

        initialize: function(attrs, options) {

            if (!_.isUndefined(options.app)) {
                this.app = options.app;
            }
            
            if (Array.isArray(this.get('childrens'))) {
                this.set({ childrens: new ConditionList(this.get('childrens'), { app: this.app }) });
            }

            this.view = new ConditionMaker.functions[this.get('func')]({ model: this, app: this.app });
        }
    });

    window.ConditionList = Backbone.Collection.extend({
        model: Condition
    });

})(window);