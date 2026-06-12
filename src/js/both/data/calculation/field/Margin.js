

Ext.define('Tualo.tualojs.data.calculation.field.Margin', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_margin'
    ],
    convert: function (value, record) {
        console.log('MARKUP berechnung ggf. noch nicht sauber!!!!!', record);
        if (value !== record.get('listenpreis_vk')) {
            if (record.get('listenpreis_vk') == 0) {
                if (record.get('ekpreis') != 0 && record.get('markup_percent') != 0) {
                    var v = parseFloat(data.ekpreis) * parseFloat(data.einheit_faktor);
                    v = v * (parseFloat(data.markup_percent) / 100);
                    return v;
                } else {
                    return value;
                }
            }
            return record.get('listenpreis_vk');
        }

        if (record.get('ekpreis') != 0 && record.get('markup_percent') != 0) {
            var v = parseFloat(data.ekpreis) * parseFloat(data.einheit_faktor);
            v = v * (parseFloat(data.markup_percent) / 100);
            return v;
        }

        return value;
    },
    critical: true,
    persist: true,
    depends: ['listenpreis_vk', 'ekpreis', 'markup_percent'],
});