Ext.define('Ext.tualo.grid.column.DatetimeDisplayColumn',  {
    alias: 'widget.tualodatetimedisplaycolumn',
    extend: 'Ext.grid.column.Column',
    renderer: function(value, field){
      return Ext.util.Format.date(value,'d.m.Y H:i');
    }
});
