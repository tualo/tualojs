Ext.define('Ext.tualo.form.field.ReportAmountFieldWS', {
    extend: 'Ext.form.field.Number',
    alias: ['widget.tualoreportamountfieldws'],
    decimalPrecision: 5,

    selectOnFocus: true,
    fieldStyle:     "text-align:right;",
    listeners: {
        change: function(me,nv,ov){
            console.log(this,nv,ov);
        }
    }
  });


  