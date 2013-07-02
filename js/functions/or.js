;(function(window){

    window.ConditionMaker.functions.or = window.ConditionMaker.FunctionView.extend({

        tagName: 'ul',
        className: 'conditionmaker-orcondition',

        init: function() {
            this.$openBracket  = $('<li class="conditionmaker-openBracket">(</li>');
            this.$closeBracket = $('<li class="conditionmaker-closeBracket">)</li>');
            this.render();
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
        }

    });

})(window);