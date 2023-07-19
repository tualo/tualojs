Ext.define('Ext.tualo.grid.column.Link', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.tualolinkcolumn',
    align: 'left',
   
    /*cellWrap: true,
    variableRowHeight: true,
    */
    renderer: function(val,meta,rec){
        try{
            let link = val,tn=rec.get('__table_name');
            if (typeof rec.get('_link')=='string'){
                link = rec.get('_link');
            }
            return '<a href="'+link+'" target="_blank">'+val+'</a>';
        }catch(e){
            console.log(e);
            return "fehler";
        }
    }
});