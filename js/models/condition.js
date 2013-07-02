;(function(window){

    window.Condition = Backbone.Model.extend({

        defaults: function() {
            return {
                params: [],
                isRoot: false
            };
        },

        initialize: function() {

            if (Array.isArray(this.get('childrens'))) {
                this.set({childrens: new ConditionList(this.get('childrens'))});
            }

            this.view = new ConditionMaker.functions[this.get('func')]({model: this});
        }
    });

    window.ConditionList = Backbone.Collection.extend({
        model: Condition
    });

})(window);