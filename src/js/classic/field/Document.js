Ext.define('Ext.tualo.form.field.Document', {
  extend: 'Ext.form.field.Text',
  alias: 'widget.dsdocumentfield',
  /*
  fieldSubTpl:
  [
    '<input  id="{id}"  data-ref="inputEl" ',
    '<tpl if="tabIdx != null"> tabindex="{tabIdx}"</tpl>',
    '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
    '<tpl if="ariaEl == \'inputEl\'">',
    '<tpl foreach="ariaElAttributes"> {$}="{.}"</tpl>',
    '</tpl>',
    '<tpl foreach="inputElAriaAttributes"> {$}="{.}"</tpl>',
    ' class="{fieldCls} {typeCls} {typeCls}-{ui} {editableCls} {inputCls} {fixCls}" autocomplete="off">',
    'value="{values.value}"/>',
  ],
  */
  triggers: {


    upload: {
        cls: 'x-fa fa-upload my-foo-trigger',
        //cls: 'my-foo-trigger',
        handler: function() {
            this.upload();
        }
    },
    download: {
        cls: 'x-fa fa-download my-foo-trigger',
        //cls: 'my-foo-trigger',
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
    Ext.Ajax.request({
      url: './dsfile/mime',//?sid=" + sid + '&b=' + this.parent.index + '&cmp=cmp_bezugstamm&TEMPLATE=NO&p=ajax/utils/file/mime',
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
              txt+=" | "+res.original_filename;
            }
            if (!Ext.isEmpty(res.filesize)){
              txt+=" | "+ this.getReadableFileSizeString(res.filesize);
            }
            this.mimeEl.innerHTML = txt;
                        
          } else {
            console.log('Fehler',res.msg);
          }
        } catch (e) {
          alert("Fehler: " + f.responseText + e);
        }
      },
      failure: function(f) {
      }
    });
  },

  download: function(btn){
    Ext.Ajax.request({
      url: './dsfile/download',
      params: {
        t: this.tablename,
        id: this.value
      },
      scope: this,
      success: Ext.tualo.window.DownloadManager.download
    });
  },
  upload: function(btn) {
    var me = this;
    var wnd = Ext.create('Ext.tualo.Window', {
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
                  var form = me.up('formview-'+me.tablename);
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
                    me.up('form').currentrecord.store.sync({
                      callback: function(x,o){
                        var values = o.operations.create[0].data;
                        console.log();
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

Ext.define('Ext.tualo.form.field.DocumentAutoSave', {
  extend: 'Ext.tualo.form.field.Document',
  alias: 'widget.dsdocumentfieldautosave',
  autoSave: true
}); 

Ext.define('Ext.tualo.form.field.DocumentX', {
  extend: 'Ext.form.FieldContainer',
  alias: ['widget.dsdocumentfieldx'],
  mixins: {
    labelable: 'Ext.form.Labelable',
    field: 'Ext.form.field.Field'
  },
  cls: 'x-form-text-default',
  layout: 'hbox',
  setValue: function(v) {
    this.loadFile(v);
    this.field.setValue(v);
  },
  getValue: function() {
    return this.field.getValue();
  },
  downloadFile: function(btn){
    Ext.Ajax.request({
      url: './dsfile/download',
      params: {
        t: this.tablename,
        id: btn.resID
      },
      scope: this,
      success: Ext.tualo.window.DownloadManager.download
    });
  },
  loadFile: function(id) {
    Ext.Ajax.request({
      url: './dsfile/mime',//?sid=" + sid + '&b=' + this.parent.index + '&cmp=cmp_bezugstamm&TEMPLATE=NO&p=ajax/utils/file/mime',
      params: {
        t: this.tablename,
        id: id
      },
      scope: this,
      success: function(f, o) {
        try {
          var res = Ext.JSON.decode(f.responseText);
          if (res.success) {
            this.panel.removeAll(true);
            this.panel.add(Ext.create('Ext.button.Button', {
              text: res.mime,
              resID: res.id,
              scope: this,
              handler: this.downloadFile
            }));
          } else {
            console.log('Fehler',res.msg);
          }
        } catch (e) {
          alert("Fehler: " + f.responseText + e);
        }
      },
      failure: function(f) {
      }
    });
  },
  initComponent: function() {
    var me = this;
    this.layout = {
      type: 'hbox',
      align: 'stretch'
    };
    this.border = false;
    this.anchor = '100%';
    this.img_id = Ext.id();
    this.field = Ext.create('Ext.form.field.Hidden', {
      value: this.value
    });
    this.uplform = Ext.create('Ext.form.Panel', {
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
      ]
    });

    this.items = [
      this.panel = Ext.create('Ext.panel.Panel', {
        flex: 1,
        border: false,
        items: [ ]
      }),
      this.button = Ext.create('Ext.Button', {
        text: '...',
        scope: this,
        handler: function(btn) {
          var wnd = Ext.create('Ext.tualo.Window', {
            modal: true,
            title: "Dokument hochladen",
            width: 300,
            height: 200,
            closeAction: 'close',
            bodyPadding: 10,
            items: [
              this.uplform
            ],
            buttons: [{
              text: 'Abbrechen',
              handler: function(btn) {
                btn.up().up().close();
              }
            }, {
              text: '&Uuml;bernehmen',
              scope: this,
              handler: function(btn) {
                var wnd = btn.up().up();


                console.log('wnd.uplform.getForm().isValid()',me.up('form'),wnd.uplform.getForm().isValid());
                if (wnd.uplform.getForm().isValid()) {
                  var keys = {};
                  if (this.referenceID){
                    console.log(this.referenceID);
                  }else{
                    var form = me.up('formview-'+me.tablename);
                    console.log('formview-'+me.tablename,form);

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

                      //todo check lowerprefix
                      console.log(me);

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
                    t: wnd.tablename,
                    fieldName: wnd.fieldName,
                  };
                  params=Ext.apply(params,keys);
                  console.log(params,wnd.uplform);
                  Ext.MessageBox.wait('Upload','Bitte warten...');
                  wnd.uplform.getForm().submit({
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
                } else {
                  Ext.MessageBox.alert("Fehler", "Die Daten sind nicht korrekt.");
                }
              }
            }]
          });
          wnd.uplform = this.uplform;
          wnd.fieldName = this.name;
          wnd.field = this.field;
          wnd.tablename = this.tablename;

          wnd.show();
        }
      })
    ];

    this.callParent(arguments);
  }
});
