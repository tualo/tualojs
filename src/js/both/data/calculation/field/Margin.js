

Ext.define('Tualo.tualojs.data.calculation.field.Margin', {
    extend: 'Ext.data.field.Number',
    alias: [
        'data.field.tualo_calculation_margin'
    ],
    convert: function (value, record) {

        if (value !== record.get('listenpreis_vk')) {
            if (record.get('listenpreis_vk') == 0) return value;
            return record.get('listenpreis_vk');
        }

        return value;
    },
    critical: true,
    persist: true,
    depends: ['listenpreis_vk'],
});