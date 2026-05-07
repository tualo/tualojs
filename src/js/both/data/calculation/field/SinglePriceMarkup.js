Ext.define('Tualo.tualojs.data.calculation.field.SinglePriceMarkup', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_single_price_markup'
    ],
    calculate: function (data) {
        console.log('SinglePriceMarkup calculate start', data);
        var v = data.ekpreis * data.einheit_faktor;
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
    depends: ['einheit_faktor', 'ekpreis', 'markup', 'markup_percent'],
});

