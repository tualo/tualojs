Ext.define('Ext.tualo.grid.pivot.window.ListFilter', {
  extend: 'Ext.tree.Panel',
  alias: 'widget.listfilterpanel',
  rootVisible: false,
  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [{
        //hidden: ( !me.showFilter )&&(!me.showNumberFilter),
        //text: me.unselectText+'/'+me.selectText,
        text: 'aufheben/auswählen',
        handler: function(btn){
          btn.up('listfilterpanel').unOrSelectAll();

          /*
          if (type == 'Ext.tualo.grid.pivot.window.ListFilter'){
            //me.configWindow.record.set('filter',[]);
            me.typePanel.unOrSelectAll();
          }
          if (type == 'Ext.tualo.grid.pivot.window.NumberFilter'){
            //me.configWindow.record.set('number_filter',{});
          }
          //me.configWindow.hide();

          //Ext.destroy(me.configWindow);
          //me.fireEvent('changed',[me]);
          */
        }
      },{
        xtype: 'textfield',
        emptyText: 'Suchen',
        flex: 1,
        listeners: {
          change: function(fld,nv,ov){
            var view = fld.up('listfilterpanel');
            nv = nv.toLowerCase();
            view.filterTextField(nv);
          }
        }
    }]
  }],
  filterTextField: function(text){
    if (typeof  this.tmrfilter !='undefined'){
      Ext.undefer(this.tmrfilter);
    }else{

    }
    this.filterText = text;
    this.tmrfilter = Ext.defer(this.filterTextFieldDeferred,500,this,[text]);
  },
  filterText: '',
  filterTextFieldDeferred: function(text){
    var store = this.getStore();
    store.getRoot().expand(true);
    var filters = store.getFilters();
    filters.removeAll();
    filters.add( this.filteredFn.bind(this) );

  }, 
  filteredFn: function(record){
    if (this.filterText==''){
      return true;
    }
    if (record.get('children')){
      return true;
    }else{
      return record.get('text').toLowerCase().indexOf(this.filterText)>=0;
    }
  },

  getValue: function(){

    var root = this.getStore().getRootNode();
    var r = this.getCheckedChilds(root);
    return r;
  },
  getCheckedChilds: function(node){
    var result = [];
    var me = this;
    node.eachChild( function(item){

      if (item.get("leaf")){
        if (item.get("checked")){
          if (this.filteredFn(item)){
            result.push(item.get("text"));
          }
        }
      }else{
        result = result.concat(me.getCheckedChilds(item));
      }
    },this);
    return result;
  },
  constructor: function(config){
    var me = this,
    record= config.record,
    text ='',
    chlds = [],
    hash = {},
    vals = [],
    filter = config.record.get('filter');

//console.log(config.record.get('dataIndex'),vals);
    if (typeof config.listeners === 'undefined'){
      config.listeners = {};

    }
    config.listeners.scope = this;

    config.listeners.checkchange = function( node, checked, eOpts ){
      var me = this;

      if (checked){
        me.checkItemsUp(node,checked)
      }

      node.eachChild( function(item){
        item.set('checked',checked);
      });
      // ToDo. check up to root
    }

    var me = this;
    //console.log(config.record);
    config.grid.getDistinct(config.record,[],true,function(vals){

      if (typeof filter=='undefined'){
        filter=[];
      }
      var chlds = [];

      for(var i in vals){
        if ( (typeof record.get('renderer')!=='undefined') && (typeof record.get('renderer').call=='function') ){
          text = record.get('renderer').call(me,vals[i].value);

        }else{
          text = vals[i].value;
        }
        if (typeof vals[i].treeValue!='undefined'){
          if (typeof hash[vals[i].treeValue] == 'undefined'){
            hash[vals[i].treeValue] = chlds.length;

            chlds.push({
              text: vals[i].treeValue,
              leaf: false,
              children: [],
              checked: filter.indexOf(vals[i].value)==-1?(filter.length==0?true:false): true
            });

          }

          chlds[hash[vals[i].treeValue]].children.push({
            text: text,
            leaf: true,
            checked: filter.indexOf(vals[i].value)==-1?(filter.length==0?true:false): true
          });

        }else{
          chlds.push({
            text: text,
            leaf: true,
            checked: filter.indexOf(vals[i].value)==-1?(filter.length==0?true:false): true
          });
        }
      }

      var store = Ext.create('Ext.data.TreeStore', {
        root :{
          text: 'Alle/ Keine',
          expanded: true,
          children: chlds
        }
      });
      me.bindStore(store);

    })

    config.store = Ext.create('Ext.data.TreeStore', {
      root :{
        text: 'Alle/ Keine',
        expanded: true,
        children: chlds
      }
    });
    this.callParent([config]);
  },

  unOrSelectAll: function(){
    var me = this;
    var node = me.getStore().getRootNode();
    var set = false;
    if (node.childNodes.length>0){
      if (node.childNodes[0].get('checked')){
        set=false;
      }else{
        set=true;
      }

    }
    me.checkItemsDown(node,set);
    /*
    node.eachChild( function(item){
      item.set('checked',set);

    });
    */
  },
  checkItemsUp: function(node,checked){
    if (node.parentNode!==null){
      node.parentNode.set('checked',checked);
      this.checkItemsUp(node.parentNode,checked);
    }
  },
  checkItemsDown: function(node,checked){
    var me=this;
    node.eachChild( function(item){
      item.set('checked',checked);
      me.checkItemsDown(item,checked);
    });
  },
  initComponent: function(){



    this.callParent(arguments);
  }
})
