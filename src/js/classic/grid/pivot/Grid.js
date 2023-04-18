Ext.define('Ext.tualo.grid.pivot.Grid', {
	extend: 'Ext.grid.Panel',
  requires: [
    'Ext.tualo.grid.pivot.GridModel',
    'Ext.tualo.grid.pivot.GridController'
  ],
	xtype: 'tualoremotepivotgridgrid',
  controller: 'tualoremotepivotgridgridcontroller',
	viewModel: {
		type: 'tualoremotepivotgridgridmodel'
  },
  
  
	features: [
    {
	    //id: 'group',
	    ftype: 'groupingsummary',
	    //groupHeaderTpl: '{name}',
	    hideGroupedHeader: false,
	    enableGroupingMenu: true
  },
  /*{
		id: 'tualofixedsummary',
    ftype: 'tualofixedsummary',
    dock: 'bottom',
    rendererFieldName: 'summaryRenderer',
    summaryTypeFieldName: 'summaryType'
  }*/
  ],


  bind: {
    store: '{aggregate}'
  },
  columns: [
    {
      header: 'ID',
      dataIndex: 'id'
    }
  ],
	reconfigureStore: function(config){
		this.controller.reconfigureStore(config);
	}
});
