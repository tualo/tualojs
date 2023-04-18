Ext.define('Ext.tualo.grid.pivot.PanelController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tualoremotepivotgridcontroller',
  onRenderView: function(){
    var configcolumns = this.view.columns;
    var configvalues = this.view.values;
    var configtop = this.view.top;
    var configleft = this.view.left;

    var aggregationConfig = this.view.aggregationConfig;
    /*
    var rendererList = {};
    for(var i=0;i<configcolumns.length;i++){
      if (configcolumns[i].renderer){
        try{

        }catch(e){

        }
      }
    }
    */
    var columns = this.lookupReference('available');
    var topAxis = this.lookupReference('topAxis');
    var leftAxis = this.lookupReference('leftAxis');
    var values = this.lookupReference('values');

    this.view.axis = this.lookupReference('axispanel');


    var columnsStore = columns.getStore();
    console.log(columns);
    console.log(columnsStore);
    
    this.lookupReference('grid').reconfigureStore(aggregationConfig);

    columnsStore.add(configcolumns);

    for(var i=0;i<configvalues.length;i++){
      var r = columnsStore.findRecord('dataIndex',configvalues[i].dataIndex);
      if (r){
        columnsStore.remove(r);
        values.getStore().add(r);
      }
    }
    for(var i=0;i<configtop.length;i++){
      var r = columnsStore.findRecord('dataIndex',configtop[i].dataIndex);
      if (r){
        columnsStore.remove(r);
        topAxis.getStore().add(r);
      }
    }
    for(var i=0;i<configleft.length;i++){
      var r = columnsStore.findRecord('dataIndex',configleft[i].dataIndex);
      if (r){
        columnsStore.remove(r);
        leftAxis.getStore().add(r);
      }
    }


    this.view.fireEvent('beforeload',123);

    this.lookupReference('grid').on('beforeload',function(store, operation, eOpts){
      return this.view.fireEvent('beforeload',store, operation, eOpts);
    },this);
    /*
    var model = this.view.getViewModel();
    var list = model.storeInfo.list;
    var proxy = list.getProxy();
    proxy.setExtraParam('b',this.view.reportindex);
    aggregationConfig: {
      url: './index.php',
      extraParams: {
        sid: sid,
        TEMPLATE: 'NO',
        p: 'ajax/query/aggregate',
        cmp: 'cmp_rn_statistik'
      }
    }
    */
  }
});
