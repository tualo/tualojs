Ext.define('Tualo.grid.column.Color', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.tualocolorcolumn',
    align: 'left',
    renderer: function (val, meta, rec) {
        meta.tdStyle = 'background-color:' + val + '; color:' + val + '; filter: invert(100%);';
        return val;
    }
});