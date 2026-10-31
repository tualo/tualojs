Ext.define('Tualo.grid.filters.filter.Date', {
    extend: 'Ext.grid.filters.filter.Date',
    alias: 'grid.filter.tualo_date',

    fields: {
        lt: { text: 'Vor' },
        gt: { text: 'Nach' },
        eq: { text: 'Am' }
    },
    "dateFormat": "Y-m-d",
    pickerDefaults: {
        xtype: 'datepicker',
        border: 0,
        format: 'Y-m-d'
    },
})
