Ext.define('Ext.tualo.grid.column.MoneyColumn5', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.moneycolumn5',
    defaultFilterType: 'number',
    align: 'right',
    renderer: function(val,meta,rec){
      
      return Ext.util.Format.number(val,'0.000,00000/i');
    }
});
