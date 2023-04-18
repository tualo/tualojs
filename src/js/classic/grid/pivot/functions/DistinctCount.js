Ext.define('Ext.tualo.grid.pivot.functions.DistinctCount', {
  extend: 'Ext.tualo.grid.pivot.Function',
  alias: 'pivotfunction.distinctcount',
  value: 0,
  titleTemplate: 'indiv. Anzahl ({text})',
  calculate: function(value){
    this.value+=1;
  },
  getValue: function(){
    return this.value;
  }
});
