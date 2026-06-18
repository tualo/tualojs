Ext.define('Tualo.report.data.field.Formula', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_amount_formula'
    ],
    depends: [
        'anzahl'
    ],
    critical: true,
    persist: true,
    queriedList: {},


    convert: function (currentValue, record) {
        let me = this;
        if (typeof me._math === 'undefined') {
            me._math = new Tualo.tualojs.Math();
        }
        me._math.addRecord(record);
        try {
            return me._math.parse(record.get('formel'));
        } catch (e) {
            console.error(e);
            return currentValue;
        }
    }
});