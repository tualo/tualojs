Ext.define('Tualo.tualojs.data.calculation.field.Net', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_net'
    ],
    calculate: function (data) {
        console.log('Net calculate start', data);
        var v = data.anzahl * data.ekpreis * data.einheit_faktor;
        if (data.markup) {
            v += data.markup;
        }
        if (data.markup_percent) {
            v += v * (data.markup_percent / 100);
        }
        return v;
    },
    critical: true,
    persist: true,
    depends: ['einheit_faktor', 'anzahl', 'ekpreis', 'markup', 'markup_percent'],
});

