

Ext.define('Tualo.tualojs.data.calculation.field.MarginPercent', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_margin_percent'
    ],


    convert: function (value, record) {
        console.log('MarginPercent', value, record);
        if (record.get('edit_markup')) {

            var alt = parseFloat(record.get('ekpreis')) * parseFloat(record.get('einheit_faktor'));
            var neu = alt + parseFloat(record.get('markup'));

            if (alt == 0)  return 0;
            
            return (neu - alt) / alt * 100;
            
        }


        return value;
    },
    critical: true,
    persist: true,
    depends: ['listenpreis_vk', 'ekpreis', 'markup'],
});