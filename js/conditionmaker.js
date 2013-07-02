;(function(window){

    window.ConditionMaker = Backbone.View.extend({

        initialize: function() {

            console.log(this.options);

            var conditions = this.options.conditions;
            if (_.isObject(conditions) && !_.isUndefined(conditions.func)) {
                conditions.isRoot = true;
            }
            var conditionTree = new Condition(conditions);
            this.options.$el.append(conditionTree.view.$el);
        }
        
    }) ;

})(window);