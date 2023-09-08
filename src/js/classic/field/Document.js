Ext.define('Ext.tualo.form.field.Document', {
  extend: 'Ext.form.field.Text',
  alias: 'widget.dsdocumentfield',
  triggers: {


    upload: {
        cls: 'x-fa fa-upload my-foo-trigger',
        handler: function() {
            this.upload();
        }
    },
    download: {
        cls: 'x-fa fa-download my-foo-trigger',
        handler: function() {
            this.download();
        }
    }
  },
  autoSave: false,
  initComponent: function() {
    this.callParent(arguments);

  },

  onRender: function(){
    this.callParent(arguments);
    var el = this.getEl().dom.querySelector('input');

    el.readOnly=true;
    el.style.opacity=0.1;
    el.style.width='25px';
    el.type = 'hidden';

    
    var node = document.createElement("div");                 // Create a <li> node
    this.mimeEl = node;
    var textnode = document.createTextNode("");         // Create a text node
    node.appendChild(textnode); 
    el.parentElement.insertBefore(node, el.nextSibling);
    
  },

  setValue: function(v) {
    this.loadFile(v);
    this.callParent(arguments);
  },
  /*
  getValue: function() {
    return this.value;
  },
  */
  getReadableFileSizeString: function (fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
        fileSizeInBytes = fileSizeInBytes / 1024;
        i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  },
  loadFile: function(id) {
    this.mimeEl.innerHTML = "loading...";
    Ext.Ajax.request({
      url: './dsfile/mime',
      params: {
        t: this.tablename,
        id: id
      },
      scope: this,
      success: function(f, o) {
        try {
          var res = Ext.JSON.decode(f.responseText);
          if (res.success) {
            this.mimeEl.className="x-form-text-default";
            var txt = res.mime;
            if (res.original_filename){
              txt+=" | "+res.original_filename;
            }
            if (!Ext.isEmpty(res.filesize)){
              txt+=" | "+ this.getReadableFileSizeString(res.filesize);
            }
            this.mimeEl.innerHTML = txt;
                        
          } else {
            this.mimeEl.innerHTML = "";
            console.log('Fehler',res.msg);
          }
        } catch (e) {
          this.mimeEl.innerHTML = "";
          console.error("Fehler: " + f.responseText + e);
        }
      },
      failure: function(f) {
        this.mimeEl.innerHTML = "";
      }
    });
  },

  download: function(btn){
    
    Tualo.Ajax.download({
      showWait: true,
      url: './dsfile/download',
      params: {
        t: this.tablename,
        id: this.value
      },
      timeout: 300000,
      method: 'POST'
    });

  },
  upload: function(btn) {
    var me = this;
    var wnd = Ext.create('Ext.window.Window', {
      modal: true,
      title: "Dokument hochladen",
      width: 400,
      height: 300,
      closeAction: 'close',
      bodyPadding: 10,
      items: [
        {
          xtype: 'form',
          labelWidth: 75,
          frame: true,
          fileUpload: true,
          border: false,
          bodyPadding: 10,
          anchor: '100% 100%',
          defaults: {
            width: 300
          },
          defaultType: 'textfield',
          items: [
            Ext.create('Ext.panel.Panel', {
              anchor: '100%',
              autoHeight: true,
              border: false,
              bodyStyle: 'background: transparent;',
              html: 'Bitte wählen Sie eine Datei aus.'
            }), {
              xtype: 'filefield',
              fieldLabel: 'Datei',
              name: 'userfile',
              border: false,
              value: '',
              anchor: '100%'
            }
          ],
          buttons: [{
            text: 'Abbrechen',
            handler: function(btn) {
              btn.up().up().up().close();
            }
          }, {
            text: '&Uuml;bernehmen',
            scope: this,
            handler: function(btn) {
              var wnd = btn.up().up().up();
              var uplform = btn.up('form');
    
              if (uplform.getForm().isValid()) {
                var keys = {};
                if (this.referenceID){
                  console.log(this.referenceID);
                }else{
                  var form = me.up('dsform_'+me.tablename);
                  var missingValue=false;

                  var missingValueName='';
                  if (form){
    
                    var values={};
                    var rec= form.getForm().getRecord();
                    if (rec){
                      values = rec.data;
                    }else if(form.currentrecord){
                      values = form.currentrecord.data;
                    }else{
                      values = form.getForm().getValues();
                    }
                    var primaryKeys = me.primaryKeys;
                    for(var i=0;i<primaryKeys.length;i++){
                      if (typeof values[primaryKeys[i]]!=='undefined'){
                        keys[primaryKeys[i]]=values[primaryKeys[i]];
                      }else{
                        missingValue=true;
                        missingValueName=primaryKeys[i];
                      }
                    }
                    
                  }
                }


                if (missingValue==true){
                  Ext.MessageBox.alert('Fehler','Mindestens ein Pflichtfeld fehlt ('+missingValueName+')');
                  return;
                }
                var params = {
                  t: me.tablename,
                  fieldName: me.name,
                };
                params=Ext.apply(params,keys);
    
                if ( !Ext.isEmpty(me.up('form')) && !Ext.isEmpty(me.up('form').currentrecord) &&  me.up('form').currentrecord.phantom){
                  if(me.autoSave){
                    me.up('form').getRecord().store.sync({
                      callback: function(x,o){
                        var values = o.operations.create[0].data;
                        
                        var primaryKeys = me.primaryKeys;
                        for(var i=0;i<primaryKeys.length;i++){
                          if (typeof values[primaryKeys[i]]!=='undefined'){
                            keys[primaryKeys[i]]=values[primaryKeys[i]];
                          }else{
                            missingValue=true;
                            missingValueName=primaryKeys[i];
                          }
                        }
                        params = {
                          t: me.tablename,
                          fieldName: me.name,
                        };
                        params=Ext.apply(params,keys);
            
                        me.internalUpload(uplform,wnd,params,me);
                      }
                    });
                  }
                  return false;
                }else{
                  me.internalUpload(uplform,wnd,params,me);
                }

                
              } else {
                Ext.MessageBox.alert("Fehler", "Die Daten sind nicht korrekt.");
              }
            }
          }]
        }
      ],
      
    });
    wnd.uplform = this.uplform;
    wnd.fieldName = this.name;
    wnd.field = this.field;
    wnd.tablename = this.tablename;

    wnd.show();
  },
  internalUpload: function(uplform,wnd,params,me){
    Ext.MessageBox.wait('Upload','Bitte warten...');
    uplform.getForm().submit({
      scope: wnd,
      url: './dsfile/upload',
      params: params,
      success: function(f, a) {
        Ext.MessageBox.hide();
        var o = Ext.JSON.decode(a.response.responseText);
        if (o.success) {

          me.setValue(o.file_id);
        } else {
          alert(a.response.responseText);
        }
        //Ext.MessageBox.hide();
        wnd.close();
      },
      failure: function(){
        Ext.MessageBox.hide();
        Ext.MessageBox.alert("Fehler", "Fehler vom Server.");
      }
    });
  }
});


