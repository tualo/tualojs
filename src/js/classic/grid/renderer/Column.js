Ext.define('Override.grid.column.Column', {
    override: 'Ext.grid.column.Column',

    bindRenderer: function (renderer) {
        var me = this;


        me.hasCustomRenderer = true;

        return function () {
            if (typeof me.rendererScope == 'undefined') {
                if (Tualo?.tualojs?.Format?.Renderer) {
                    if (renderer in Tualo.tualojs.Format.Renderer) {
                        console.debug('Tualo?.tualojs?.Format?.Renderer using override Override.grid.column.Column');
                        return Ext.callback(renderer, Tualo.tualojs.Format.Renderer, arguments, 0, me);
                    }
                }
            }
            return Ext.callback(renderer, me.rendererScope, arguments, 0, me);
        }
    },
});