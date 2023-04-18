Ext.define('Ext.tualo.form.field.RPTLockField', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualorptlockfield'],
  valueField: 'id',
  displayField: 'name',
  anchor: '100%',
  queryMode: 'local',

  initComponent: function() {

    this.store = Ext.create('Ext.data.ArrayStore',{

      fields: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' }
      ]
    });
    this.store.loadData([
      ['-9','vorgemerkt'],
      ['-99','gesperrt'],
      ['','nicht gesperrt']
    ]);
    this.callParent(arguments);
  }

});
