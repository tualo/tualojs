Ext.define('Ext.tualo.form.field.ListSelection', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualolistselection'],
  valueField: 'id',
  displayField: 'id',
  anchor: '100%',
  queryMode: 'local',
  initComponent: function() {
    this.store = Ext.create('Ext.data.ArrayStore',{
        autoLoad: false,
        autoSync: false,
        remoteFilter: false,
        remoteSort: false,
        pageSize: 5000,
        fields: [
          { name: 'id', type: 'string' }
        ],
        data:[
          [ 'cellmodel' ],
          [ 'rowmodel' ],
          [ 'tualomultirowmodel' ]
        ]
    });
    this.callParent(arguments);
  }

});
