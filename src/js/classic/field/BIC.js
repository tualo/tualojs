Ext.define('Ext.tualo.form.field.BIC', {
  //extend: 'Tualo.DataSets.combobox.bundesbank_bankleitzahlen.BIC',
  extend: 'Ext.form.field.ComboBox',
  alias: ['widget.bic'],
  ibanChanged: function(f,nv,ov){
    if (f.isValid()){
      try{
        var iban = f.getValue().replace(/\s/g,'');
        var blz = iban.substring(4,12);
        var view = this.getViewModel();
        if (view){
          var store = view.storeInfo.bundesbank_bankleitzahlen;
          var proxy = store.getProxy();
          var params = proxy.getExtraParams( );
          params.reference = '{"bankleitzahl": "'+blz+'" }';
          proxy.setExtraParams(params);
          store.load();
        }
      }catch(e){
        console.log(e);
      }
    }
  },
  bicStoreLoaded: function(store,records){
    if (records.length===1){
      this.setValue(records[0].get('bic'));
    }

  },
  listeners: {
    afterrender: function(me,opts){
      try{
        var form = me.up('form');
        if (form){
          var iban_field = form.getForm().getFields( ).findBy(function(item){
            return item.$className==='Ext.tualo.form.field.IBAN';
          });
          if (iban_field){
            iban_field.on('change',this.ibanChanged,this);
            this.iban_field = iban_field;
            var store = this.getViewModel().storeInfo.bundesbank_bankleitzahlen;
            store.on('load',this.bicStoreLoaded,this);
          }
        }
      }catch(e){

      }
    }
  }
});
