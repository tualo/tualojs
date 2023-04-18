Ext.define('Ext.tualo.grid.pivot.Axis', {
  extend: 'Ext.grid.Panel',
  xtype: 'tualoremotepivotgridaxis',
  requires: [
    'Ext.tree.Panel',
    'Ext.tualo.grid.pivot.window.ListFilter',
    'Ext.tualo.grid.pivot.window.ListFunction',
    'Ext.tualo.grid.pivot.window.NumberFilter',


    'Ext.tualo.grid.pivot.AxisController',
    'Ext.tualo.grid.pivot.AxisModel'
  ],

  controller: 'tualoremotepivotgridaxiscontroller',
  viewModel: {
    type: 'tualoremotepivotgridaxismodel'
  },

  flex: 1,

  viewConfig: {
    plugins: {
        gridviewdragdrop: {
            containerScroll: true,
            dragGroup: 'dd-grid-to-grid-group',
            dropGroup: 'dd-grid-to-grid-group',
            dropZone: {
              overClass: 'dd-over-gridview'
          }
        }
    },
    listeners: {
        drop: 'onDropped',
        beforedrop: 'onBeforedrop',
        celldblclick: 'onCelldblclick'
    }
  },

  
  
  store: {
    type: 'array',
    fields: [
      {name: 'text', type: 'string'},
      {name: 'dataIndex', type: 'string'},
      
      {name: 'phprenderer', type: 'string'},
      {name: 'pivotFunction', type: 'string'},
      
      {name: 'align', type: 'string'},
      {name: 'type', type: 'string'},
      {name: 'datafilter', type: 'string'},
      {name: 'number_filter', type: 'string'},
      {name: 'renderer', type: 'string'}
    ],
    data: []
  },
  columns: [
    {
      bind:{
        text: '{text}'
      },
      dataIndex: 'text',
      flex: 1,
      renderer: function(v,m,rec){
        if (!Ext.isEmpty(rec.get('filter'))){
          return '<i class="fa fa-filter"></i><b>'+v+'</b>';
        }
        return v;
      }
    },
    {
      bind:{
        text: '{textFunction}',
        hidden: '{hiddenFunction}'
      },
      dataIndex: 'pivotFunction',
      flex: 1,
      renderer: function(v,m,rec){
        try{
          console.log('pivotFunction','render',v);
          if (v!=''){
            var c = Ext.create(v,{});
            return c.titleTemplate.replace('{text}',rec.get('text'));
          }else{
            return '';
          }
        }catch(e){
          return v;
        }
      }
    },

    {
      bind:{
        text: '{textFilter}',
        hidden: '{hiddenFilter}'
      },
      dataIndex: 'filter',
      flex: 1,
      renderer: function(v){
        if (typeof v=='undefined'){
          return this.unfilteredText;
        }else{
          return (v.length===0)?this.unfilteredText:v;
        }
      }
    },
    {
      bind:{
        text: '{textFilter}',
        hidden: '{hiddenNumberFilter}'
      },
      dataIndex: 'number_filter', 
      flex: 1,
      renderer: function(v){
        if (typeof v=='undefined'){
          return this.unfilteredText;
        }else{
          var txt = [];
          if (typeof v.equal === 'number'){
            txt.push("= "+v.equal);
          }

          if (typeof v.smaller === 'number'){
            txt.push("&lt; "+v.smaller);
          }

          if (typeof v.greater === 'number'){
            txt.push("&gt; "+v.greater);
          }
          return txt.join(' und ');
        }
      }
    }
  ],

  constructor: function(config) {
    this.callParent([config]);
    console.log('config',config);
    if (config.text){
      this.getViewModel().set('text',config.text);
    }
    if (config.textFunction){
      this.getViewModel().set('textFunction',config.textFunction);
    }
    if (config.textFilter){
      this.getViewModel().set('textFilter',config.textFilter);
    }
    if (config.showFunction){
      console.log('showFunction',config.showFunction);
      this.getViewModel().set('showFunction',config.showFunction);
    }
    if (config.showNumberFilter){
      this.getViewModel().set('showNumberFilter',config.showNumberFilter);
    }
    if (config.showFilter){
      this.getViewModel().set('showFilter',config.showFilter);
    }

    
  },

  /*
  constructor: function(config) {
    config.columns = [
    {
      text: config.text,
      dataIndex: 'text',
      flex: 1,
      renderer: function(v,m,rec){

        //pencil-alt
        if (!Ext.isEmpty(rec.get('filter'))){
          return '<i class="fa fa-filter"></i><b>'+v+'</b>';
        } 
        return v;
      }
    },
    {
      text: (config.textFunction)?config.textFunction:'Funktion',
      dataIndex: 'pivotFunction',
      flex: 1,
      hidden: (config.showFunction)?!config.showFunction:true,
      //hidden: true,
      renderer: function(v,m,rec){
        try{
          var c = Ext.create(v,{});
          return c.titleTemplate.replace('{text}',rec.get('text'));
        }catch(e){
          return v;
        }
      }
    },
    {
      text: (config.textFilter)?config.textFilter:'Filter',
      dataIndex: 'filter',
      flex: 1,
      hidden: true,
      //hidden: (config.showFilter)?!config.showFilter:true,
      renderer: function(v){
        if (typeof v=='undefined'){
          return this.unfilteredText;
        }else{
          return (v.length===0)?this.unfilteredText:v;
        }
      }
    },
    {
      text: (config.textFilter)?config.textFilter:'Filter',
      dataIndex: 'number_filter', flex: 1,
      //hidden: (config.showNumberFilter)?!config.showNumberFilter:true,
      hidden: true,
      renderer: function(v){
        if (typeof v=='undefined'){
          return this.unfilteredText;
        }else{
          var txt = [];
          if (typeof v.equal === 'number'){
            txt.push("= "+v.equal);
          }

          if (typeof v.smaller === 'number'){
            txt.push("&lt; "+v.smaller);
          }

          if (typeof v.greater === 'number'){
            txt.push("&gt; "+v.greater);
          }
          return txt.join(' und ');
        }
      }
    }
    ];
    
    this.store = Ext.create('Ext.data.Store',{
      fields: [
  			{name: 'text', type: 'string'},
  			{name: 'dataIndex', type: 'string'},
  			{name: 'phprenderer', type: 'string'},
  			{name: 'pivotFunction', type: 'string'},
        {name: 'align', type: 'string'},
        {name: 'type', type: 'string'},
  			{name: 'datafilter'},
  			{name: 'number_filter'},
  			{name: 'renderer'}
  		],
      data: []
    })
    this.showFunction = (config.showFunction)?config.showFunction:false;
    this.showFilter = (config.showFilter)?config.showFilter:false;
    this.showNumberFilter = (config.showNumberFilter)?config.showNumberFilter:false;
    this.callParent([config]);
  },
  

  initComponent: function(){
    this.viewConfig = {
      plugins: {
        ptype: 'gridviewdragdrop',
        dragGroup: this.xid+'-Columns',
        dropGroup: this.xid+'-Columns'
      },
      listeners: {
        scope: this,
        beforedrop: this.onBeforeDrop,
        drop: this.onDropped,
        //itemdblclick: this.onItemdblclick,
        celldblclick: this.onCelldblclick
      }
    };
    this.callParent(arguments);
    this.on('render',function(){
      //this.getStore().sort('text', 'ASC');
    },this);
    //console.log(this.model,this.getStore().getRange());
  },
  */
  /*,
  onBeforeDrop: function(node, data, overModel, dropPosition, dropHandlers, eOpts){
    console.log('beforedrop',data);
    return this.fireEvent('beforedrop',[node, data, overModel, dropPosition, dropHandlers, eOpts]);
  },
  onDropped: function(node, data, dropRec, dropPosition) {
    //var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
    if (this.appendable===true){
      if (this.fireEvent('drop',[node, data, dropRec, dropPosition])){
          return this.fireEvent('changed',[this]);
      }else{
        return false;
      }
    }
  }
  */
});
