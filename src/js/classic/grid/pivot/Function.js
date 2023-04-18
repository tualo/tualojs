Ext.define('Ext.tualo.grid.pivot.Function', {
	value: 0,
	alias: 'rpivotfunction.base',
	titleTemplate: '{text}',
	calculate: function(value){
		this.value+=value;
	},
	getValue: function(){
		return this.value;
	}
});
