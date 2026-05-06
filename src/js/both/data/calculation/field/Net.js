Ext.define('Tualo.tualojs.data.calculation.field.Net', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_net'
    ],
    calculate: function (data) {
        console.log('Net calculate start', data);
        v = data.anzahl * data.ek_preis * data.einheit_faktor;
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
    depends: ['einheit_faktor', 'anzahl', 'ek_preis', 'markup', 'markup_percent'],
});