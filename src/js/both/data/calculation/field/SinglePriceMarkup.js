Ext.define('Tualo.tualojs.data.calculation.field.SinglePriceMarkup', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_single_price_markup'
    ],
    calculate: function (data) {
        console.log('SinglePriceMarkup calculate start', data);
        var v = parseFloat(data.ekpreis) * parseFloat(data.einheit_faktor);

        if (data.markup) {
            v += parseFloat(data.markup);
        }

        /*
        if (data.markup_percent) {
            v += v * (parseFloat(data.markup_percent) / 100);
        }*/
        return v;
    },
    critical: true,
    persist: true,
    depends: ['einheit_faktor', 'ekpreis', 'markup', 'markup_percent'],
});

