Ext.define('Tualo.grid.column.Color', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.tualocolorcolumn',
    align: 'left',
    renderer: function (val, meta, rec) {
        meta.tdStyle = 'background-color:' + val + '; filter: invert(0%);';
        return val;
    }
});