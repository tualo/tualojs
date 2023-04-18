Ext.define('Ext.tualo.form.field.IMageDisplayField', {
  extend:'Ext.form.field.Display',
  alias: 'widget.imagedisplayfield',
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
    //this.setRawValue(v);
    //this.field.setValue(v);
  },
  getValue: function() {
    return this.getRawValue();
    //return this.field.getValue();
  },
  height: 45,
  loadFile: function(name) {
    var me = this;
//    me.mimetype = 'image/png';
    var el = document.getElementById(me.id+'-bodyEl');
    el.innerHTML = '<img width="100%" style="max-width:300px;" src="'+ name +'"/>';

    /*
    Ext.Ajax.request({
      url: './in dex.php',//?sid=" + sid + '&b=' + this.parent.index + '&cmp=cmp_bezugstamm&TEMPLATE=NO&p=ajax/utils/file/mime',
      params: {
        sid: sid,
        t: this.tablename,
        cmp: 'cmp_ds',
        p: 'file',
        decode: '0',
        TEMPLATE: 'NO',
        id: id,
        maxwidth: me.getWidth()*4,
        maxheight: me.getHeight()*4
      },
      scope: this,
      success: function(f, o) {
        if (me.rendered) {
          var width= me.getWidth();
          var height=me.getHeight();
          var el = document.getElementById(me.id+'-bodyEl');
          if (f.responseText!==''){
            el.innerHTML = '<img width="100%" src="data:' + me.mimetype+';base64,'+ f.responseText +'"/>';
          }else{
            el.innerHTML = 'kein Dokument';
          }
        }
      }
    });
    */
  }
});
