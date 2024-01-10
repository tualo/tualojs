Ext.define('Ext.tualo.form.field.DatetimeDisplayField',  {
    alias: 'widget.tualodatetimedisplayfield',
    extend: 'Ext.form.field.Display',

    renderer: function(value, field){
      return Ext.util.Format.date(value,'d.m.Y H:i');
    }
});


Ext.define('Ext.tualo.form.field.TimeDisplayField',  {
  alias: 'widget.tualotimedisplayfield',
  extend: 'Ext.form.field.Display',

  renderer: function(value, field){
    return Ext.util.Format.date(value,'H:i:s');
  }
});
