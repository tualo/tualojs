Ext.define('Tualo.from.fields.Phonetrigger',  {
    alias: 'widget.phonetrigger',
    extend: 'Ext.form.field.Text',
    constructor: function(config) {
    	config = config || {};
      Ext.apply(this,config);
      //config.readOnly=true,
	    this.callParent([config]);
    },
    triggers: {
        phoncall: {
            cls: 'fa fa-phone',
            handler: function() {
                console.log('foo trigger clicked');
            }
        }
    }
});