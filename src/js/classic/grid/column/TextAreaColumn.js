Ext.define('Ext.tualo.grid.column.TextAreaColumn', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.tualotextareacolumn',
    align: 'left',
   
    cellWrap: true,
    variableRowHeight: true,
    renderer: function(val,meta,rec){
      return  val.replace(/\n/g,'<br/>');//'&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;&#x25CF;';
    }
});
