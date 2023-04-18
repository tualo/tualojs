Ext.define('Ext.tualo.form.field.SummaryType', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualosummarytype'],
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
          [ 'count' ],
          [ 'sum' ],
          [ 'average' ]
        ]
    });
    this.callParent(arguments);
  }

});
