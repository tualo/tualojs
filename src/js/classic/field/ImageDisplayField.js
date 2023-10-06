Ext.define('Ext.tualo.form.field.ImageDisplayField', {
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
  },
  getValue: function() {
    return this.getRawValue();
  },
  height: 45,
  loadFile: function(name) {
    try{
      var me = this;
      var el = document.getElementById(me.id+'-bodyEl');
      el.innerHTML = '<img width="100%" style="max-width:300px;" src="'+ name +'"/>';
    }catch(e){
      console.log(e);
    }
  },
  onDisable: function() {
    try{
      this.callParent(arguments);
    }catch(e){
      console.log('*',e);
    }
  },
  onEnable: function() {
    try{
      this.callParent(arguments);
    }catch(e){
      console.log('*',e);
    }
  }
});
