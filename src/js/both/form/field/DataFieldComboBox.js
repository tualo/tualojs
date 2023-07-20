Ext.define('Tualo.from.fields.DataFieldComboBox',  {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'tualo_datafield_combobox',
    store: {
        type: 'json',
        fields: ['id','name'],
    },
    constructor: function(config){
        let me = this, data=[];
        me.callParent([config]);

        for( let key in Ext.ClassManager.aliasToName){
            if (key.indexOf('data.field.')===0){
                data.push({
                    id: key.replace('data.field.',''),
                    name: Ext.ClassManager.aliasToName[key]+' ('+key.replace('data.field.','')+')'
                });
            }   
        }
        window.cmb = me;
        console.log('data',data);
        me.getStore().loadData(data);
    },
    typeAhead: true,
    valueField: 'id',
    displayField: 'name'
});
