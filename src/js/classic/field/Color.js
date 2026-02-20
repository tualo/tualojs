
Ext.define('Tualo.form.field.Color', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.tualocolorfield',

    requires: [
        'Ext.form.field.Text'
    ],
    inputType: "color"
}
);