Ext.define('Ext.tualo.grid.column.ImageDocumentColumn', {
  extend: 'Ext.grid.column.Column',
  alias: 'widget.tualoimagedocumentcolumn',

  renderer : function(val,meta,rec,dataIndex,cell){
    /*
    var width =35;
    var height=25;
    */
   if(val==0){
    return '&nbsp;';
   }
   return '<img src="./dsfile/inlinepng/'+rec.store.tablename+'/'+val+'.png?maxheight=30">';

      /*
    var getRandomArbitrary = function (min, max) {
      return Math.random() * (max - min) + min;
    }
    var loadFile=function(elementId,tablename,loadid) {
      

      mimetype = 'image/png';
      Ext.Ajax.request({
        url: './dsfile/inlinebase64/'+tablename+'/'+loadid,
        params: {
          maxheight: 30*4
        },
        
        success: function(f, o) {
            
            var el = document.getElementById(elementId);

            console.log('elementId',elementId,el,f.responseText,o);
            if (el){
              try{
                if (f.responseText!==''){
                  //window.el = el
                  el.style.height=el.parentNode.getClientRects()[0].height;
                  el.style.backgroundSize='contain';
                  el.style.backgroundRepeat='no-repeat';
                  el.style.backgroundImage='url(data:image/png;base64,'+f.responseText.replace(/\n/g,'')+')';
                }else{
                  el.style.backgroundColor='#aaa';
                }
                //console.log(el.style.backgroundImage,'url(data:image/png;base64,'+f.responseText+')');
              }catch(e){
                console.log(e);
              }
            }
        }
      });
    }
    if(rec.store.tablename){
      var elementId = 'imagecell-'+rec.store.tablename+'-'+getRandomArbitrary(10000,90000)+'';
      if (val!=0){
      loadFile(elementId,rec.store.tablename,val);
      }
      return '<div id="'+elementId+'"></div>';
    }else{
      return '&nbsp;';
    }
    */

  }
  })
