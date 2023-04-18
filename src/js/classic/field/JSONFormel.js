

Ext.define('Ext.tualo.form.field.JSONFormel', {
  extend: 'Ext.form.field.Text',
  alias: ['widget.tualojsonformel'],


  triggers: {
    wnd: {
      cls: Ext.baseCSSPrefix + 'form-arrow-trigger',
      handler: function(){
        this.openWindow();
      }
    }
  },
  initComponent: function() {
    this.callParent(arguments);
  },
  getGrid: function(){
    if(typeof this.grid==='undefined'){

      var cstore = Ext.create('Ext.data.ArrayStore', {
        fields: [
          'field',
          'name'
        ],
        idProperty: 'field',
        data: [
          ['warengruppe','Warengruppe'],
          ['rabattgruppe','Rabattgruppe'],
          ['frankierservice_formel','Frankierservice'],
          ['servicepauschale_formel','Servicepauschale'],
          ['preiskategorie','Preiskategorie'],
          ['co2zuschlag','Co2 Zuschlag-Kennzeichen'],
          ['use_co2zuschlag','Co2 Zuschlag-Artikel'],
          ['geschaeftsstatus','Kundengruppe']
        ]
      });

      var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
          'field',
          'value'
        ],

        data: [

        ]
      });



    this.factor=Ext.create('Ext.form.field.Number',{
      xtype: 'numberfield',
      fieldLabel: 'Faktor',
      name: 'factor',
      value: 1
    })

    this.valuefield=Ext.create('Ext.form.field.ComboBox',{
      xtype: 'combobox',
      store: {
        type: 'array',
        fields: ['v','name'],
        data: [ ['netto','Netto'],['anzahl','Anzahl'] ]
      },
      displayField: 'name',
      valueField: 'v',
      fieldLabel: 'Feld',
      name: 'valuefield'
    })

    this.kind=Ext.create('Ext.form.field.ComboBox',{
      xtype: 'combobox',
      store: {
        type: 'array',
        fields: ['v','name'],
        data: [ ['ratio','Verhältnis'],['amountMultiply','Multipikation'],['fixedPrice','fester Preis'] ]
      },
      displayField: 'name',
      valueField: 'v',
      fieldLabel: 'Art',
      name: 'valuefield'
    })


      this.grid = Ext.create('Ext.grid.Panel', {
        //region: 'center',
        frame: false,
        //anchor: '100% 100%',
        store: store,
        border: false,
        tbar: [
          {
            text: 'Add',
            scope: this,
            handler: function(){
              this.grid.getStore().add({
                field: 'geschaeftsstatus',
                value: ''
              })
            }
          }
        ],
        selModel: 'cellmodel',
        plugins: {
            ptype: 'cellediting',
            clicksToEdit: 1
        },
        columns: [
          {
            header: 'Feld',
            dataIndex: 'field',
            flex: 1,
            editor: {
              xtype: 'combobox',
              store: cstore,
              displayField: 'name',
              valueField: 'field'

            },
            renderer: function(v,m,r){
              var rec = cstore.findRecord('field',v);
              if (rec){
                v = rec.get('name');
              }
              return v;
            }
          },
          {
            header: 'Wert',
            dataIndex: 'value',
            flex: 1,
            editor: {
              xtype: 'textfield'
            }
          }
        ]
      });
    }
    return this.grid;
  },
  openWindow: function(btn){


    var wnd=this.getWindow();
    wnd.show();
    wnd.resizeMe();

    var v = this.getValue();

    try{
      var vO = JSON.parse(v);
      //this.text.setValue(vO.ratio);
      if (typeof vO.ratio=='number'){
        this.kind.setValue('ratio');
        this.valuefield.setValue(vO.value);
        this.factor.setValue(vO.ratio);
        
      }else if (typeof vO.fixedPrice=='number'){
        this.kind.setValue('fixedPrice');
        this.valuefield.setValue(vO.value);
        this.factor.setValue(vO.fixedPrice);
        
      }else{
        this.kind.setValue('amountMultiply');
        this.valuefield.setValue(vO.value);
        this.factor.setValue(vO.amountMultiply);
        
      }
      this.grid.getStore().loadData(vO.filter);
    }catch(e){
      //this.text.setValue(1);
      console.error(e);
      this.grid.getStore().loadData([]);
    }

  },
  getWindow: function(){
    if (typeof this.wnd==='undefined'){
      this.grid = this.getGrid();
      /*
      this.text = Ext.create('Ext.form.field.Number', {
        region: 'south',

        fieldLabel: 'Faktor',
        value: 1
      });
      */

      this.wnd = Ext.create('Ext.tualo.Window', {
        modal: true,
        title: "Formel",
        width: 300,
        height: 200,
        closeAction: 'hide',
        bodyPadding: 10,
        layout: 'border',
        items: [
          {
            xtype: 'panel',
            border: true,
            layout: 'fit',
            region: 'center',
            items: [
              this.grid
            ]
          },
          {
            xtype: 'form',
            region: 'south',
            itemId: 'settings',
            items: [
              this.valuefield,
              this.kind,
              this.factor
            ]
          }
          //this.text
        ],
        buttons: [{
          text: 'Abbrechen',
          handler: this.onWndClose
        }, {
          text: '&Uuml;bernehmen',
          scope: this,
          handler: this.onWndDone
        }]
      });
    }
    return this.wnd;
  },
  onWndClose: function(btn){
    btn.up().up().close();
  },
  onWndDone: function(btn) {
    var wnd = btn.up().up();
    var o = {
      filter: [],
      value: 'netto'
    };
    var settings = wnd.getComponent('settings').getValues();
    o.value = this.valuefield.getValue();

    if (this.kind.getValue()=='amountMultiply'){
      o.amountMultiply = this.factor.getValue()*1;
    }else if (this.kind.getValue()=='fixedPrice'){
      o.fixedPrice = this.factor.getValue()*1;
    }else{
      o.ratio = this.factor.getValue()*1;
    }
    console.log('X',settings);
    var r = this.grid.getStore().getRange();
    for(var i=0;i<r.length;i++){
      if (r[i].get('field')!=''){
        o.filter.push({
          field: r[i].get('field'),
          value: r[i].get('value')
        })
      }
    }
    this.setValue(JSON.stringify(o,null,0));
    btn.up().up().close();
  }
});
