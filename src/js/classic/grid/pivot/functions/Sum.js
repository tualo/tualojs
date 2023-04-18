Ext.define('Ext.tualo.grid.pivot.functions.Sum', {
	extend: 'Ext.tualo.grid.pivot.Function',
	alias: 'pivotfunction.sum',
	value: 0,
	titleTemplate: 'Summe ({text})',
	calculate: function(value){
		value*=1;
		this.value+=value;
	},
	getValue: function(){
		return this.value;
	}
});
Ext.define('Ext.tualo.PivotGridFunctionSum', {
	extend: 'Ext.tualo.grid.pivot.functions.Sum'
});