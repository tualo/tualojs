Ext.define('Ext.tualo.form.field.CurrentTimeField', {
    alias: 'widget.tualocurrenttimefield',
    extend: 'Ext.form.field.Time',
    format: 'H:i',
    getValue: function() {
        var me = this;
        console.log('Ext.tualo.form.field.CurrentDateField','getValue',arguments);
        return me.callParent();
    },
    setValue: function(value) {
        var me = this;
        if (typeof value=='undefined') value = new Date();
        if (Ext.isEmpty(value)) value = new Date();
        
        console.log('Ext.tualo.form.field.CurrentDateField','setValue',arguments);
        me.callParent([value]);
    },
    updateValue: function(value) {
        var me = this;
        console.log('Ext.tualo.form.field.CurrentDateField','updateValue',arguments);
        //me.publishState('value', value);
        me.callParent([value]);
    },    
  
});