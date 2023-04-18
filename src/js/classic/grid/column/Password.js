Ext.define('Ext.tualo.grid.column.Password', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.passwordcolumn',
    align: 'right',
    renderer: function(val,meta,rec){
      return '&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;';
    }
});
