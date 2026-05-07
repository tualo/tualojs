Ext.define('Tualo.tualojs.data.calculation.field.EKPreisSumme', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_ek_preis_summe'
    ],
    calculate: function (data) {
        console.log('EKPreisSumme calculate start', data);
        var v = data.anzahl * data.ekpreis;

        return v;
    },
    critical: true,
    persist: true,
    depends: ['ekpreis', 'anzahl'],
});
