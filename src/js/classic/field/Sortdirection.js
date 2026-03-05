Ext.define('Tualo.form.field.Sortdirection', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualo_sort_direction'],
  valueField: 'id',
  displayField: 'id',
  anchor: '100%',
  queryMode: 'local',
  initComponent: function () {
    this.store = Ext.create('Ext.data.ArrayStore', {
      autoLoad: false,
      autoSync: false,
      remoteFilter: false,
      remoteSort: false,
      pageSize: 5000,
      fields: [
        { name: 'id', type: 'string' }
      ],
      data: [
        ['start'],
        ['end'],
        ['left'],
        ['right'],
        ['center']
      ]
    });
    this.callParent(arguments);
  }


});
