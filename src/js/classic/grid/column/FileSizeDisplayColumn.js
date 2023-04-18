Ext.define('Ext.tualo.grid.column.FileSizeDisplayColumn',  {
    alias: 'widget.tualodisplayfilesize',
    extend: 'Ext.grid.column.Column',
    align: 'right',
    renderer: function(value, field){
        let unit = 'B';
        if (value>1024){ value = value/1024; unit = 'kB'; }
        if (value>1024){ value = value/1024; unit = 'MB'; }
        if (value>1024){ value = value/1024; unit = 'GB'; }
        return Ext.util.Format.number(value,'0.000,00/i')+' '+unit;
    }
});
