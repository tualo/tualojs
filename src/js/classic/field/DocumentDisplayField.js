Ext.define('Ext.tualo.form.field.DocumentDisplayField', {
  extend:'Ext.form.field.Display',
  alias: 'widget.dsdocumentdisplayfield',
  requires: ['Ext.util.Format', 'Ext.XTemplate'],
  fieldSubTpl: [
      '<div id="{id}" data-ref="inputEl" tabindex="-1" role="textbox" aria-readonly="true"',
      ' aria-labelledby="{cmpId}-labelEl" {inputAttrTpl}',
      '<tpl if="fieldStyle"> style="width:100%;{fieldStyle}"</tpl>',
      ' class="{fieldCls} {fieldCls}-{ui}"><div id="{id}-image"></div></div>',
      {
          compiled: true,
          disableFormats: true
      }
  ],
  setValue: function(v) {
    this.loadFile(v);
  },
  getValue: function() {
    return this.getRawValue();
  },
  height: 45,
  loadFile: function(id) {
    var me = this;
    me.mimetype = 'image/png';
    var w = me.getWidth();
    if (w<300){
      w=300;
    }
    var url = './dsfile/inline/'+this.tablename+'/'+id;
    Ext.Ajax.request({
      url: './dsfile/inlinebase64/'+this.tablename+'/'+id,
      params: {
        maxwidth: w,
        maxheight: me.getHeight()*4
      },
      scope: this,
      success: function(f, o) {
        if (me.rendered) {
          var el = document.getElementById(me.id+'-bodyEl');
          if (f.responseText!==''){
            el.innerHTML = '<img width="100%" src="data:' + me.mimetype+';base64,'+ f.responseText +'" ondblclick="window.open(\''+url+'\')" />';
          }else{
            el.innerHTML = 'kein Dokument';
          }
        }
      }
    });
  }
});
