Ext.define('Ext.tualo.grid.Panel',  {
  //extend: 'Ext.ux.LiveSearchGridPanel',
  extend: 'Ext.grid.Panel',
  alias: ['widget.tualocontextgridpanel'],
  initComponent: function(config){
    this.on('itemcontextmenu', this.onContextmenu, this);
    this.on('containercontextmenu', this.onContainerContextmenu, this);
    this.callParent(arguments);
  },
  paramfieldPrefix: '',

  getReferencedRecord: function(){
    try{
      var model = this.getViewModel();
      if (model){
        return model.get('referencedRecord');
      }
    }catch(e){
      
    }
    return null;
  },

  

  onContextmenuItemClicked: function(btn){

    if (typeof this.contextconfig!=='undefined'){
      
      var config = this.contextconfig[btn.contextconfigIndex];
      if (config){
        if (config.handler){
          config.handler.apply(config.scope,[config]);
          return;
        }
        var list = [];
        var rlist = [];
        var selm = this.getSelectionModel();
        var recs = selm.getSelection();

        if (selm.$className=='Ext.grid.selection.SpreadsheetModel'){
          recs = [];
          selm.getSelected().eachCell(function(c){
              recs.push(c.record);
          });
        }



        for(var i=0;i<recs.length;i++){
          list.push(recs[i].get(this.paramfieldPrefix+config.paramfield))
          rlist.push(recs[i]);
        }
        var view = 'View';
        if (config.view){
          view = config.view;
        }
        var className = 'Ext.cmp.'+config.component+'.context.'+view;

        if (config.cmd){
          if (Ext.ClassManager.aliasToName['widget.'+config.cmd]){
            className = Ext.ClassManager.aliasToName['widget.'+config.cmd];
          }
        }
        var contextdata =  {
          params: config.params,
          field: config.paramfield,
          list: list,
          caller: this,
          rlist: rlist,
          referencedRecord: this.getReferencedRecord()
        };
        
        

        var r = true;
        try{
          r = this.up().up().up().up().up().up().controller.onReportContextMenu(this,contextdata);
        }catch(e){

        }
        if ((r)&&(this.fireEvent('contextitmclick',[this,contextdata]))){

          var pnl = Ext.create(className,{
            contextdata: contextdata
          });

          var wnd = Ext.create('Ext.tualo.Window',{
            closeAction: 'close',
            modal: true,
            layout: 'fit',
            title: config.name,
            items:[pnl]
          });
          wnd.show();
          wnd.resizeMe();
        }


      }

    }
  },
  onContainerContextmenu: function(m,e){
    //console.log('--<<<-')
    this.onContextmenu(this.view,null,null,0,e);
  },
  onContextmenu: function(view, record, item, index, e){

    if (typeof this.contextconfig!=='undefined'){
      var cm = [];//this.contextconfig;
      for(var i=0;i<this.contextconfig.length;i++){
        if (this.contextconfig[i].cmd){
          if (Ext.ClassManager.aliasToName['widget.'+this.contextconfig[i].cmd]){
            cm.push({
              scope: this,
              text: this.contextconfig[i].text,
              contextconfigIndex: i,
              handler: this.onContextmenuItemClicked
            });
          }
        }else if(this.contextconfig[i].handler){
          if (typeof this.contextconfig[i].handler=='string'){
            var p=this;
            var handler = this.contextconfig[i].handler;
            var foundFn=null;
            while(!Ext.isEmpty(p)&&(Ext.isEmpty(foundFn) ) ){
              if (typeof p[handler]=='function'){
                foundFn = p[handler]
              }
              if (!Ext.isEmpty(p.controller) && (p.controller[handler]=='function')){
                foundFn = p.controller[handler];
              }
              p=p.up();
            }
            if (!Ext.isEmpty(foundFn)){
              this.contextconfig[i].handler = foundFn;
            }
          }
          var mc = this.contextconfig[i];
          mc.scope = this;
          mc.grid = this;
          mc.contextconfigIndex = i;
          /*
          var mc = {
            scope: this,
            text: this.contextconfig[i].text,
            contextconfigIndex: i,
            grid: this,
            handler: this.contextconfig[i].handler
          };
          if (this.contextconfig[i].listeners){
            mc.listeners = this.contextconfig[i].listeners;
          }
          */
          cm.push(mc);

        }else{
          var view = 'View';
          if (this.contextconfig[i].view){
            view = this.contextconfig[i].view;
          }
          
          cm.push({
            scope: this,
            text: this.contextconfig[i].name||this.contextconfig[i].text,
            contextconfigIndex: i,
            handler: this.onContextmenuItemClicked,

            disabled: (typeof Ext.ClassManager.classes['Ext.cmp.'+this.contextconfig[i].component+'.context.'+view]==='undefined')
          });
        }
      }



      if (typeof this.contextmenu==='undefined'){
        this.contextmenu = new Ext.menu.Menu({
          grid: this,
          items: cm
        });
      }

    }


    var p= e.getXY();
    if (typeof this.contextmenu!=='undefined'){
      this.contextmenu.showAt(p);
    }
    e.preventDefault();
    e.stopEvent();
    return false;
  }

})
