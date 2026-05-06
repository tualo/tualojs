Ext.define('Tualo.tualojs.data.calculation.field.TaxValue', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_taxvalue'
    ],
    calculate: function (data) {
        v = data.gross - data.net;
        return v;
    },
    critical: true,
    persist: true,
    depends: ['net', 'gross'],
});