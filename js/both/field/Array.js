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
