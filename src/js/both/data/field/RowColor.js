Ext.define('Tualo.tualojs.data.field.RowColorLogic', {
    extend: 'Ext.data.field.String',
    alias: [
        'data.field.tualo_row_color_logic'
    ],
    critical: false,
    persist: false,
    /*
    formulas: [
        {
            formula: 'if(title=="",1,0)',
            css_class: 'row-color-notdefined blink_me'
        },
        {
            formula: 'if(searchany,1,0) * if(allowform,1,0)',
            css_class: 'row-color-lightpink'
        },
        {
            formula: 'if(searchany,1,0) ',
            css_class: 'row-color-cobaltgreen_test'
        },
        {
            formula: 'if(allowform,1,0) ',
            css_class: 'row-color-magentafuchsia'
        }

    ],
    */
    calculate: function (data) {
        console.log('tualo_row_color_logic', data);
        try {

            let me = this;

            if (typeof me._math === 'undefined') {
                me._math = new Tualo.tualojs.Math();
            }

            me.formulas = Tualo.ds_colors.Formulas.formulas[data.__table_name];

            me._math.addObject(data);
            for (let i = 0; i < me.formulas.length; i++) {
                let formula = me.formulas[i];
                if (me._math.parse(formula.formula) > 0) {
                    return formula.css_class;
                }
            }
        } catch (e) {
            console.error(e);
        }
        /*
        if (data.searchany) {
            return 'row-color-cobaltgreen_test';
        }*/
        return '';
    }
});