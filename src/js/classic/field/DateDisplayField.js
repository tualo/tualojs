Ext.define('Ext.tualo.form.field.DateDisplayField',  {
    alias: ['widget.tualodatedisplayfield','widget.tualodisplaydatefield'],
    alternateClassName: ['Tualo.form.field.DateDisplayField'],
    extend: 'Ext.form.field.Display',
    
    
    renderer: function(value, field){
      return Ext.util.Format.date(value,'d.m.Y');
    }
});
