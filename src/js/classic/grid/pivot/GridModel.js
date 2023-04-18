Ext.define('Ext.tualo.grid.pivot.GridModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.tualoremotepivotgridgridmodel',
  formulas: {

  },
  stores: {
    aggregate: {
      type: 'json',
      autoLoad: false,
      autoSync: false,
      remoteFilter: false,
      remoteSort: false,
      pageSize: 5000,
      fields: [
        { name: 'id', type: 'number' }
      ],
      listeners:{
        beforeload: 'onBeforeStoreLoad',
        load: 'onStoreLoad',
        metachange: 'onMetaChanged'
      },
      proxy: {
        type: 'ajax',
        noCache: true,
        url: './index.php',
        extraParams: {
          TEMPLATE: 'NO',
          cmp: 'cmp_beleglisten'
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
    }
  }
});
