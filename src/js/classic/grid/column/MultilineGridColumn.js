
Ext.define('Ext.tualo.grid.column.MultiLineGridColumn', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.multilinegridcolumn',
    defaultRenderer: function(v){
      return v.replace(/\n/gm,"<br>");
    }
});
