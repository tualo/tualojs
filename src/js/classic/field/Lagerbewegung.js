Ext.define('Ext.tualo.form.field.Lagerbewegung', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualolagerbewegung'],
  valueField: 'id',
  displayField: 'name',
  anchor: '100%',
  queryMode: 'local',
  initComponent: function() {
    this.store = Ext.create('Ext.data.ArrayStore',{
      fields: [
        { name: 'id', type: 'number' },
        { name: 'name', type: 'string' }
      ],
      data: [
        ['-1','Abgang'],
        ['0','keine'],
        ['1','Zugang']
      ]
    });
    this.store.load();
    this.callParent(arguments);
  }

});
