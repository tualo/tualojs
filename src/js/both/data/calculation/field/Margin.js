

Ext.define('Tualo.tualojs.data.calculation.field.Margin', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_margin'
    ],

    /*
    calculate: function (data) {
        console.warn('Margin calculate start', data);
        var v = parseFloat(data.listenpreis_vk);
        if (!data.edit_markup) {
            if (data.ekpreis != 0 && data.markup_percent != 0) {
                v = parseFloat(data.ekpreis) * parseFloat(data.einheit_faktor);
                v += v * (parseFloat(data.markup_percent) / 100);
            }
        } else {
            if (v == 0) {
                return data.markup;
            }
        }
        return v;
    },*/


    convert: function (value, record) {
        //consfecord.get('edit_markup')) {
        console.warn('Margin calculate start', value, record);

        if (!record.get('edit_markup')) {
            if (record.get('ekpreis') != 0 && record.get('markup_percent') != 0) {
                var v = parseFloat(record.get('ekpreis')) * parseFloat(record.get('einheit_faktor'));
                v = v * (parseFloat(record.get('markup_percent')) / 100);
                return v;
            }
        } else {

            // if (record.get('listenpreis_vk') == 0) {
            return value
            //}

        }
        return record.get('listenpreis_vk');


        /*
        if(value !== record.get('listenpreis_vk')) {
    if (record.get('listenpreis_vk') == 0) {
        if (record.get('ekpreis') != 0 && record.get('markup_percent') != 0) {
            var v = parseFloat(record.get('ekpreis')) * parseFloat(record.get('einheit_faktor'));
            v = v * (parseFloat(record.get('markup_percent')) / 100);
            v = v * (parseFloat(record.get('markup_discount_perc')) / 100);

            return v;
        } else {
            return value;
        }
    }*/

    },


    critical: true,
    persist: true,
    depends: ['listenpreis_vk', 'ekpreis', 'markup_percent', 'edit_markup'],
});

