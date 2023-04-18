Ext.define('Ext.tualo.grid.column.ColoredMoneyColumn2', {
  extend: 'Ext.grid.column.Column',
  alias: 'widget.coloredmoneycolumn2',
  defaultFilterType: 'number',
  align: 'right',
  renderer: function(val,meta,rec){
    var color = 'darkgray';
    if (val<0){
      color='rgb(100,20,20)';
    }
    if (val>0){
      color='rgb(20,100,20)';
    }
    return '<span style="color: '+color+'">'+Ext.util.Format.number(val,'0.000,00/i')+'</span>';
  }
});

