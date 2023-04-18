Ext.define('Ext.tualo.grid.pivot.AxisController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tualoremotepivotgridaxiscontroller',
    onRenderView: function(){
    },
    onBeforedrop: function(node, data, overModel, dropPosition, dropHandlers){
        console.log('onBeforedrop',node, data, overModel, dropPosition, dropHandlers);
        //dropHandlers.wait = true;
        //dropHandlers.processDrop();
        //dropHandlers.cancelDrop();
        this.getView().getStore().sorters.clear();
        return true;
    },
    onDropped: function(){
        console.log('onDropped',arguments);
        return false;
    },
    onCelldblclick: function( gr, td, cellIndex, record, tr, rowIndex, e, eOpts ){
        //onItemdblclick: function(th,record,item,index,e,eOpts){
        var me = this;
        var model = me.getViewModel();
        var grid = null;
        var c=0;
        var o= this.getView().up('tualoremotepivotgrid');
          grid = o;
    
    
          if (model.get('showFunction')||model.get('showFilter')||model.get('showNumberFilter')){
            var chlds = [],
            filter = [],
            hash = {},
            type = "",
            title = "";
    
    
    
            clickedIndex = gr.getHeaderCt().getHeaderAtIndex(cellIndex).dataIndex;
            switch(clickedIndex){
              case "number_filter":
                type ='Ext.tualo.grid.pivot.window.NumberFilter';
                title = "Werte-Filter";
                break;
              case "pivotFunction":
                type ='Ext.tualo.grid.pivot.window.ListFunction';
                title = "Funktionen";
                break;
              case "filter":
                type ='Ext.tualo.grid.pivot.window.ListFilter';
                title = "Filter";
                break;
              default:
                type ='Ext.tualo.grid.pivot.window.ListFilter';
                title = "Filter";
            }
    
            me.typePanel = Ext.create(type,{
              record: record,
              grid: grid,
              
              bbar:[
    
              {
                scope: me,
                hidden: ( !model.get('showFilter') )&&(!model.get('showNumberFilter')),
                text: model.get('clearFilterText'),
                handler: function(){
                  if (type == 'Ext.tualo.grid.pivot.window.ListFilter'){
                    me.typePanel.record.set('filter',[]);
                  }
                  if (type == 'Ext.tualo.grid.pivot.window.NumberFilter'){
                    me.typePanel.record.set('number_filter',{});
                  }
                  me.configWindow.hide();
    
                  Ext.destroy(me.configWindow);
                  me.fireEvent('changed',[me]);
    
                }
              },
              {
                scope: me,
                //hidden: !me.showFilter,
                text: model.get('cancelFilterText'),
                handler: function(){
                  me.configWindow.hide();
                  Ext.destroy(me.configWindow);
                  me.fireEvent('changed',[me]);
                }
              },
              '->',
              {
                scope: me,
                text: model.get('applyFilterText'),
                handler: function(){
                  //console.log("**",type);
    
                  if (type == 'Ext.tualo.grid.pivot.window.ListFilter'){
                    me.typePanel.record.set('filter',[]);
                  }
                  if (type == 'Ext.tualo.grid.pivot.window.NumberFilter'){
                    me.typePanel.record.set('number_filter',{});
                  }
    
                  if (type == 'Ext.tualo.grid.pivot.window.ListFilter'){
                    //console.log('***',me.configWindow.getValue());
                    record.set('filter',me.typePanel.getValue());
                  }
                  if (type == 'Ext.tualo.grid.pivot.window.NumberFilter'){
                    record.set('number_filter',me.typePanel.getValue());
                  }
                  if (type == 'Ext.tualo.grid.pivot.window.ListFunction'){
                    record.set('pivotFunction',me.typePanel.getValue());
                  }
    
                  me.configWindow.hide();
    
                  Ext.destroy(me.configWindow);
                }
              }
              ]
            });
    
            me.configWindow = Ext.create('Ext.tualo.Window',{
              layout: 'fit',
              closeAction: 'close',
              title: title,
              items: [
                me.typePanel
              ]
            });
    
            me.configWindow.show();
            console.log('me.configWindow',me.configWindow);
            me.configWindow.resizeMe();
    
    
          } // show func, filter, number filter
      }
});