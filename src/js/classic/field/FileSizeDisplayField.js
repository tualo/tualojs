Ext.define('Ext.tualo.form.field.FileSizeDisplayField',  {
    alias: 'widget.tualodisplayfilesizefield',
    extend: 'Ext.form.field.Display',
    constructor: function(config) {
    	config = config || {};
      Ext.apply(this,config);
      //config.readOnly=true,
      this.callParent([config]);
      
    },

    renderer: function(value, field){
        let unit = 'B';
        if (value>1024){ value = value/1024; unit = 'kB'; }
        if (value>1024){ value = value/1024; unit = 'MB'; }
        if (value>1024){ value = value/1024; unit = 'GB'; }
        return Ext.util.Format.number(value,'0.000,00/i')+' '+unit;
    }
});
