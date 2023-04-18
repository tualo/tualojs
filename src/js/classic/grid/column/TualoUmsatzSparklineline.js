Ext.define('Ext.tualo.grid.column.TualoUmsatzSparklineline', {
    extend: 'Ext.grid.column.Widget',
    alias: 'widget.tualoumsatzsparklineline',

    widget: {
        xtype: 'sparklineline',
        tipTpl: 'Umsatz: {y:number("0.00")}'
    },
    sortable: false

});

Ext.define('Ext.tualo.data.field.Array', {
    extend: 'Ext.data.field.Array',
    alias: 'data.field.stringarray',
    convert: function(str){
        try{
            return JSON.parse(str)
        }catch(e){
            return[]
        }
    }
})


Ext.define('Ext.tualo.grid.column.TualoProzentBarchart', {
    extend: 'Ext.grid.column.Widget',
    alias: 'widget.tualoprozentbarchart',

    widget: {
        xtype: 'sparklinebar',
        tipTpl:  'Prozent: &#9679;{prefix}{value:percent("0.00")}{suffix}'
    },
    sortable: false

});

Ext.define('Ext.tualo.grid.column.TualoBarchart', {
    extend: 'Ext.grid.column.Widget',
    alias: 'widget.tualobarchart',

    widget: {
        xtype: 'sparklinebar',
        tipTpl:  '{prefix}{value}{suffix}'
    },
    sortable: false

});




