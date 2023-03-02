Ext.namespace('Tualo');
Ext.define('Tualo.tualojs.Ajax', {

    alias: 'Tualo.Ajax',
    singleton: true,
    request: function(options){
      var success = function(){};
      var failure = function(){};
      var json = function(){};
  
      if (typeof options.url==='undefined'){
        throw new Error("url not set")
      }
      if (typeof options.params==='undefined'){
        options.params={};
      }
      
      
  
      if (typeof options.success==='function'){
        success = options.success;
      }
      if (typeof options.failure==='function'){
        failure = options.failure;
      }
      if (typeof options.json==='function'){
        json = options.json;
      }
      if (options.showWait===true){
        Ext.MessageBox.wait('Bitte warten ...');
      }
      if (options.showProgress===true){
        Tualo.Ajax.progress = Ext.MessageBox.progress('Bitte warten ...');
        Tualo.Ajax.progress.updateProgress(options.progressIndex/options.progressLength);
  
      }
      options.success=function(response, opts){
        if (options.showWait===true){
          Ext.MessageBox.hide();
        }
        
        if (options.noDecode!==true){
          var obj={};
          try{
            obj = Ext.decode(response.responseText);
          }catch(e){
            console.error(e,options);
            Ext.MessageBox.alert('Fehler','Die Serverantwort konnte nicht verarbeitet werden');
          }
          json.apply(this,[obj,response.responseText]);
        }
        success.apply(this,[response, opts]);
      }
      options.failure=function(response, opts){
        if (options.showWait===true){
          Ext.MessageBox.hide();
        }
        if ((options.showProgress===true)) Tualo.Ajax.progress.hide();
  
        failure.apply(this,[response, opts]);
      }
  
      Ext.Ajax.request(options);
  
    },
    download: function(options){
      var success = function(){};
      if (typeof options.success==='function'){
        success = options.success;
      }
      options.success=function(response, opts){
  
        try{
          var obj = Ext.decode(response.responseText);
          if (obj.success===true){
            if (obj.file){
              Ext.tualo.window.DownloadManager.notify_download(obj.file);
            }else{
              throw new Error('Es wurde kein Datei-Attribut zurück gegeben.');
            }
          }else{
            throw new Error(obj.msg||obj.message);
          }
        }catch(e){
          console.error(e);
          throw new Error('Die Serverantwort konnte nicht verarbeitet werden');
        }
        success.apply(this,[response, opts]);
      }
  
      this.request(options);
  
    },
    getSetting: function(opt){
      if (typeof login!=='undefined'){
      if (login!=''){
      this.request({
        params:{
          cmp:'cmp_tualo',
          p:'config/setting',
          id: opt.key
  
        },
        scope: opt.scope,
        json: function(o){
          if (o.success){
            opt.result.apply(opt.scope,[o.data]);
          }
        }
      });
      }
      }
    },
    setSetting: function(opt){
      this.request({
        params:{
          cmp:'cmp_tualo',
          p:'config/setting',
          id: opt.key,
          setting: opt.setting
        },
        scope: opt.scope,
        json: function(o){
          if (o.success){
            opt.result.apply(opt.scope,[o.data]);
          }
        }
      });
    }
  });
  
  Tualo.Ajax = Tualo.tualojs.Ajax;