Ext.define('Ext.tualo.form.field.Number5', {
  extend: 'Ext.form.field.Number',
  alias: ['widget.number5'],
  decimalPrecision: 5,
  selectOnFocus: true,
  fieldStyle:     "text-align:right;"
});


Ext.define('Ext.tualo.form.field.Number2', {
  extend: 'Ext.form.field.Number',
  alias: ['widget.number2'],
  decimalPrecision: 2,
  selectOnFocus: true,
  fieldStyle:     "text-align:right;"
});


Ext.define('Ext.tualo.form.field.Number0', {
  extend: 'Ext.form.field.Number',
  alias: ['widget.number0'],
  decimalPrecision: 0,
  selectOnFocus: true,
  fieldStyle:     "text-align:right;"
});
