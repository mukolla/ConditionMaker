;(function(window){

    window.ConditionMaker.functions.and = window.ConditionMaker.FunctionView.extend({

        tagName: 'ul',
        className: 'conditionmaker-andcondition',

        init: function() {
            var that = this;

            that.$openBracket  = $('<li class="conditionmaker-openBracket">(</li>');
            that.$closeBracket = $('<li class="conditionmaker-closeBracket">)</li>');
            that.activeElements.push(that.$openBracket, that.$closeBracket);

            that.$addButton = $('<button type="button">Add</button>');
            that.$actionsBlock = $('<div></div>').append(that.$addButton);
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
                    var $and = $('<li class="conditionmaker-and">and</li>');

                    $and.click(function(){
                        if (that.app.mode === 'edit') {
                            that.model.set('func', 'or');
                        }
                    });

                    that.activeElements.push($and);
                    that.$el.append($and);
                }
            });
            
            if (!isRoot) {
                that.$el.append(that.$closeBracket);
            }

            if (that.app.mode === 'edit') {
                that._toEdit();
            }
        },

        toEdit: function() {
            var that = this;

            if (that.model.get('isRoot')) {
                that.$el.append(that.$actionsBlock);
            } else {
                that.$actionsBlock.insertBefore(that.$closeBracket);
            }
        },

        toNormal: function() {
            this.$actionsBlock.detach();
        }

    });

})(window);