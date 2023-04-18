Ext.define('Ext.tualo.form.field.DSTrigger', {
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.tualodstrigger'],
  valueField: 'id',
  displayField: 'id',
  anchor: '100%',
  queryMode: 'local',

  onValuesChanged: function( form, values, eOpts ){
    if (values['tables.table_name']){
      this.tablename = values['tables.table_name'];
    }else if (values['table_name']){
      this.tablename = values['table_name'];
    }else{
      for(var p in values){
        if(values.hasOwnProperty(p)){
          console.log(p.substring(p.length-10));
          if (p.substring(p.length-10)=='table_name'){
            this.tablename = values[p]
          }
        }
      }
    }
    console.log(values);
    this.store.load();
  },

  initComponent: function() {

    var form = this.up('form');
    if (form){
      form.on('render',function(f){
        f.getForm().on('valueschanged',this.onValuesChanged,this);
      },this)
    }
    this.on('focusenter',function(me){
      var form = this.up('form');
      if (form){
        this.onValuesChanged(form,form.getForm().getValues(),{});
      }
    },this);
    this.store = Ext.create('Ext.data.JsonStore',{
        autoLoad: false,
        autoSync: false,
        remoteFilter: false,
        remoteSort: false,
        pageSize: 5000,
        listeners: {
          scope: this,
          beforeload: function(store,opts,eopts){
            var params = opts.getParams();
            if (typeof params==='undefined'){
              params={};
            }
            if (this.tablename){
              params.tablename=this.tablename;
            }else{
              console.warn('Ext.tualo.form.field.DSTrigger','missing table name');
              return false;
            }

            opts.setParams(params);
            return true;
          }
        },
        fields: [
          { name: 'id', type: 'string' }
        ],
        proxy: {
          type: 'ajax',
          noCache: true,
          url: './tualocombo/dstrigger',
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
