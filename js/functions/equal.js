;(function(window){

    window.ConditionMaker.functions.equal = window.ConditionMaker.FunctionView.extend({

        tagName: 'ul',
        className: 'conditionmaker-equalcondition',

        init: function() {
            var that = this;

            that.$firstParam = $('<li class="conditionmaker-equalparam"></li>');
            that.$seccondParam = $('<li class="conditionmaker-equalparam"></li>');
            that.$equal = $('<li class="conditionmaker-equal">=</li>');

            that.$el.append(that.$firstParam, that.$equal, that.$seccondParam);

            this.render();
        },

        render: function() {
            var that = this,
                params = that.model.get('params');

            if (!_.isUndefined(params[0])) {
                that.$firstParam.html(params[0]);
            }

            if (!_.isUndefined(params[1])) {
                that.$seccondParam.html(params[1]);
            }
        }
    });

})(window);