Ext.define('Ext.tualo.grid.pivot.functions.Average', {
	extend: 'Ext.tualo.grid.pivot.Function',
	alias: 'pivotfunction.average',
	value: 0,
	count: 0,
	titleTemplate: 'Durchschnitt ({text})',
	calculate: function(value){
		value*=1;
		this.value+=value;
		this.count+=1;
	},
	getValue: function(){
		return this.value/this.count;
	}
});
