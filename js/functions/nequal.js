;(function(window){

    window.ConditionMaker.functions.nequal = window.ConditionMaker.FunctionView.extend({

        tagName: 'ul',
        className: 'conditionmaker-nequalcondition',

        init: function() {
            var that = this;

            that.$firstParam = $('<li class="conditionmaker-nequalparam"></li>');
            that.$seccondParam = $('<li class="conditionmaker-nequalparam"></li>');
            that.$nequal = $('<li class="conditionmaker-nequal">!=</li>');

            that.$el.append(that.$firstParam, that.$nequal, that.$seccondParam);

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