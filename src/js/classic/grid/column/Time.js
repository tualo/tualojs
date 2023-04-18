Ext.define('Ext.tualo.grid.column.Time', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.tualotimecolumn',
    defaultFilterType: 'list',
    align: 'left',
    renderer: Ext.util.Format.dateRenderer ( "H:i" )
});
