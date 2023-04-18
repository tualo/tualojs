Ext.define('Ext.tualo.grid.pivot.functions.Max', {
	extend: 'Ext.tualo.grid.pivot.Function',
	alias: 'pivotfunction.max',
	value: null,
	titleTemplate: 'Maximum ({text})',
	calculate: function(value){
		if (this.value==null){
			this.value=value;
		}else{
			if (this.value<value){
				this.value=value;
			}
		}
	},
	getValue: function(){
		return this.value;
	}
});
Ext.define('Ext.tualo.PivotGridFunctionMax', {
	extend: 'Ext.tualo.grid.pivot.functions.Max'
});