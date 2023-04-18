Ext.define('Ext.tualo.grid.column.RGBColorColumn', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.rgbcolorcolumn',
    defaultFilterType: 'list',
    align: 'left',
    width: 20,
    renderer: function(val,meta,rec){
      meta.tdStyle='background-color:'+val+';text-shadow: 1px  1px 1px white, 1px -1px 1px white, -1px  1px 1px white, -1px -1px 1px white;';
      return "";
    }
});
