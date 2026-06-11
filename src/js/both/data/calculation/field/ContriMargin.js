Ext.define('Tualo.tualojs.data.calculation.field.ContriMargin', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_contri_margin'
    ],
    calculate: function (data) {
        console.log('ContriMargin calculate start', data);
        var v = data.netto - data.ekpreis_summe;

        return v;
    },
    critical: true,
    persist: true,
    depends: ['ekpreis_summe', 'netto'],
});

Ext.define('Tualo.tualojs.data.calculation.field.ContriMarginPercent', {

    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_contri_margin_percent'
    ],
    calculate: function (data) {
        console.log('ContriMarginPercent calculate start', data);
        var v = (data.contrimargin / data.netto) * 100;

        return v;
    },
    critical: true,
    persist: true,
    depends: ['contrimargin', 'netto'],
});

