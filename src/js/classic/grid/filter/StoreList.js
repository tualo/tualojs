Ext.define('Ext.tualo.grid.filters.filter.StoreList', {
    extend: 'Ext.grid.filters.filter.List',
    alias: 'grid.filter.tualostorelist',

    type: 'list',
    operator: 'in',
    dataIndex: '__id',
    labelIndex: '__displayfield',

    itemDefaults: {
        checked: false,
        hideOnClick: false
    }

});
