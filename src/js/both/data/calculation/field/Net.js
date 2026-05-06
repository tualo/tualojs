Ext.define('Tualo.tualojs.data.calculation.field.Net', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_net'
    ],
    calculate: function (data) {
        v = data.anzahl * data.epreis * data.einheit_faktor;
        return v;
    },
    critical: true,
    persist: true,
    depends: ['einheit_faktor', 'anzahl', 'epreis'],
});