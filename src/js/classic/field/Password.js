Ext.define('Ext.tualo.form.field.Password',  {
    alias: 'widget.tualopasswordfield',
    extend: 'Ext.form.field.Text',
    inputType: 'password',
    constructor: function(config) {
        config = config || {};
        Ext.apply(this,config);
        this.callParent([config]);
    }
});
