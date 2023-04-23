Ext.define('Ext.tualo.form.field.DateDisplayField',  {
    alias: 'widget.tualodatedisplayfield',
    extend: 'Ext.form.field.Display',
    
    renderer: function(value, field){
      return Ext.util.Format.date(value,'d.m.Y');
    }
});
