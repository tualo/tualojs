Ext.define('Ext.tualo.form.field.SummaryRenderer', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualosummaryrenderer'],
  valueField: 'id',
  displayField: 'id',
  anchor: '100%',
  queryMode: 'local',
  initComponent: function() {
    var list = [];
    for(var name in Tualo.summaryrenderer){
      if (typeof Tualo.summaryrenderer[name]=='function'){
        list.push([name]);
      }
    }
    this.store = Ext.create('Ext.data.ArrayStore',{
        autoLoad: false,
        autoSync: false,
        remoteFilter: false,
        remoteSort: false,
        pageSize: 5000,
        fields: [
          { name: 'id', type: 'string' }
        ],
        data: list
    });
    this.callParent(arguments);
  }

});
