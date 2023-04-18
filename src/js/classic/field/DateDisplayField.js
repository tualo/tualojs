Ext.define('Ext.tualo.form.field.DateDisplayField',  {
    alias: 'widget.tualodatedisplayfield',
    extend: 'Ext.form.field.Display',
    constructor: function(config) {
    	config = config || {};
      Ext.apply(this,config);
      //config.readOnly=true,
      this.callParent([config]);
      
    },

    renderer: function(value, field){
      return Ext.util.Format.date(value,'d.m.Y');
    }
});
