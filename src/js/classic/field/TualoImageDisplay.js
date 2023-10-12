Ext.define('Tualo.form.field.ImageDisplay', {
    extend:'Ext.form.field.Display',
    alias: 'widget.tualoimagedisplay',
    maxHeight: 300,
    renderer: function (value, field) {
        if (!value) return '';
        return '<img src="'+value+'" style="width: 100%; ">';
    }
  });
  