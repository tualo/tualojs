Ext.define('Ext.tualo.grid.pivot.functions.Min', {
	extend: 'Ext.tualo.grid.pivot.Function',
	alias: 'pivotfunction.min',
	value: null,
	titleTemplate: 'Minimum ({text})',
	calculate: function(value){
		if (this.value==null){
			this.value=value;
		}else{
			if (this.value>value){
				this.value=value;
			}
		}
	},
	getValue: function(){
		return this.value;
	}
});
Ext.define('Ext.tualo.PivotGridFunctionMin', {
	extend: 'Ext.tualo.grid.pivot.functions.Min'
});