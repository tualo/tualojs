
Ext.define('Tualo.form.field.Color', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.tualocolorfield',

    requires: [
        'Ext.form.field.Text'
    ],
    extraFieldBodyCls: Ext.baseCSSPrefix + 'form-file-wrap',
    inputCls: Ext.baseCSSPrefix + 'form-text-file',
    inputType: "color"
}
);