Ext.define('Ext.tualo.form.field.DSFields', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualodsfields'],
  valueField: 'id',
  displayField: 'id',
  anchor: '100%',
  queryMode: 'local',

  config: {
    tablename: null,
  },
  publishes: {
    tablename: true
  },

  updateTablename: function(nv, ov) {
    if (this.store){
      this.store.load();
    }else{
      Ext.defer(this.updateTablename,1000,this,[nv, ov]);
    }
  },
  onFocus: function(){
    this.store.load();
    this.callParent(arguments);
  },

  initComponent: function() {
    var fld = this;

    fld.up('form').on('recordchanged',function(v){
      if ( (typeof v!='undefined') && (v!=null) && (!Ext.isEmpty(v)) ){

        this.tablename = v.get('table_name');
        this.store.load();
      }
    },this);

    this.store = Ext.create('Ext.data.JsonStore',{
        autoLoad: false,
        autoSync: false,
        remoteFilter: true,
        remoteSort: false,
        pageSize: 50000,
        listeners: {
          scope: this,
          beforeload: function(store,opts,eopts){
            try{
              var params = opts.getParams();
              if (typeof params==='undefined'){
                params={};
              }
              if (this.tablename){
                params.tablename=this.tablename;
                try{
                  var r = fld.up('form').getRecord();
                  var v = r.data;
                  if (!Ext.isEmpty(v['table_name'])){
                    params.tablename = v['table_name'];
                  }
                }catch(e){
  
                }

                if (typeof params.tablename == 'undefined'){
                  try{
                    var r = fld.up('form').getCurrentRecord();
                    var v = r.data;
                    if (!Ext.isEmpty(v['table_name'])){
                      params.tablename = v['table_name'];
                    }
                  }catch(e){
    
                  }
                }
  
                if (typeof params.tablename == 'undefined'){
                  try{
                    var v = fld.up('form').getValues();
                    if (!Ext.isEmpty(v['table_name'])){
                      params.tablename = v['table_name'];
                    }
                  }catch(e){
    
                  }
                }
              }else{
                //console.warn('Ext.tualo.form.field.DSFields','missing table name');
                return false;
              }
  
              opts.setParams(params);
              
            }catch(e){
              return false;
            }
            return true;
          }
        },
        fields: [
          { name: 'id', type: 'string' }
        ],
        proxy: {
          type: 'ajax',
          noCache: true,
          url: './tualocombo/dsfields',
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
    this.callParent(arguments);
  }

});
