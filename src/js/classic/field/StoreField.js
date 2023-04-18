Ext.define('Ext.tualo.form.field.StoreField', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualostorefield'],
  valueField: 'id',
  displayField: 'name',
  anchor: '100%',
  queryMode: 'local',
  initComponent: function() {
    var list = [];

    for(var name in Ext.ClassManager.aliasToName){
      if (name.indexOf('store.')==0){
        if (typeof Ext.ClassManager.aliasToName[name]=='string'){
          if (Ext.ClassManager.aliasToName[name].indexOf('Tualo.DataSets.store')==0){
            list.push([name,Ext.ClassManager.aliasToName[name]]);
          }
        }
      }
    }

    this.store = Ext.create('Ext.data.ArrayStore',{
        autoLoad: false,
        autoSync: false,
        remoteFilter: false,
        remoteSort: false,
        pageSize: 5000,
        fields: [
          { name: 'id', type: 'string' },
          { name: 'name', type: 'string' }
        ],
        data: list
    });
    this.callParent(arguments);
  }

});
