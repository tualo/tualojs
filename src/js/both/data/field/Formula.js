Ext.define('Tualo.tualojs.data.field.Formula', {
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
            if (typeof record.isNonData === 'boolean' && record.isNonData === true) return currentValue;
            if (Ext.isEmpty(record.get('formel'))) return currentValue;
            return me._math.parse(record.get('formel'));
        } catch (e) {
            console.error(e);
            return currentValue;
        }
    }
});