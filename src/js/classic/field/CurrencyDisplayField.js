Ext.define('Ext.tualo.form.field.CurrencyDisplayField',  {
    alias: 'widget.tualocurrencydisplayfield',
    extend: 'Ext.form.field.Display',
    constructor: function(config) {
    	config = config || {};
      Ext.apply(this,config);
      //config.readOnly=true,
      this.callParent([config]);
      
    },

    renderer: function(value, field){
      return Ext.util.Format.number(value,'0.000,00/i')+' €';
    }
});
