Ext.define('Ext.tualo.form.field.Logins', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualologins'],
  valueField: 'id',
  displayField: 'id',
  anchor: '100%',
  queryMode: 'local',
  initComponent: function() {
    this.store = Ext.create('Ext.data.JsonStore',{
        autoLoad: false,
        autoSync: false,
        remoteFilter: false,
        remoteSort: false,
        pageSize: 5000,
        fields: [
          { name: 'id', type: 'string' }
        ],
        proxy: {
          type: 'ajax',
          noCache: true,
          url: './tualocombo/login',
          reader: {
            type: 'json',
            rootProperty: 'data',
            idProperty: 'id'
          },
          listeners: {
            exception: function(proxy, response, operation){
              var o,msg;
              try{
                o = Ext.JSON.decode(response.responseText);
                msg = o.msg;
              }catch(e){
                msg = response.responseText;
              }
              Ext.MessageBox.show({
                title: 'Fehler',
                msg: msg,
                icon: Ext.MessageBox.ERROR,
                buttons: Ext.Msg.OK
              });
            }
          }
        }
    });
    this.store.load();
    this.callParent(arguments);
  }

});
