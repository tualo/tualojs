Ext.define('Ext.tualo.form.field.Kontenbezug', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualokontenbezug'],
  valueField: 'bezeichnung',
  displayField: 'bezeichnung',
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
          { name: '__id', type: 'string' },
          { name: 'bezeichnung', type: 'string' }
        ],
        listeners: {
          load: function(store,records, successful, operation, eOpt){
            store.add({
              __id: 'steuerschluessel',
              bezeichnung: 'steuerschluessel'
            })
          }
        },
        proxy: {
          type: 'ajax',
          noCache: true,
          url: './ds/steuergruppen/read',
          extraParams: {
            query:'',
            only:'steuergruppe,bezeichnung',
            queryField:'bezeichnung',
            page:1,
            start:0,
            limit:1000
          },
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
