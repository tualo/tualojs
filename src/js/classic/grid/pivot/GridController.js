Ext.define('Ext.tualo.grid.pivot.GridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.tualoremotepivotgridgridcontroller',
  onRenderView: function(){

    /*
    var configcolumns = this.view.columns;
    var columns = this.lookupReference('available');

    columns.getStore().add(configcolumns);
    */
  },
  onMetaChanged: function( pr, meta, eOpts ){
    console.log('meta', pr, meta, eOpts );
    this._data_columns = meta.columns;
    console.log('***',meta.columns);
    meta.columns.forEach(function(item){
      if (item.summaryRenderer){
        var f=eval(item.summaryRenderer);
        if (typeof f=='function'){
          item.summaryRenderer=f;
        }
      }
    })
    this.reconfigureColumns(meta.columns);
  },
  onStoreLoad: function(store,records,success,opts){
    console.log('here',store.proxy.reader);
    if (store.proxy){
      /*
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
  		var store = Ext.create('Ext.data.Store',{
  			model: model,
  			data: raw.data
  		});
  		this.reconfigureStore(store);
  		this._distinctValues=raw.distinct;
  		Ext.MessageBox.hide(   );
      */
  	}
  },
  onBeforeStoreLoad: function(store, operation, eOpts){
    return this.view.fireEvent('beforeload',store, operation, eOpts);
  },
  columnRendererMap:{},
  columnPHPRendererMap:{},



  reconfigureRenderer: function(columns){
		if (typeof columns=='undefined'){
			console.trace("ERROR reconfigureRenderer");
			return;
		}
  	for(var i=0;i<columns.length;i++){
  		//if (typeof this.headlineRendererMap[columns[i].dataIndex]!=='undefined'){
  		//columns[i].text = this.headlineRendererMap[columns[i].dataIndex](columns[i].text);
  		//}
      //console.log(i,columns[i],columns[i].rendererMap);

  		if (typeof this.columnRendererMap[columns[i].rendererMap]!=='undefined'){
  			columns[i].renderer = this.columnRendererMap[columns[i].rendererMap];
  		}
  		if (typeof this.columnPHPRendererMap[columns[i].rendererMap]!=='undefined'){
  			columns[i].phprenderer = this.columnPHPRendererMap[columns[i].rendererMap];
  		}
      if (typeof columns[i].renderer==='string'){
        columns[i].renderer = eval(columns[i].renderer);
      }

  		if(typeof columns[i].columns!=='undefined'){
  			columns[i].columns = this.reconfigureRenderer(columns[i].columns);
  		}
  	}
  	return columns;
  },


  getFN: function(str){
		if (typeof str=='function'){
			return str;
		}
  	var fn=str;
  	if (typeof str=='string'){
  		var x=str.split('(');
  		str=x[0];
  		str=str.split('.');
  	}
  	var o=window;
  	while (str.length>0){
  		o=o[str[0]];
  		if ((Ext.isEmpty(o))&&(typeof o!='function')){
  			return false;
  		}
  		str=str.slice(1);
  	}
  	if (typeof o=='function'){
  		return eval(fn);
  	}else{
  		return false;
  	}
  },
  makeFN: function(columns){
  	columns.forEach(function(item){
			item.autoSizeColumn = true;
  		if (item.summaryRenderer){

  			var f=this.getFN(item.summaryRenderer);
  			if (typeof f=='function'){
  				var dataIndex = item.dataIndex;
  				item.summaryRenderer=f;
  				item.summaryType=function(recs){
  					var s = 0;
  					recs.forEach(function(r){
  						s += parseFloat(r.get(dataIndex));
  					});
  					return s;
  				}

          item.fixedSummaryRenderer=function(){
            console.log('fixedSummaryRenderer',arguments)
            return 99999;
          };
          item.fixedSummaryType='sum';
  			}else{
  				console.warn('not found  summaryRenderer',item.summaryRenderer,item.dataIndex);
  			}
  		}
  		if (item.columns){
  			item.columns = this.makeFN(item.columns);
  		}
  	}.bind(this));
  	return columns;
  },
  reconfigureColumns: function (columns) {
  	var me = this.view;
  	if (columns) {
			me.headerCt.removeAll(); 
      columns = this.makeFN(columns); 
  		columns = this.reconfigureRenderer(columns); 
  		me.headerCt.add(columns);
  	}

  	me.getView().refresh();
    console.log(me.getView().grid);

		/*
    me.getView().getFeature('tualofixedsummary').grid = me.getView().grid;
		me.getView().getFeature('tualofixedsummary').isConfigured=false;
		*/
    //me.getView().getFeature('tualofixedsummary').configureAll();
    //Ext.defer(me.getView().getFeature('tualofixedsummary').onBoxReady.bind(me.getView().getFeature('tualofixedsummary')),1000,[]);
  },
  reconfigureStore: function(config){
    var model = this.view.getViewModel();
    var list = model.getStore('aggregate');
    var proxy = list.getProxy();

    proxy.setUrl(config.url);
    if (config.extraParams){
      for(var prop in config.extraParams){
        if (config.extraParams.hasOwnProperty(prop)){
          proxy.setExtraParam(prop,config.extraParams[prop]);
        }
      }
    }
    console.log('reconfigureStore',list,proxy,config);
  }
});
