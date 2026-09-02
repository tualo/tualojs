Ext.define('Tualo.tualojs.data.field.RowColorLogic', {
    extend: 'Ext.data.field.String',
    alias: [
        'data.field.tualo_row_color_logic'
    ],
    critical: false,
    persist: false,
    queriedList: {},
    calculate: function (data) {
        console.log('tualo_row_color_logic', data);
        return 'row-color-cobaltgreen_test';
    }
});