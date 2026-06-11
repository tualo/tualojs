Ext.define('Tualo.tualojs.data.calculation.field.CurrentDate', {
    extend: 'Ext.data.field.Date',
    alias: [
        'data.field.tualo_calculation_current_date'
    ],
    lastQuery: null,
    convert: function (currentValue, record) {
        let me = this;
        let doQuery = true;
        if (Ext.isEmpty(currentValue)) {
            return new Date()
        }
        return currentValue;
    }
});