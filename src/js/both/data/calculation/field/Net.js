Ext.define('Tualo.tualojs.data.calculation.field.Net', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_net'
    ],
    calculate: function (data) {
        //console.log('Net calculate start', data);
        var v = data.anzahl * data.epreis; // + data.zuschlag;

        if (data.zuschlag) {
            v = v + (v * data.zuschlag / 100);
        }
        /*
        if (data.markup_discount_perc) {
            v = v + (v * data.markup_discount_perc / 100);
        }
        */

        return v;
    },
    critical: true,
    persist: true,
    depends: ['epreis', 'anzahl', 'zuschlag'],
});
