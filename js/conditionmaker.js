;(function(window){

    window.ConditionMaker = Backbone.View.extend({

        initialize: function() {

            var that = this,
                conditions = that.options.conditions;
            if (_.isObject(conditions) && !_.isUndefined(conditions.func)) {
                conditions.isRoot = true;
            }

            var conditionTree = new Condition(conditions, { app: that });
            that.$el.append(conditionTree.view.$el);
        },

        toEdit: function() {
            this.$el.addClass('edit');
            this.trigger('toEdit');
        },

        toNormal: function() {
            this.$el.removeClass('edit');
            this.trigger('toNormal');
        }
        
    }) ;

})(window);