Ext.define('Tualo.tualojs.data.calculation.field.NetSimple', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_net_simple'
    ],
    calculate: function (data) {
        console.log('NetSimple calculate start', data);
        var v = data.anzahl * data.epreis * data.einheit_faktor;

        return v;
    },
    critical: true,
    persist: true,
    depends: ['einheit_faktor', 'anzahl', 'epreis'],
});