Ext.define('Ext.tualo.grid.column.DEDateDisplayColumn',  {
    alias: 'widget.tualodedatedisplaycolumn',
    extend: 'Ext.grid.column.Column',
    renderer: function(value, field){
      return Ext.util.Format.date(value,'d.m.Y');
    }
});
