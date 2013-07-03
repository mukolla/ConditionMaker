;(function(window){

    window.ConditionMaker.functions.nequal = window.ConditionMaker.FunctionView.extend({

        tagName: 'ul',
        className: 'conditionmaker-nequalcondition',

        init: function() {
            var that = this;

            that.$firstParam = $('<li class="conditionmaker-nequalparam"></li>');
            that.$seccondParam = $('<li class="conditionmaker-nequalparam"></li>');
            that.$nequal = $('<li class="conditionmaker-nequal">!=</li>');
            that.$wrap = $('<span class="conditionmaker-wrap"></span>').append(that.$firstParam, that.$nequal, that.$seccondParam);

            that.activeElements.push(that.$wrap);

            that.$el.append(that.$wrap);

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

            if (that.app.mode === 'edit') {
                that._toEdit();
            }
        }
        
    });

})(window);