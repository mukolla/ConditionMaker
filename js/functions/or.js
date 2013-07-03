;(function(window){

    window.ConditionMaker.functions.or = window.ConditionMaker.FunctionView.extend({

        tagName: 'ul',
        className: 'conditionmaker-orcondition',

        init: function() {
            var that = this;

            that.$openBracket  = $('<li class="conditionmaker-openBracket">(</li>');
            that.$closeBracket = $('<li class="conditionmaker-closeBracket">)</li>');
            that.$addButton = $('<button type="button">Add</button>');
            that.$addButtonBlock = $('<div></div>').append(that.$addButton);
            that.render();
        },

        render: function() {
            var that = this,
                isRoot = that.model.get('isRoot'),
                childrens = that.model.get('childrens'),
                numberOfChildrens = childrens.length;

            if (!isRoot) {
                that.$el.append(that.$openBracket);
            }

            childrens.each(function(childModel, index) {
                that.$el.append(childModel.view.$el);
                if ((index + 1) !== numberOfChildrens) {
                    that.$el.append($('<li class="conditionmaker-or">or</li>'));
                }
            });

            if (!isRoot) {
                that.$el.append(that.$closeBracket);
            }
        },

        toEdit: function() {
            var that = this;
            that.$addButtonBlock.insertBefore(that.$closeBracket);
        },

        toNormal: function() {
            this.$addButtonBlock.detach();
        }

    });

})(window);