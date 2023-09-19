Ext.define('Ext.tualo.grid.column.DSFilesColumn', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.tualodsfilescolumn',
    align: 'left',
   
    /*cellWrap: true,
    variableRowHeight: true,
    */
    renderer: function(val,meta,rec){
        let file_id = val,tn=rec.get('__table_name');
        if (typeof rec.get('__file_id')=='string'){
            file_id = rec.get('__file_id');
            return '<a href="./dsfiles/'+tn+'/'+file_id+'" target="_blank">'+rec.get('__file_name')+'</a>';
        }
        return "";
    }
});