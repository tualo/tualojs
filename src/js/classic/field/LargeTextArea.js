Ext.define('Ext.tualo.form.field.LargeTextArea',  {
    alias: 'widget.tualolargetextarea',
    extend: 'Ext.form.field.TextArea',
    minHeight: 300,
    height: 300,
    constructor: function(config) {
    	config = config || {};
      Ext.apply(this,config);
      //config.readOnly=true,
	    this.callParent([config]);
    }
});
