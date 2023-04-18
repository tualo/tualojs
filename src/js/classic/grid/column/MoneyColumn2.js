Ext.define('Ext.tualo.grid.column.MoneyColumn2', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.moneycolumn2',
    defaultFilterType: 'number',
    align: 'right',
    renderer: function(val,meta,rec){
      return Ext.util.Format.number(val,'0.000,00/i');
    }
});


Ext.define('Ext.tualo.grid.column.Number5', {
  extend: 'Ext.grid.column.Column',
  alias: 'widget.tualocolumnnumber5',
  defaultFilterType: 'number',
  align: 'right',
  renderer: function(val,meta,rec){
    return Ext.util.Format.number(val,'0.000,00000/i');
  }
});




Ext.define('Ext.tualo.grid.column.Percent2', {
  extend: 'Ext.grid.column.Column',
  alias: 'widget.tualocolumnpercent2',
  defaultFilterType: 'number',
  align: 'right',
  renderer: function(val,meta,rec){
    return Ext.util.Format.number(val*100,'0.000,00/i');
  }
});



Ext.define('Ext.tualo.grid.column.Number2', {
  extend: 'Ext.grid.column.Column',
  alias: 'widget.tualocolumnnumber2',
  defaultFilterType: 'number',
  align: 'right',
  renderer: function(val,meta,rec){
    return Ext.util.Format.number(val,'0.000,00/i');
  }
});

Ext.define('Ext.tualo.grid.column.Number0', {
  extend: 'Ext.grid.column.Column',
  alias: 'widget.tualocolumnnumber0',
  defaultFilterType: 'number',
  align: 'right',
  renderer: function(val,meta,rec){
    return Ext.util.Format.number(val,'0.000/i');
  }
});
