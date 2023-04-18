Ext.ns('Tualo');
Tualo.getFNFromString = function(str){
  var l = str.split('.');
  var current=window;
  for(var i=0; i<l.length-1;i++){
    if (typeof current[l[i]]=='object'){
      current=current[l[i]];
    }
  }
  if (typeof current[l[l.length-1]]=='function'){
    return current[l[l.length-1]];
  }
  return null;
}



Ext.define('Override.grid.plugin.BufferedRenderer.RefreshSize', {
  override : 'Ext.grid.plugin.BufferedRenderer',
  refreshSize: function() {
        var me = this,
            view = me.view,
            // If we have been told to skip the next refresh, or there is going to be
            // an upcoming layout, skip this op.
            skipNextRefreshSize = me.skipNextRefreshSize || (Ext.Component.pendingLayouts && Ext.Component.layoutSuspendCount) || !view.body.dom;
        // We only want to skip ONE time.
        me.skipNextRefreshSize = false;
        if (skipNextRefreshSize) {
            return;
        }
        // Cache the rendered block height.
        me.bodyHeight = me.grid.getElementHeight(view.body.dom);
        // Calculates scroll range.
        // Also calculates rowHeight if we do not have an own rowHeight property.
        if (typeof  me.deferedCallingRefreshSize=='undefined')  me.deferedCallingRefreshSize=0;
        try{
          me.scrollHeight = me.getScrollHeight();
        }catch(e){
          console.log('me.scrollHeight','error',me.deferedCallingRefreshSize);
          if (me.deferedCallingRefreshSize===0){
            me.deferedCallingRefreshSize=2;
            Ext.defer(me.refreshSize,500,me);
          }
        }
        me.deferedCallingRefreshSize--;
        if (me.deferedCallingRefreshSize<0) me.deferedCallingRefreshSize=0;
        me.stretchView(view, me.scrollHeight);

    }
});
/*  
Ext.define('Override.grid.plugin.BufferedRenderer', {
  override : 'Ext.grid.plugin.BufferedRenderer',
getScrollHeight: function() {
  var me = this,
      view = me.view,
      rows = view.all,
      store = me.store,
      recCount = store.getCount(),
      rowCount = rows.getCount(),
      row, rowHeight, borderWidth, scrollHeight;
  if (!recCount) {
      return 0;
  }
  if (!me.hasOwnProperty('rowHeight')) {
      if (rowCount) {
          if (me.variableRowHeight) {
              me.rowHeight = Math.floor(me.bodyHeight / rowCount);
          } else {
              row = rows.first();
              if (row){
                rowHeight = row.getHeight();
                // In IE8 we're adding bottom border on all the rows to work around
                // the lack of :last-child selector, and we compensate that by setting
                // a negative top margin that equals the border width, so that top and
                // bottom borders overlap on adjacent rows. Negative margin does not
                // affect the row's reported height though so we have to compensate
                // for that effectively invisible additional border width here.
                if (Ext.isIE8) {
                    borderWidth = row.getBorderWidth('b');
                    if (borderWidth > 0) {
                        rowHeight -= borderWidth;
                    }
                }
                me.rowHeight = rowHeight;
              }else{
                console.log('override','getScrollHeight()',me.bodyHeight,rowCount);
                me.rowHeight = Math.floor(me.bodyHeight / rowCount);
              }
          }
      } else {
          delete me.rowHeight;
      }
  }
  if (me.variableRowHeight) {
      // If this is the last page, ensure the scroll range is exactly enough
      // to scroll to the end of the rendered block.
      if (rows.endIndex === recCount - 1) {
          scrollHeight = me.bodyTop + me.bodyHeight - 1;
      } else // Calculate the scroll range based upon measured row height and our scrollPosition.
      {
          scrollHeight = Math.floor((recCount - rowCount) * me.rowHeight) + me.bodyHeight;
          // If there's a discrepancy between the boy position we have scrolled to,
          // and the calculated position, account for that in the scroll range
          // so that we have enough range to scroll all the data into view.
          scrollHeight += me.bodyTop - rows.startIndex * me.rowHeight;
      }
  } else {
      scrollHeight = Math.floor(recCount * me.rowHeight);
  }
  return (me.scrollHeight = scrollHeight);
}
});
*/
/*
Ext.define('Override.grid.column.Column', {
    override : 'Ext.grid.column.Column',
    bindRenderer: function (renderer) {
        var me = this;

        //<debug>
        if (renderer in Ext.util.Format) {
            Ext.log.warn('Use "formatter" config instead of "renderer" to use ' +
                         'Ext.util.Format to format cell values');
        }
        //</debug>

        me.hasCustomRenderer = true;

        return function () {
          var fn = Tualo.getFNFromString(renderer);
          if (typeof fn=='function'){
            return Ext.callback(fn, me.rendererScope, arguments, 0, me);
          }
          return Ext.callback(renderer, me.rendererScope, arguments, 0, me);
        };
    }
});
*/