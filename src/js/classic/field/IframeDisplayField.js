Ext.define('Ext.tualo.form.field.IframeDisplayField', {
  extend:'Ext.form.field.Display',
  alias: 'widget.iframedisplayfield',
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
      console.log('loadFile',name);
      var me = this;

      let iframe = document.getElementById(me.id+'-iframeEl');
      if (iframe){
        iframe.src = name;
        me.on('resize',me.onResizeX);
      }else{
        var el = document.getElementById(me.id+'-bodyEl');
        var w = me.container.getWidth()-24;
        var h = me.container.getHeight()*0.70;
        el.innerHTML = '<iframe id="'+me.id+'-iframeEl'+'" style="border:0px;width:'+w+'px; height:'+h+'px" src="'+ name +'"></iframe>';
        me.interval = setInterval(me.fixsize.bind(me),500);
      }
    }catch(e){
      console.log(e);
    }
  },
  fixsize: function( ) {
    var me = this;
    let iframe = document.getElementById(me.id+'-iframeEl');
    if (iframe){

      if (iframe.style.width != ( me.container.getWidth()-24)+'px' ){
        iframe.style.width =( me.container.getWidth()-24)+'px';
        iframe.style.height = (me.container.getHeight()*0.70)+'px';
      }
    }else{
      clearInterval(me.interval)
    }
  },
  onDestroy: function(){
    clearInterval(me.interval)
    this.callParent(arguments);
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
