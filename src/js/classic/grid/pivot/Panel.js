/*
Copyright (c) 2013 tualo solutions GmbH

Contact:  http://www.tualo.de/

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.tualo.de/.

Build date: 2013-06-05
*/
/**
* @class Ext.tualo.grid.pivot.Panel
* @extends Ext.Panel
* <p>This class represents represent data in a tabular format of rows and columns. The data can be grouped in columns and rows.
* The PivotGrid is composed of the following:</p>
* <div class="mdetail-params"><ul>
* <li><b>{@link Ext.data.Store Store}</b> : The Model holding the data records (rows)
* <div class="sub-desc"></div></li>
* <li><b>{@link Ext.grid.ColumnModel Column model}</b> : Column makeup
* <div class="sub-desc"></div></li>
* <li><b>{@link Ext.grid.Panel Grid}</b> : Encapsulates the user interface
* <div class="sub-desc"></div></li>
* <li><b>{@link Ext.tualo.PivotGridAxis Axis}</b> : Axis grids
* <div class="sub-desc"></div></li>
* </ul></div>
* <p>Example usage:</p>
* <pre><code>
var grid = new Ext.tualo.PivotGrid({
{@link #store}: new {@link Ext.data.Store}({
{@link Ext.data.Store#autoDestroy autoDestroy}: true,
{@link Ext.data.Store#reader reader}: reader,
{@link Ext.data.Store#data data}: []
}),
{@link #columns}: [
{header: 'company', width: 200, sortable: true, dataIndex: 'company'},
{header: 'bookingdate', renderer: Ext.util.Format.date('Y-m'), dataIndex: 'bookingdate'},
{header: 'category', dataIndex: 'category'},
{header: 'city', dataIndex: 'city'},
{header: 'amount', dataIndex: 'amount'}
],
topAxis: [
{dataIndex: 'bookingdate'},
{dataIndex: 'category'}
],
leftAxis: [
{dataIndex: 'city'}
],
values: [
{dataIndex: 'amount'}
],
width: 600,
height: 300,
frame: true,
title: 'Pivot Grid',
iconCls: 'icon-grid'
});
* </code></pre>
* @constructor
* @param {Object} config The config object
* @xtype pivotgrid
*/
Ext.define('Ext.tualo.grid.pivot.Panel', {
  extend: 'Ext.panel.Panel',
  xtype: 'tualoremotepivotgrid',
  /**
   * @cfg {String} fieldText Title for the field configuration-gird.
   */
  fieldText: 'Fields',
  /**
   * @cfg {String} columnsText Title for the column configuration-gird.
   */
  columnsText: 'Columns',
  /**
   * @cfg {String} rowsText Title for the row configuration-gird.
   */
  rowsText: 'Rows',
  /**
   * @cfg {String} valuesText Title for the values configuration-gird.
   */
  valuesText: 'Values',
  /**
   * @cfg {String} waitText The text show in the loading mask.
   */
  waitText: 'Please wait ...',
  /**
   * @cfg {Number} sequencePageSize The chunk size for calculating sequencly the pivot data.
   */
  sequencePageSize: 1000,
  /**
   * @cfg {Boolean} showAxisConfiguration True if the axis configuration should be shown.
   */
  showAxisConfiguration: true,
  /**
   * @cfg {String} axisConfigPosition show the axis configuration on the left 'west' or right 'east' (default) side.
   */

  requires: [
    'Ext.grid.Panel',
    'Ext.tualo.grid.pivot.PanelController',
    'Ext.tualo.grid.pivot.PanelModel',
    'Ext.tualo.grid.pivot.Axis',
    'Ext.tualo.grid.pivot.functions.Sum',
    'Ext.tualo.grid.pivot.functions.Count',
    'Ext.tualo.grid.pivot.functions.Average',
    'Ext.tualo.grid.pivot.functions.DistinctCount',
    'Ext.tualo.grid.pivot.functions.Min',
    'Ext.tualo.grid.pivot.functions.Max'
  ],

  columns: [],
  top: [],
  left: [],
  values: [],
  aggregationConfig: {
    url: './index.php',
    extraParams: {
      TEMPLATE: 'NO',
      p: 'ajax/query/aggregate',
      cmp: ''
    }
  },
  getStore: function(){
    var r;
    r = this.lookupReference('grid');
    return r.getStore();
  },
  getAxisStore: function(name){
    var r;
    r = this.getAxis(name);
    if (r){
      r = r.getStore();
    }
    return r;
  },
	getAxis: function(name){
		var r;
		switch(name){
			case 'topAxis':
			case 'top':
				r = this.lookupReference('topAxis');
				break;
			case 'leftAxis':
			case 'left':
				r = this.lookupReference('leftAxis');
				break;
			case 'available':
				r = this.lookupReference('available');
				break;
			case 'values':
				r = this.lookupReference('values');
				break;
		}
    return r;
	},
  layout: 'border',
  controller: 'tualoremotepivotgridcontroller',
  viewModel: {
    type: 'tualoremotepivotgridmodel'
  },
  listeners: {
    render: 'onRenderView'
  },
  items: [{
    region: 'center',
    flex: 3,
    reference: 'grid',
    xtype: 'tualoremotepivotgridgrid'
  }, {
    width: 400,
    split: true,
    region: 'east',
    reference: 'axispanel',
    collapsible: true,
    title: 'Konfiguration',
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    items: [{
      flex: 1,
      xtype: 'panel',
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [{
          text: '<i class="zmdi zmdi-view-dashboard"></i>&nbsp;Felder',
          xtype: 'tualoremotepivotgridaxis',
          reference: 'available',
          showFilter: true,
          showFunction: false
        }, {
          text: '<i class="zmdi zmdi-view-column"></i>&nbsp;Spalten',
          xtype: 'tualoremotepivotgridaxis',
          reference: 'topAxis',
          showFilter: true,
          showFunction: false
        }

      ]
    }, {
      flex: 1,
      xtype: 'panel',
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [{
          text: '<i class="zmdi zmdi-view-stream"></i>&nbsp;Zeilen',
          xtype: 'tualoremotepivotgridaxis',
          reference: 'leftAxis',
          showFilter: true,
          showFunction: false
        }, {
          text: '<i class="zmdi zmdi-view-comfy"></i>&nbsp;Werte',
          xtype: 'tualoremotepivotgridaxis',
          reference: 'values',
          showFunction: true
        }

      ]
    }]
  }],

  onAxisChanged: function(wnd) {
    //console.log(wnd.record);
    //this._store.loadPage(1);
  },
  onStoreLoad: function(store, records, success, opts) {

    //console.log(arguments);
    if (store.proxy) {
      var raw = store.proxy.reader.rawData;
      this.reconfigureColumns(raw.columns);
      //console.log(raw);
      this._data_columns = raw.columns;
      this._data = raw.data;
      var model = Ext.id();
      Ext.define(model, {
        extend: 'Ext.data.Model',
        fields: raw.fields
      });
      var rstore = Ext.create('Ext.data.Store', {
        model: model,
        data: raw.data
      });
      this.reconfigureStore(rstore);
      this._distinctValues = raw.distinct;
      Ext.MessageBox.hide();
    }

  },
  reconfigureRenderer: function(columns) {
    //console.log(columns);
    for (var i in columns) {
      //if (typeof this.headlineRendererMap[columns[i].dataIndex]!=='undefined'){
      //columns[i].text = this.headlineRendererMap[columns[i].dataIndex](columns[i].text);
      //}
      if (typeof this.columnRendererMap[columns[i].rendererMap] !== 'undefined') {
        columns[i].renderer = this.columnRendererMap[columns[i].rendererMap];
      }
      if (typeof this.columnPHPRendererMap[columns[i].rendererMap] !== 'undefined') {
        columns[i].phprenderer = this.columnPHPRendererMap[columns[i].rendererMap];
      }
      if (typeof columns[i].columns !== 'undefined') {
        columns[i].columns = this.reconfigureRenderer(columns[i].columns);
      }
    }
    return columns;
  },

  reconfigureColumns: function(columns) {
    var me = this.grid;
    if (columns) {
      me.headerCt.removeAll();
      columns = this.reconfigureRenderer(columns);
      me.headerCt.add(columns);
    }
    me.getView().refresh();
  },
  reconfigureStore: function(store) {
    var me = this.grid;
    if (store) {
      store = Ext.StoreManager.lookup(store);
      me.bindStore(store);

    }
    me.getView().refresh();
  },
  getDistinct: function(record, filter, unfiltered, cb) {
    var dataIndex = record.get('dataIndex'),
        table = record.get('table');

    if (typeof cb === 'function') {
      var url = this.getStore().initialConfig.proxy.url;
      var extraParams = this.aggregationConfig.extraParams;
      extraParams.distinct = dataIndex;
      if (!Ext.isEmpty(table)){
        extraParams.table_name = table;
      }
      if (this.fireEvent('getdistinct',extraParams)){
        console.log('fireEvent','getdistinct',extraParams)
        /*
        if (!Ext.isEmpty(this.getStore().tzs)){
          extraParams.tzs = this.getStore().tzs;
        }
        */
        Ext.MessageBox.wait('Bitte warten...', '');
        Ext.Ajax.request({
          url: url,
          timeout: 600000,
          params: extraParams,
          success: function(response) {
            Ext.MessageBox.hide();
            var text = response.responseText;
            var o = Ext.JSON.decode(text);
            if (o) {
              if (o.distinct) {
                if (o.distinct[dataIndex]) {
                  cb(o.distinct[dataIndex]);
                }
              }
            }
            // process server response here
          },
          failure: function() {
            Ext.MessageBox.hide();
            //alert('got error from server');
          }
        });
      }
    } else {
      console.trace('pivot grid getDistinct deprecated');
      if ((typeof this._distinctValues === 'object') && (typeof this._distinctValues[dataIndex] != 'undefined')) {
        var v = [],
          f;
        for (var x in this._distinctValues[dataIndex]) {
          f = this._distinctValues[dataIndex][x];
          if (typeof f.value != 'undefined') {
            v.push({
              value: f.value,
              treeValue: f.treeValue
            });
          } else {
            v.push({
              value: f
            });
          }
        }
        return v;
      } else {
        return [];
      }
    }
  },
  getData: function() {

    return this._data;
  }
});
