Ext.define('Ext.tualo.grid.pivot.functions.Count', {
	extend: 'Ext.tualo.grid.pivot.Function',
	alias: 'pivotfunction.count',
	value: 0,
	titleTemplate: 'Anzahl ({text})',
	calculate: function(value){
		this.value+=1;
	},
	getValue: function(){
		return this.value;
	}
});
Ext.define('Ext.tualo.PivotGridFunctionCount', {
	extend: 'Ext.tualo.grid.pivot.functions.Count'
});