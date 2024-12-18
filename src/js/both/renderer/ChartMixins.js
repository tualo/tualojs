
Ext.define('Tualo.chart.ChartMixings', {
    onSeriesTooltipRender: function(tooltip, record, item) {
        console.log(tooltip, record, item);
        var tpl = new Ext.XTemplate(
            '<p>Name: {name}</p>',
            '<p>Title: {title}</p>',
            '<p>Company: {company}</p>',
            '<p>Kids: ',
            '<tpl for="kids">',     // interrogate the kids property within the data
                '<p>{name}</p>',
            '</tpl></p>'
        );
        tooltip.setHtml(
            tpl.apply(record.data)
        );
        //tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%');
    }
});



