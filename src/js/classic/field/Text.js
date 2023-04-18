Ext.define('Ext.tualo.form.field.Text',  {
    alias: 'widget.tualotextfield',
    extend: 'Ext.form.field.Text',
    constructor: function(config) {
    	config = config || {};
      Ext.apply(this,config);
      //config.readOnly=true,
	    this.callParent([config]);
    }
});
