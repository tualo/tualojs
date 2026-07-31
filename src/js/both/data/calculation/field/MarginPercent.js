

Ext.define('Tualo.tualojs.data.calculation.field.MarginPercent', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_margin_percent'
    ],

    calculate: function (data) {
        console.log('MarginPercent calculate start', data);
        if (data.edit_markup) {
            var alt = parseFloat(data.ekpreis) * parseFloat(data.einheit_faktor);
            var neu = alt + parseFloat(data.markup);

            if (alt == 0) return 0;

            return (neu - alt) / alt * 100;
        }
        return data.markup_percent;
    },
    /*
    convert: function (value, record) {
        console.log('MarginPercent', value, record);
        if (record.get('edit_markup')) {

            var alt = parseFloat(record.get('ekpreis')) * parseFloat(record.get('einheit_faktor'));
            var neu = alt + parseFloat(record.get('_markup'));

            if (alt == 0)  return 0;
            
            return (neu - alt) / alt * 100;
            
        }


        return value;
    },
    */
    critical: true,
    persist: true,
   //  depends: ['listenpreis_vk', 'ekpreis', 'markup'],
});

